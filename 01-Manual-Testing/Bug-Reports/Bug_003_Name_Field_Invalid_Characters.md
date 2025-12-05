# Bug_003 – Name Fields Accept Numeric Characters

**ID:** Bug_003  
**Category:** Functional / Data Validation / UX  
**Feature:** User Profile – Name Update  
**Environment:** Chrome 120, macOS, Demo Web Shop  
**Severity:** S3  
**Priority:** P3  
**Status:** New  
**Date Found:** 25/11/2025  
**Found By:** Ashlynn  
**Reproducibility:** 100%

---

## Steps to Reproduce
1. Login to https://demowebshop.tricentis.com  
2. Navigate to **My account**  
3. Enter numeric characters into First Name and Last Name fields:  
   - First Name: `ash123`  
   - Last Name: `456`  
4. Click **Save**

---

## Expected Result
- System should validate name fields  
- Numeric characters should be rejected  
- An error message should appear (e.g., “Name must contain letters only”)  
- Name should **not** be saved

---

## Actual Result
- No validation error displayed  
- System saves the numeric names successfully  
- Changes persist after page refresh  

---

## Test Data
| Field       | Value   |
|-------------|---------|
| First Name  | ash123  |
| Last Name   | 456     |

---

## Impact
This affects:
- Data integrity (invalid user data stored in system)  
- Order invoices & shipping details  
- Customer identity records  
- Professional appearance of generated documents  

Most modern e-commerce systems restrict name fields to alphabetic characters.

---

## Evidence
- Screenshot: `/Bug-Reports/Screenshots/Bug_003_name_numeric_input.png`  
- Screenshot: `/Bug-Reports/Screenshots/Bug_003_saved_numeric_name.png`

---

## Notes
This is a **data quality issue** rather than a breaking defect.  
However, proper validation improves customer trust, reduces database pollution, and ensures consistent formatting across the system.
