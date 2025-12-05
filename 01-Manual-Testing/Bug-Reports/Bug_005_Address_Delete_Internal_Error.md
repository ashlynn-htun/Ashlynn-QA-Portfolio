# Bug_005 – Address Deletion Triggers Internal Server Error

**ID:** Bug_005  
**Category:** Functional / Backend  
**Feature:** User Profile → Addresses  
**Environment:** Chrome 120, macOS, Demo Web Shop  
**Severity:** S2  
**Priority:** P1  
**Status:** New  
**Date Found:** 25/11/2025  
**Found By:** Ashlynn  
**Reproducibility:** 100%

---

## Steps to Reproduce
1. Log in to https://demowebshop.tricentis.com  
2. Navigate to **My account → Addresses**  
3. Ensure there is at least one saved address  
4. Click **Delete** on an existing address  
5. Confirm deletion if prompted  
6. Observe the result  
7. Refresh the page   

---

## Expected Result
- Address should be deleted successfully  
- User should be returned to the updated address list  
- No errors should occur  

---

## Actual Result
- System displays a full-page **internal application error**  
- Message shown:  
  > “We're sorry, an internal error occurred. Our supporting staff has been notified…”  
- After refreshing the page, the **address is deleted successfully**  
- Error page appears **even though the delete action completed**  
- Behaviour is **inconsistent and confusing** 

---

## Test Data
| Field        | Value               |
|--------------|---------------------|
| First name   | Ashlynn             |
| Last name    | Htun                |
| Address      | 123 Test Street     |
| City         | Bristol             |
| Postcode     | BS1 1AA             |

---

## Impact
This affects:
- User confidence (operation appears to fail but actually succeeds)  
- UX flow (error page interrupts the process)  
- Data integrity expectations (state is changed despite visible error)  
- System reliability (indicates backend exception after DB update)  

The defect is **functional and backend-related**, requiring server-side fix.

---

## Evidence
- Screenshot: `/Bug-Reports/Screenshots/Bug_005_internal_error.png`  
- Screenshot: `/Bug-Reports/Screenshots/Bug_005_address_removed_after_refresh.png`

---

## Notes
Likely causes:
- Backend executes delete successfully → **then crashes on response handling**  
- Or exception thrown after DB operation (e.g., null reference, redirects, missing view template)

This behaviour may confuse users into retrying actions and unintentionally deleting multiple items.
