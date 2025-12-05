# 📘 API Testing Notes (Work in Progress)

These are my study notes as I continue learning and practicing API testing.  
They summarise what I’ve learned so far and will evolve as I add real test cases and execution results.

---

## 🔍 Key Concepts I’m Practicing

### ✔ API Types
- **REST APIs** — JSON-based, widely used in web and mobile applications.
- **SOAP APIs** — XML-based, strict structure.
- **GraphQL** — Query-based, allows requesting only needed fields.

### ✔ Common HTTP Methods
| Method | Purpose |
|--------|---------|
| GET | Retrieve data |
| POST | Create new resource |
| PUT | Replace existing resource |
| PATCH | Partial update |
| DELETE | Remove resource |

---

## 🧪 API Testing Focus Areas
When testing an endpoint, I focus on:

- **Status codes** (200, 201, 400, 401, 404, 500)
- **Response body validation & structure**
- **Schema correctness**
- **Auth flows** (API keys, tokens)
- **Negative tests** (missing fields, invalid inputs)
- **Performance expectations** (response time)

---

## 📌 Sample Test Scenarios (To Be Expanded)

These scenarios will later be added to my Postman collection:

1. GET `/users` returns a list of users  
2. POST `/users` creates a user and returns a valid ID  
3. POST `/users` returns 400 when required fields are missing  
4. Validate that PUT operations are **idempotent**  
5. Response time is within acceptable limits (< 200ms baseline)

---

## 🚧 Work in Progress
I will continue adding:
- Real request & response samples  
- More detailed negative scenarios  
- Screenshots or reports from Postman Collection Runner  

