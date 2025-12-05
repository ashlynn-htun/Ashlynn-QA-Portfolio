# Bug_006 – Uploaded Image Not Displayed After Publishing Post

**ID:** Bug_006  
**Category:** Functional / UI Rendering  
**Feature:** Post Creation → Image Upload  
**Environment:** Chrome 120, macOS, Mock Post Editor App  
**Severity:** S2  
**Priority:** P2  
**Status:** New  
**Date Found:** 25/11/2025  
**Found By:** Ashlynn  
**Reproducibility:** 100%

---

## Steps to Reproduce
1. Log in to the Mock Post Editor.  
2. Navigate to **Create New Post**.  
3. Click **Featured Image Upload** and select a valid JPG or PNG file (e.g., `sample.jpeg`).  
4. Enter a valid title and content.  
5. Click **Publish**.  
6. Navigate to the post view (dashboard → open published post if applicable).  

---

## Expected Result
- Selected image should be stored and immediately displayed in **preview** (if enabled)  
  and in **published view** after navigating back to the dashboard.  
- Image should render correctly inside the post content area.

---

## Actual Result
- Image file uploads successfully (no validation errors).  
- **Image does not appear** in preview or final published post.  
- No error messages shown.  
- The image `<img>` placeholder remains empty or missing.  

---

## Test Data
| Field     | Value         |
|-----------|---------------|
| Image     | sample.jpeg.  |
| Title     | "Image Test"  |
| Content   | "Testing upload" |
| Tags      | "image, test" |

---

## Impact
This affects:
- **User experience**, as images are a core part of blog-style content creation.  
- **Content accuracy**, since users cannot verify whether the correct image uploaded.  
- **Regression coverage**, because other image-related tests depend on this functionality.  
- Potentially indicates issues with:
  - Blob URL creation  
  - Saving image data in `localStorage`  
  - Rendering logic in `preview.html` or dashboard template  

---

## Evidence
- Screenshot: `/Bug-Reports/Screenshots/Bug_006_image_missing_preview.png`  
- Screenshot: `/Bug-Reports/Screenshots/Bug_006_image_missing_view.png`  

---

## Notes
Likely causes:
- Image URL (`ObjectURL`) not passed through correctly during publish flow  
- Missing binding for `<img id="prev-image">` in preview  
- Dashboard cards may not include image rendering logic  
- Sanitization step may unintentionally strip or block the URL  

This bug should be resolved before finalizing automation tests involving media uploads.

