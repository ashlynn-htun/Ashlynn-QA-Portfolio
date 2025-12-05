# 🤖 UI Automation – Playwright (In Progress)

This folder contains my UI automation foundation built using **Playwright** with a clean **Page Object Model (POM)** structure.  
It includes working automated tests for both a **local mock application** (Mock Post Editor App) and a **live demo site** (Demo Web Shop).

This section is actively evolving as I expand my automation skills and test coverage.

---

## 📁 Project Structure

pages/
BasePage.ts
LoginPage.ts
PostEditorPage.ts

tests/
login.spec.ts
create_post.spec.ts
search.spec.ts

playwright.config.ts
reports/html-report/
playwright-report/
test-results/


---

## ✨ Current Capabilities

### 🔐 **Login Automation (Mock App)**
- Navigates to local `/login.html`
- Fills valid credentials
- Validates navigation to dashboard  
- Runs across Chromium, Firefox, WebKit

### 📝 **Post Editor Automation (Mock App)**
- Creates a post (title, content, tags)
- Saves drafts
- Publishes posts  
- Uses a structured Page Object Model (`PostEditorPage`)

🔥 *Some tests intentionally fail because the mock application does not yet implement elements like `#autosave-status`. This simulates real QA defect detection and is documented in the test results.*

### 🔎 **Search Automation (Live Demo Site)**  
(`search.spec.ts`)
- Navigates to **Demo Web Shop**
- Searches for "computer"
- Verifies search results appear
- Extracts product grid count
- Ensures at least one product matches the query

This test demonstrates integration with **public, safe demo sites** — a common practice in QA portfolios.

---

## 🧱 Playwright Framework Design

### ✔ **Page Object Model (POM)**
Your POM currently includes:

- `BasePage.ts` → foundational navigation wrapper  
- `LoginPage.ts` → login functionality  
- `PostEditorPage.ts` → post creation + publishing + draft actions  

This makes tests cleaner, maintainable, and scalable.

### ✔ **Configuration**
- BrowserMatrix: Chromium, Firefox, WebKit  
- HTML reporting enabled  
- Trace viewer available for failed tests  
- Local mock server served with `npx serve`

---

## 🚧 Work in Progress / Roadmap

### 🏗 Framework Enhancements
- Expand `BasePage` utility methods (waits, custom assertions)
- Add screenshot/video capture on failure
- Add reusable locator strategies
- Support environment switching (local/staging/prod)

### 🧪 Test Coverage Expansion
- Add Post Editor formatting toolbar tests  
- Add negative test cases (invalid login, empty fields)  
- Add autosave & error-handling tests once UI elements exist  
- Add regression suite

### 🛠 CI/CD Integration
- GitHub Actions pipeline for automated test runs  
- Notifications on test failures  
- Allure report integration  

---

## 📊 Reporting

Playwright automatically generates:

- `playwright-report/` → live interactive report  
- `reports/html-report/` → standalone HTML history  
- `test-results/` → failure details + traces  

These help demonstrate professional debugging and analysis skills.

---

This automation module will continue evolving as I add more scenarios, strengthen the framework structure, and integrate CI pipelines.
