# Bug_001 – Password Field Does Not Trim Leading/Trailing Spaces

**ID:** Bug_001  
**Category:** Functional / UX  
**Feature:** Login  
**Environment:** Chrome 120, macOS, ASOS Live Site  
**Severity:** S3  
**Priority:** P3  
**Status:** New  
**Date Found:** 24/11/2025  
**Found By:** Ashlynn  
**Reproducibility:** 100%

---

## Steps to Reproduce
1. Navigate to https://www.asos.com/account/login  
2. Enter email with leading/trailing spaces  
   - `"   tnhsashlynn@gmail.com   "`  
3. Enter password with spaces at start/end  
   - `"  CorrectP@ss123!  "`  
4. Click **Login**

---

## Expected Result
- System should trim input fields automatically  
- Login should succeed if credentials inside the trimmed value are correct  

---

## Actual Result
- Email trims correctly  
- **Password field does NOT trim spaces** → login fails  

---

## Test Data
| Field     | Value                           |
|-----------|---------------------------------|
| Email     | `"   tnhsashlynn@gmail.com   "` |
| Password  | `"  CorrectP@ss123!  "`         |

---
## Impact
This affects:
- UX (unexpected login failures)  
- Accessibility (non-technical users often enter trailing spaces)  
- Cross-browser consistency  

Many modern applications auto-trim inputs to prevent these issues.

---

## Evidence
- Screenshot: `/Bug-Reports/Screenshots/Bug_001_input_spaces.png`
- Screenshot: `/Bug-Reports/Screenshots/Bug_001_error_password_spaces.png`

---

## Notes
This is an **input normalization issue**.  
Fixing this will reduce login friction and improve form handling.
