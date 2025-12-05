# Post Creation Module – Test Execution Summary

**Date:** 24/11/2025  
**Tested By:** Ashlynn  
**Application:** Mock Post Editor  
**Module:** Post Creation / Editing / Publishing  

---

## Execution Overview
| Total Test Cases | Passed | Failed | Not Run |
|------------------|--------|--------|---------|
| 23               | 22     | 1      | 0       |

---

## Failed Test Cases
- **TC_Post_21** → Bug_006_Image_Not_Displayed  

---

## Not Run
**All test cases were executed.**  
Since the Mock Post Editor is a contained local environment, no scenarios required omission for safety or risk avoidance.

---

## Key Observations

- **Core publishing and draft-saving flows work reliably**, including post creation, editing, deletion, and timestamp handling.
- **Autosave functionality performs well**, restoring content correctly even under slow network conditions.
- **Validation rules are robust**, catching blank fields, invalid tags, and title length limits.
- **Preview mode correctly displays rich text formatting** and safely neutralizes XSS attempts in both title and content.
- **Tag system behaves consistently**, including scenarios with duplicates (accepted intentionally).
- **Only one functional defect was found:** uploaded images are not rendered in preview or published views.

---

## Summary
Overall, the Post Creation module is **stable and functional**, with strong validation, consistent autosave behavior, and proper data persistence.  
Rich text formatting, draft handling, and editing flows behave as expected.  
The only defect observed relates to **image display after upload**, which has been logged for correction.

This module is suitable for both manual and automation testing practice, with realistic UI/UX behavior and reliable state management.
