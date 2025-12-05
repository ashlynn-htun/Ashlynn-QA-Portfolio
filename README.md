# Ashlynn QA Portfolio

Welcome to my **QA Portfolio** — a collection of projects demonstrating my skills in **manual testing**, **automation**, **API testing**, **database validation**, and **release testing**.  
Each section reflects how I approach software quality through structured testing, curiosity, and attention to detail.

This repository is structured to reflect a **real QA project**, including full documentation, test cases, defect reports, automation code, and a mock application created specifically for UI automation practice.

> **Note:** Some sections (Automation, API Testing, Database Testing, Release Testing) are still in progress.  
> I update this repository frequently as I continue expanding my QA skill set.
---

## 👩🏻‍💻 About Me

Hi, I’m **Ashlynn** — an aspiring **Quality Assurance Tester** with a strong interest in understanding how products work, why they break, and how to make them better.

I enjoy:
- breaking things (politely 😌)
- finding patterns in behaviour and bugs
- writing clear, structured documentation
- improving user experience through careful testing

I’m currently focusing on:
- strengthening my manual QA foundation  
- building confidence in automation with Playwright  
- learning more about API testing and SQL  
- developing clean communication and reporting skills  

I also have an interest in front-end development and UI/UX, which influences how I test and think about product quality from a user’s perspective.

---

# 📁 Repository Structure Overview

Ashlynn-QA-Portfolio
├── 00-Mock-Post-Editor-App/
├── 01-Manual-Testing/
├── 02-Automation-Foundation-Playwright/
├── 03-API-Testing/
├── 04-Basic-Database-Testing/
└── 05-Release-Testing/

Below is a breakdown of each section:

---

## 💡 **00 — Mock Post Editor App (Custom UI Application)**  
A very lightweight HTML/CSS/JavaScript application I built to practice **UI automation**, **validation testing**, and **XSS/attachment handling scenarios**.

Contents include:
- `editor.html`, `preview.html`, `dashboard.html`
- Script & styles
- A realistic environment for CRUD operations (create/edit/delete posts)
- Supports automation via Playwright’s Page Object Model (POM)

This mock app allows me to demonstrate testing of:
- Form validation  
- Draft autosave  
- Publish/unpublish flows  
- File upload handling  
- Input sanitization  

---

## 📝 **01 — Manual Testing**

This module contains **fully written and executed manual QA artefacts**, including:

### ✔ Test Cases (Excel Files)
Located in `01-Manual-Testing/Test-Cases/`
- **Login_Test_Cases.xlsx**
- **UserProfile_Test_Cases.xlsx**
- **Post_Creation_Test_Cases.xlsx**

Each file includes:
- Positive & negative test cases  
- Boundary tests  
- Edge cases  
- Actual results  
- Linked bug IDs  
- Final status & priority  

### ✔ Test Execution Summaries
Documenting:
- Total test cases run  
- Pass/fail statistics  
- Bugs logged  
- Observations and risks  

### ✔ Bug Reports  
In `01-Manual-Testing/Bug-Reports/`, with screenshots.  
Each report includes:
- Environment details  
- Steps to reproduce  
- Expected vs actual results  
- Evidence  
- Severity & priority  

### ✔ QA Documentation
Includes:
- **SDLC.md**
- **STLC.md**
- **Test_Types.md**
- **Test_Design_Techniques.md**
- **How_I_Test_a_Feature.md**

These files reflect my understanding of QA methodologies, testing techniques, and structured approaches.

### ✔ Test Plan  
Located in `01-Manual-Testing/Test-Plan/Ecommerce_Test_Plan.md`  
Covers:
- Scope & objectives  
- Environments  
- Testing strategy  
- Deliverables  
- Risks & mitigations  
- Test schedule  
- Entry/Exit criteria  

---

## 🤖 **02 — Automation (Playwright + Page Object Model)**
> **Status: In Progress**

This module contains the foundation of my UI automation framework built with **Playwright** and the **Page Object Model (POM)**.

### ✅ **What’s already included**
- A working **POM structure** (`BasePage`, `LoginPage`, `PostEditorPage`)
- Automated tests for:
  - `login.spec.ts` — Login flow on Mock Post Editor App
  - `create_post.spec.ts` — Create, publish, and draft actions
  - `search.spec.ts` — Search functionality on Demo Web Shop
- **Playwright configuration** with cross-browser support (Chromium, Firefox, WebKit)
- **Generated HTML and trace reports** (`playwright-report/`, `reports/html-report/`)
- Local mock app automated via Playwright

### 🔧 **Planned Enhancements**
- Expand Mock Post Editor coverage (formatting tools, autosave, negative scenarios)
- Implement reusable utilities (custom waits, assertions)
- Add test tagging (smoke, regression)
- Add CI/CD pipeline using **GitHub Actions**
- Integrate advanced reporting (Allure, screenshots, videos)
- Add environment switching for local / staging / production-style setups

---

## 🌐 **03 — API Testing**  
> **Status: In Progress**

Current contents:
- Postman collection (`Basic_API_Testing_Collection.json`)
- API notes & documentation  
- HTML execution report  

### 🔧 Planned Enhancements
- Add negative & edge case API scenarios  
- JSON schema validation examples  
- Integration between API tests and database checks  
- Automate API suite using Newman  

---

## 🗄 **04 — Basic Database Testing**  
> **Status: In Progress**

Includes:
- SQL validation scripts (`user_table_checks.sql`, `post_table_checks.sql`)
- DB test summary report  

### 🔧 Planned Enhancements
- More complex joins & referential integrity checks  
- CRUD validation scripts  
- Test data setup/cleanup scripts  
- Database-driven defect examples  

---

## 🚀 **05 — Release Testing (Smoke, Regression, Exit Reports)**  
> **Status: In Progress**

Contains:
- Regression execution template  
- Smoke testing checklist  
- Post-release test report  

### 🔧 Planned Enhancements
- Full regression matrix  
- Release gating criteria  
- Traceability matrix linking test cases → bugs → requirements  
- Multi-environment release simulation (dev/stage/prod)  

---

# 📌 Current Status & Roadmap

### ✔ Completed
- Manual test cases for Login, User Profile, Post Creation  
- Execution summaries  
- Bug reporting system with screenshots  
- Test Plan  
- Mock Post Editor app  
- Basic automation, API, and SQL structure  

### 🔄 In Progress
- Expanding automation scripts  
- Enhancing API & DB coverage  
- Filling out release testing documentation  

### 🧭 Upcoming Additions
- More Playwright test suites  
- API automation with Newman  
- Database integration testing  
- Traceability matrix  
- Dashboard visual reports  

---

# 🎯 Purpose of This Portfolio

This repository demonstrates:
- My ability to **design structured test cases**  
- Perform **manual testing** on real and demo environments  
- Write **clear and actionable bug reports**  
- Build and test **a custom web app**  
- Apply **Playwright automation** using POM  
- Practice **API & database validation**  
- Follow QA best practices and documentation standards  

---

# 📬 Contact

If you'd like to connect or know more:

**Name:** Ashlynn Htun
**Email:** tnhsashlynn@gmail.com
**Portfolio Repo:** This GitHub repository  

---

Thank you for reviewing my QA portfolio!  
