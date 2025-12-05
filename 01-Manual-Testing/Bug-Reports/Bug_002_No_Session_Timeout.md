# Bug_002 – Session Does Not Expire After Inactivity

**ID:** Bug_002  
**Category:** Security / Session Management  
**Feature:** Login and Session Handling  
**Environment:** Chrome 120, macOS, ASOS Live Site  
**Severity:** S3  
**Priority:** P3  
**Status:** New  
**Date Found:** 24/11/2025  
**Found By:** Ashlynn  
**Reproducibility:** 100%

---

## Steps to Reproduce
1. Log in using a valid ASOS account.  
2. Remain completely idle for 15 minutes.  
3. Attempt any action (navigate to another page, refresh, or click UI elements).

---

## Expected Result
- Session should expire after a period of inactivity (common standard: 10–15 mins).  
- User should be redirected to the login page.  
- A clear session-timeout message should appear.

---

## Actual Result
- Session remains active with no timeout.  
- User can continue interacting with the site indefinitely.  
- No warning or session-expiry message is displayed.

---

## Test Data
- User Email: `tnhsashlynn@gmail.com`

---

## Impact
- Potential security issue on shared devices (e.g., public computers).  
- Allows unauthorized access if a session is left open.  
- Inconsistent with standard security practices for user authentication flows.  
- High impact for accounts with stored personal details or saved payment methods.

---

## Notes
This is a **session management issue**, not a functional login issue.  
Although it may be an intentional design choice, **from a QA perspective**, this fails the expected behaviour for typical session timeout standards (security requirement).
