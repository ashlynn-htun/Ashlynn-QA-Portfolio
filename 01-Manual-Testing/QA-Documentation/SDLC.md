# Software Development Life Cycle (SDLC) – My Practical Understanding  
**Author:** Ashlynn Htun  

This document summarises how I apply SDLC concepts in real QA work.

---

## 1. Why SDLC Matters in QA  
As a software tester, understanding SDLC helps me:  
- Know **when testing should start**  
- Predict **where defects are likely to occur**  
- Communicate better with developers, PMs, and designers  
- Align testing strategy with the development approach (Agile, Waterfall, Hybrid)

Rather than memorising phases, I use SDLC as a guide to understand **what quality looks like at each stage**.

---

## 2. SDLC Models I Commonly Work With  

### ### Agile / Scrum (Most Relevant to My Work)
What it means for me as a tester:
- Testing begins early and continuously  
- Requirements evolve → I clarify acceptance criteria directly with the team  
- I prepare test cases **before** development completes  
- I perform **continuous functional, regression, and exploratory testing** each sprint  
- Frequent demos = opportunity to catch UI/UX issues early  

### Waterfall (Important for Understanding Legacy Systems)
My testing involvement:
- Requirements fixed upfront → I design test cases early  
- Heavy emphasis on **test planning and documentation**  
- Final UAT phase requires complete end-to-end validation  

### Kanban (Occasionally Used in Support/Maintenance Work)
My workflow:
- Prioritised issues flow through the system  
- Testing focuses on **quick verification**, regression, and monitoring for side effects  

---

## 3. How I Apply SDLC in Real Testing Work  
### Requirements Stage
- Ask clarifying questions early  
- Identify missing acceptance criteria  
- Suggest testability improvements  

### Development Stage
- Create test cases based on evolving requirements  
- Prepare data ahead of time  
- Communicate potential risk areas  

### Testing Stage
- Execute functional, regression, and negative tests  
- Log bugs clearly with repro steps and expected vs actual results  

### Deployment & Maintenance
- Run smoke checks after release  
- Review monitoring logs if available  
- Retest defects and validate fixes  

---

## 4. Summary  
SDLC is not just theory—it’s the structure behind how I plan, execute, and report testing activities.  
Regardless of the model used, my goal remains the same:

**Find important issues early, improve product quality, and support the team with reliable testing practices.**