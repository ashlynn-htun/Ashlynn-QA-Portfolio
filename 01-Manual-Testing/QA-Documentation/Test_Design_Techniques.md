# Test Design Techniques – How I Design Efficient Test Coverage  
**Author:** Ashlynn Htun  

This document explains how I design test cases using practical techniques that improve coverage and reduce redundancy.

---

## 1. Boundary Value Analysis (BVA)  
Where I use it:
- Field limits (password length, title length, postcode length)

Examples:
- Post title max length (150 characters)  
- Password minimum length validation  

Value:
Helps catch off-by-one errors and missing validations.

---

## 2. Equivalence Partitioning  
I use it to simplify repetitive tests by grouping valid/invalid inputs.

Example (Demo Web Shop email updates):
- **Valid class**: properly formatted email  
- **Invalid class**: missing @, missing TLD, empty string  

Reduces unnecessary combinations while keeping coverage strong.

---

## 3. State Transition Testing  
Useful for flows with multiple statuses.

Examples:
- Draft → Published → Edited (Mock Post Editor)  
- Address added → updated → deleted (Demo Web Shop)  

Ensures transitions behave correctly in UI and storage.

---

## 4. Error Guessing  
Based on experience and intuition.

Examples I found:
- ASOS password not trimming whitespace  
- Editor “Cancel” button not navigating back correctly  
- Image upload stored but not displayed  

This technique often reveals high-value bugs not caught by scripted tests.

---

## 5. Checklist-Based Testing  
I create lightweight checklists for:
- Smoke testing  
- Regression testing  
- Quick UI verification  

These complement detailed test cases and help during rapid cycles.

---

## 6. Pairwise / Combinatorial Thinking  
I use this casually for:
- Tags combinations  
- Input + file upload + formatting interactions  

Ensures efficient coverage of multi-input scenarios.

---

## Summary  
My test design process mixes structure with creativity.  
I start with systematic techniques (BVA, EP, transitions) and complement them with **exploratory instincts** and real-user thinking for maximum coverage.