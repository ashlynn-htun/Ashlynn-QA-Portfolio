# 🗄 Database Test Summary (Work in Progress)

This document summarizes the basic database validation checks performed as part of backend testing.

---

## 🎯 Test Objectives
- Validate data integrity in `users` and `posts` tables  
- Ensure CRUD operations store correct values  
- Confirm no orphaned or inconsistent records exist  

---

## ✔ Current Coverage
### 1. User Table Checks
- Validate required columns (`id`, `email`, `created_at`)
- Ensure emails are unique
- Verify valid foreign keys for user-linked tables

### 2. Post Table Checks
- Validate `title`, `content`, and timestamps
- Check published flag values
- Ensure posts reference valid user IDs

---

## 🚧 Pending Enhancements
- Add stored procedure validation  
- Add join + referential integrity checks  
- Create test data setup / cleanup scripts  
