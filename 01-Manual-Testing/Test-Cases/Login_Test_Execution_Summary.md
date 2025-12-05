# Login Module – Test Execution Summary

**Date:** 23/11/2025  
**Tested By:** Ashlynn  
**Application:** ASOS  
**Module:** Login  

---

## Execution Overview
| Total Test Cases | Passed | Failed | Not Run |
|------------------|--------|--------|---------|
| 17               | 13     | 2      | 2       |

---

## Failed Test Cases
- **TC_Login_07** → Bug_001_Input_Normalization  
- **TC_Login_11** → Bug_002_No_Session_Timeout  

---

## Not Run

### TC_Login_10 – Remember Me checkbox functionality  
Reason: The “Remember Me” option is not available on the ASOS login page; feature not implemented.

### TC_Login_12 – Multiple failed login attempts  
Reason: Unsafe for live testing; may unintentionally lock account or trigger security systems.

---

## Key Observations
- ASOS has strong validation for email and password formats.  
- Session timeout does not occur within short inactivity periods (likely intentional).  
- Input normalization inconsistent between email and password fields.  

---

## Summary
The login module is stable with minor usability/security-related issues documented.  
All major functional flows validated.
