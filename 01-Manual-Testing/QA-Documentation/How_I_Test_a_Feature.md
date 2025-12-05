# How I Test a Feature – My Practical Approach  
**Author:** Ashlynn Htun  

This document explains *how I personally approach testing a new feature*, from the moment I first see the requirement until the final execution and reporting.  
It reflects my real process, not a textbook workflow.

---

# 1. Understanding the Feature  
When I receive a new feature or user story, my first questions are:

- What problem does this feature solve?  
- Who is the end user?  
- What should happen in the *ideal* flow?  
- What should happen when things go wrong?  

If anything is unclear, I ask early questions.  
I’ve learned that **good testing depends on good understanding**, not guessing.

I rewrite requirements in my own words, and I often sketch the flow in a simple diagram.

---

# 2. Identifying Test Conditions  
Before I write test cases, I identify core “testing angles.”  
My categories usually include:

### ✔ Positive flow  
The simplest path that should always work.

### ✔ Negative conditions  
What if required fields are empty?  
What if the input format is wrong?

### ✔ Edge cases  
Boundaries, limits, unexpected sequences.

### ✔ UX behaviour  
Is the interaction smooth?  
Are messages clear?

### ✔ Security considerations  
Could this input trigger XSS?  
Is data exposed incorrectly?

### ✔ State transitions  
What happens before… and after?

This helps me build *complete* coverage before touching test cases.

---

# 3. Preparing the Test Data & Environment  
Before execution, I set up everything I need so I don’t waste time later:

- Valid and invalid accounts  
- Sample data (emails, postcodes, images, tags, etc.)  
- Browser setups  
- Clean localStorage (for Mock Editor)  
- Network throttling (if needed)  

If the environment is unstable, I note that risk early.

---

# 4. Designing My Test Cases  
Even though I write detailed Excel test cases, I keep my design style simple:

- Clear, small steps  
- Realistic test data  
- Expected results that are **meaningful**, not vague  
- Separate **validation**, **functional**, **security**, and **UI** cases  

My focus is making test cases **easy to read and easy to execute**, even by someone who isn’t familiar with the feature.

---

# 5. Executing the Tests  
This is where structure meets exploration.

### I always do:
- Step-by-step execution of all planned cases  
- Exploratory testing around weak spots  
- Trying things a normal user might accidentally do  
- Checking UI behaviour and responsiveness  

### My mindset:
> “Observe everything. Expected results are just the baseline—real bugs hide in the unexpected behaviour.”

During execution, I record actual results immediately, including timestamps and environment notes.

---

# 6. Logging Defects Clearly  
A bug report should allow a developer to reproduce the issue *without thinking too hard*.

My bug reports include:
- Clear and specific title  
- Category + severity + priority  
- Environment  
- Repro steps (numbered, detailed, reproducible)  
- Expected vs actual behaviour  
- Impact level (UX, data loss, workflow broken, etc.)  
- Evidence (screenshots, console logs if relevant)  

I avoid emotional wording—just objective, clear information.

My goal:  
**Make fixing easy. Make misunderstandings impossible.**

---

# 7. Retesting & Regression  
After fixes are provided:

### I retest the bug:
- Does the original issue still occur?  
- Does the error message make sense now?  

### Then I run regression in related areas:
Because one fix can break another part.

I track retest results in my execution summary.

---

# 8. Closing the Feature  
A feature is “done” for me when:
- All test cases are executed  
- All critical/high defects are closed  
- Medium/low defects are documented and triaged  
- Regression passes  
- Everything is reflected in my test summary  

I also document any improvements or UX suggestions separately.

---

# 9. Summary – My Testing Philosophy  
My testing approach is built on three principles:

### **1. Understand deeply before testing.**  
Testing is thinking, not clicking.

### **2. Cover essential paths, explore the rest.**  
Scripted tests catch expected bugs.  
Exploration catches the important ones.

### **3. Communicate clearly and professionally.**  
Good bugs → fast fixes → better product.

This process has helped me stay structured while still leaving room for creativity, curiosity, and critical thinking—qualities I consider essential for a strong QA engineer.