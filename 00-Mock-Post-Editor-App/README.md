# Mock Post Editor – Local Test Environment

This is a **lightweight, browser-based Post Editor application** created specifically for:
- Functional testing practice  
- Manual test case execution  
- UI automation (Playwright, Selenium)  
- Bug report documentation  
- Portfolio demonstration

It runs entirely in the browser using `HTML + CSS + JavaScript`.  
**No backend or installation is required.**

---

## 🚀 Features Included

This application intentionally includes both **working features** and **controlled defects** to simulate real QA testing.

### ✔ Working Features
- Create posts with title, content, tags, and image  
- Save drafts  
- Publish posts  
- Edit and update existing posts  
- Delete posts  
- Public preview  
- XSS sanitisation  
- Autosave every 10 seconds  
- Timestamps  
- Image upload  
- Public read-only mode  
- Slow network–tolerant autosave  

### ❌ Known (Intentional) Defects
These defects are left intentionally to match your **Post Creation Test Cases**:

- Missing validation: duplicate tags allowed  
- Invalid tag formats accepted  
- Preview may fail to load images  
- Delete action does not instantly update UI  
- Title >150 chars causes UI lag  
- Some autosave timing inconsistency  

All defects are documented under:
01-Manual-Testing/Bug-Reports/

---

## 📂 Project Structure

Mock-Post-Editor-App/
├── login.html
├── dashboard.html
├── editor.html
├── preview.html
├── styles.css
└── script.js

---

## 🛠 How to Run the App

1. Download or clone this folder.
2. Open **login.html** in any modern browser:
   - Chrome (recommended)
   - Firefox
   - Edge
3. Log in with any credentials (no backend verification).
4. You can now:
   - Create, save, publish, and view posts  
   - Perform manual or automated tests  
   - Record bugs for your QA portfolio  

---

## 🎯 Purpose

This app exists to support these sections of my QA Portfolio:
- **Manual Test Cases** (Post Creation module)
- **Execution Summaries**
- **Bug Reports**
- **Automated UI Testing (Playwright)**

It provides a **safe, controlled environment** where tests can be realistically executed without relying on external real-world sites.

---

## 📌 Author
**Ashlynn Htun**  
Quality Assurance Tester  
2025
