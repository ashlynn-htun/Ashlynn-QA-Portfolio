# Bug_004 – Address Form Accepts Invalid Postcode Format

**ID:** Bug_004  
**Category:** Functional / Data Validation  
**Feature:** User Profile – Address Management  
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
2. Navigate to **My account → Addresses**  
3. Click **Add new**  
4. Enter valid values in all required fields **except postcode**  
5. For Postcode, enter invalid format:  
   - `123`  
6. Click **Save**

---

## Expected Result
- System should validate postcode format  
- Inline error should appear (e.g., “Enter a valid postcode”)  
- Address should **not** be saved  
- User should remain on the address form

---

## Actual Result
- No validation error is shown  
- Address is saved successfully  
- Invalid postcode appears in the saved address  
- Data persists after page refresh

---

## Test Data
| Field     | Value        |
|-----------|--------------|
| Postcode  | 123          |
| City      | Bristol      |
| Address   | 123 Test St  |

---

## Impact
Storing incorrect postcodes affects:
- Shipping accuracy  
- Order delivery workflows  
- Third-party integrations (e.g., address verification services)  
- Overall data integrity  

Improper validation can lead to failed deliveries and incorrect logistics routing.

---

## Evidence
- Screenshot: `/Bug-Reports/Screenshots/Bug_004_invalid_postcode_input.png`  
- Screenshot: `/Bug-Reports/Screenshots/Bug_004_saved_invalid_postcode.png`

---

## Notes
This is a **validation gap** in the address form.  
While not a critical system failure, proper postcode validation is essential for accurate shipping, customer satisfaction, and maintaining clean customer records.
