-- User Table Validation Checks (Work in Progress)

-- 1. Check for duplicate emails
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- 2. Check for NULL critical fields
SELECT *
FROM users
WHERE email IS NULL
   OR created_at IS NULL;

-- 3. Validate foreign keys exist
-- (Example placeholder – update once schema is known)
SELECT user_id
FROM posts
WHERE user_id NOT IN (SELECT id FROM users);
