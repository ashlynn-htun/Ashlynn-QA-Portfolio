# Test Types – What I Use & When I Use Them  
**Author:** Ashlynn Htun  

Rather than listing every test type in existence, this document explains **the test types I actively apply** and how I use them in real testing scenarios.

---

## 1. Functional Testing  
What I validate:
- Core functionality works as expected  
- Input validation and form behavior  
- Error messages and edge cases  

Examples from my portfolio:
- ASOS Login validation  
- Demo Web Shop profile & address management  
- Mock Post Editor post creation/edit flows  

---

## 2. Regression Testing  
When I run it:
- After a bug fix  
- Before a major release  
- When automated tests detect unexpected changes  

My approach:
- Maintain a regression checklist  
- Automate high-value stable flows  
- Manually test areas prone to breakage  

---

## 3. UI/UX Testing  
What I look for:
- Clarity of labels, buttons, and interactions  
- Consistency across screens  
- Error placement and visibility  
- Accessibility hints where possible  

Real examples:
- ASOS inconsistent password trimming  
- Mock Editor preview/publish confusion before redesign  

---

## 4. Negative Testing  
Why it matters:
- Users make mistakes  
- Systems should handle invalid inputs safely  

Examples:
- Invalid postcode in Demo Web Shop  
- Invalid tag formats in Mock Post Editor  
- Blank fields in all modules  

---

## 5. Security-Oriented Testing (Basic)  
What I check:
- XSS attempts  
- Input sanitization  
- Session timeouts  

Examples:
- Post Editor XSS tests on title/content  
- ASOS session timeout behavior  

(Not deep penetration testing—appropriate for junior/mid QA roles.)

---

## 6. Exploratory Testing  
My mindset:
> “Try what a curious user might try.”

Used especially when:
- Requirements are unclear  
- I test UI-heavy flows  
- I need to identify unexpected issues quickly  

Example:
- Discovering hidden UX problems during editing/publishing in Mock Editor  

---

## 7. Cross-Browser / Cross-Device (Lightweight)  
Browsers I commonly test:
- Chrome  
- Edge  
- Firefox  

Focus:
- Styling issues  
- Script errors  
- Button placement inconsistencies  

---

## 8. Smoke & Sanity Testing  
Smoke:
- “Does the build open and basic navigation work?”

Sanity:
- “Does a specific fix work without breaking the flow?”

I use these before deeper testing cycles.

---

## Summary  
I choose test types **based on risk, value, and context**—not because a checklist says so.  
This approach ensures efficient test coverage without unnecessary effort.