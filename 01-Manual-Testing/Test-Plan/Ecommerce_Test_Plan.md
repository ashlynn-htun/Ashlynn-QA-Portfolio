# **E-Commerce Test Plan**
**Project:** Multi-Module QA Portfolio  
**Prepared By:** Ashlynn Htun  
**Date:** 23/11/2025  
**Applications Covered:**
- **ASOS (Live Site – Manual Testing)**  
- **Demo Web Shop (Safe Demo Environment – Manual Testing)**  
- **Mock Post Editor (Local App – Automation Practice)**  

---

# **1. Introduction**

This test plan outlines the overall QA approach for validating core e-commerce functionalities across three environments:

| Application | Purpose | Testing Type |
|------------|---------|--------------|
| **ASOS (Live Site)** | Validate non-destructive flows on a real production site | Manual |
| **Demo Web Shop** | Safe, demo environment for complete functional testing | Manual |
| **Mock Post Editor** | A custom local app for demonstrating UI automation and advanced validation | Automation |

By combining real-world testing (ASOS), full-flow manual testing (Demo Web Shop), and automated UI testing (Mock Post Editor), this portfolio demonstrates practical QA skills across varied contexts.

---

# **2. Scope of Testing**

## **2.1 In Scope**
### **ASOS (Manual – Non-Destructive Only)**  
- Login  
- Basic navigation  
- Product search  
- PDP verification  
- Add to bag  
- Checkout page rendering (no real orders)

### **Demo Web Shop (Manual – Full Functional Coverage)**  
- Login  
- Update profile (name, password, email)  
- Address management  
- Wishlist  
- Order history  

### **Mock Post Editor (Automation)**  
- Create, edit, delete posts  
- Drafts and autosave  
- Validation rules  
- Rich text formatting  
- Image uploads  
- Security (XSS neutralization)

---

# **3. Out of Scope**
- Placing real orders on ASOS  
- Performance/load testing (beyond minor observations)  
- Backend testing for ASOS (not permitted on live site)  
- Payment gateway testing  
- Mobile app testing  
- Email/SMS verification flows

---

# **4. Test Strategy**

## **4.1 Manual Testing**

### **ASOS**
- Only safe, non-destructive flows executed  
- No account lockout, rate-limit stress tests, or checkout submission  
- Exploratory testing to uncover UX/UI issues  
- Focus on:
  - Input validation  
  - Responsiveness  
  - Error messaging  
  - Search behavior  

### **Demo Web Shop**
- Full test case coverage based on functional requirements  
- Validation of profile management features  
- CRUD checks for addresses & wishlist  
- Negative, boundary, edge-case testing

## **4.2 Automation Testing (Mock Post Editor)**
Automation performed using:
- **Playwright/Selenium**
- JavaScript/TypeScript

Automated scenarios include:
- Post creation (valid/invalid)
- Draft autosaving and recovery
- Rich text formatting checks
- Image upload validation
- XSS sanitization testing
- Post editing and deletion
- Metadata validation (timestamps, tags)

---

# **5. Test Deliverables**

### **Documents**
- **Test Plan** (this file)
- **Excel Test Case Files**
  - Login_Test_Cases.xlsx  
  - UserProfile_Test_Cases.xlsx  
  - Post_Creation_Test_Cases.xlsx  
- **Execution Summaries**
  - Login Module Summary  
  - User Profile Module Summary  
  - Post Creation Module Summary  

### **Reports**
- **Bug Reports** (Markdown files)
- UI Automation Reports (HTML reports)

### **Artifacts**
- Screenshots of defects  
- Sample automation scripts  
- Local test environment (Mock Post Editor app)

---

# **6. Test Environments**

| Application | URL | Environment Type |
|------------|-----|------------------|
| ASOS | https://www.asos.com | Live production (non-destructive only) |
| Demo Web Shop | https://demowebshop.tricentis.com | Public demo testing site |
| Mock Post Editor | http://localhost:5500 / local folder | Local testing environment |

**Browsers tested:**  
- Chrome 120+  
- Firefox 118+  
- Edge 118+  

**Operating System:**  
- macOS

---

# **7. Entry & Exit Criteria**

## **Entry Criteria**
- Test cases reviewed and approved  
- Test data prepared  
- Environment accessible  
- Mock Post Editor running locally  

## **Exit Criteria**
- All planned test cases executed  
- All high-severity bugs documented  
- No open **S1** unresolved defects  
- Execution summaries completed  
- Regression tests passed for automated areas  

---

# **8. Risk Analysis**

| Risk | Impact | Mitigation |
|------|--------|------------|
| ASOS limits destructive testing | Cannot validate end-to-end checkout | Restrict ASOS to safe flows only |
| Demo Web Shop instability | Incorrect functional behavior | Execute regression and retests; document defects |
| Mock Editor is custom-built | App may have internal inconsistencies | Fix high-impact issues; document real defects |
| Browser differences | UI inconsistencies | Partial cross-browser testing (Chrome, Firefox, Edge) |

---

# 9. Test Schedule (Revised – More Realistic)

| Phase | Activities | Duration |
|-------|------------|----------|
| Test Planning & Review | Define scope, risks, test approach, environments | Day 1 |
| Test Case Design | Create test cases for Login, User Profile, Post Creation | Day 1–2 |
| Manual Test Execution – ASOS & Demo Web Shop | Execute test cases, log defects | Day 2–3 |
| Automation Scripting – Mock Post Editor | Create/update automation scripts, run test suite | Day 3-5 |
| Regression Testing | Re-test fixed issues, validate stability | Day 5–6 |
| Documentation & Reporting | Finalize execution summaries, bug reports, and portfolio structure | Day 6 |

---

# **10. Bug Management**

### **Severity Levels**
- **S1** – Critical (feature unusable)  
- **S2** – Major (fails important workflow)  
- **S3** – Minor (UI/UX defects, inconsistent behaviors)  

### **Bug Reports Include**
- ID  
- Category  
- Environment  
- Steps to reproduce  
- Expected vs actual results  
- Impact  
- Evidence (screenshot/log)  

---

# **11. Summary**

This test plan provides structured coverage of e-commerce flows across three contexts:

- **Real-world validation (ASOS)**  
- **Full, safe functional testing (Demo Web Shop)**  
- **Complex UI automation practice (Mock Post Editor)**  

The combined approach demonstrates:

✔ Manual testing capability  
✔ Structured test design  
✔ Exploratory testing  
✔ Bug reporting skills  
✔ UI automation fundamentals  
✔ Portfolio-ready documentation  

