-- Post Table Validation Checks (Work in Progress)

-- 1. Ensure each post has valid title and content
SELECT *
FROM posts
WHERE title IS NULL
   OR content IS NULL;

-- 2. Check publish flag has valid values (0 or 1)
SELECT *
FROM posts
WHERE published NOT IN (0, 1);

-- 3. Validate post → user relationship
SELECT p.*
FROM posts p
LEFT JOIN users u ON p.user_id = u.id
WHERE u.id IS NULL;
