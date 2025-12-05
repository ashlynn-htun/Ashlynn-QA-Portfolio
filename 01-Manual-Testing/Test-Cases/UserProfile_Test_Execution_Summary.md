# User Profile Module – Test Execution Summary

**Date:** 24/11/2025  
**Tested By:** Ashlynn  
**Application:** Demo Web Shop  
**Module:** User Profile (Account, Password, Addresses, Wishlist, Order History)

---

## Execution Overview
| Total Test Cases | Passed | Failed | Not Run |
|------------------|--------|--------|---------|
| 17               | 14     | 3      | 0       |

---

## Failed Test Cases
- **TC_Profile_03** → Bug_003_Name_Field_Invalid_Characters
- **TC_Profile_11** → Bug_004_Invalid_Postcode
- **TC_Profile_12** → Bug_005_Address_Delete_Internal_Error

---

## Not Run
**All test cases were executed.**  
No scenarios required exclusion for safety or ethical reasons because testing occurred on Demo Web Shop (safe demo environment).

---

## Key Observations

- **Profile overview and basic personal info updates work reliably**, though success messages are sometimes missing (UX improvement opportunity).
- **Password update flows are well-validated**, including incorrect password checks and strength requirements.
- **Address module has multiple issues**, including:
  - No validation for invalid postcode formats  
  - Internal error during deletion flow  
- **Wishlist and order history features behave as expected**, with correct data persistence.
- **Data persistence across logout/login is reliable** for all updated fields.

---

## Summary
User Profile features are generally functional, with most updates and data retrieval working as expected.  
However, several validation and error-handling gaps were identified—particularly in the **Address** module—which have been logged as defects.  
All high-impact flows (password change, wishlist, order history) passed successfully.

