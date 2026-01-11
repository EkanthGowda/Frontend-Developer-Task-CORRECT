# Frontend Developer Intern Assignment

## Overview
This project is a full-stack web application built as part of the Frontend Developer Intern assignment.  
It demonstrates secure authentication, protected routes, dashboard functionality, and CRUD operations using a modern frontend and backend stack.

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Authentication & Security
- JWT (JSON Web Tokens)
- bcrypt for password hashing

---

## Features
- User registration and login
- JWT-based authentication
- Protected dashboard routes
- User profile fetching
- Task CRUD operations
- Search and filter functionality
- Responsive UI using Tailwind CSS
- Proper error handling and validation
- Scalable and modular code structure

---

## How to Run the Project

### Backend
```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside `backend/`:
```env
PORT=5068
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

Backend runs at:
```
http://localhost:5068
```

---

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

## API Documentation – Frontend Developer Task

### Base URL
```
http://localhost:5068/api
```

All protected routes require:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## Authentication APIs

### Register User
**POST** `/auth/register`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

Response:
```json
{
  "message": "Registered successfully"
}
```

---

### Login User
**POST** `/auth/login`

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

Response:
```json
{
  "token": "JWT_TOKEN"
}
```

---

## User APIs (Protected)

### Get User Profile
**GET** `/user/profile`

Header:
```
Authorization: Bearer <JWT_TOKEN>
```

Response:
```json
{
  "_id": "userId",
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

## Task APIs (Protected)

### Get All Tasks
**GET** `/tasks`

Optional query:
```
search=<task_title>
```

Response:
```json
[
  {
    "_id": "taskId",
    "title": "Learn React",
    "status": "pending"
  }
]
```

---

### Create Task
**POST** `/tasks`

```json
{
  "title": "Build Dashboard"
}
```

Response:
```json
{
  "_id": "taskId",
  "title": "Build Dashboard"
}
```

---

### Delete Task
**DELETE** `/tasks/:id`

Response:
```json
{
  "message": "Task deleted"
}
```

---

## Error Responses
- 401 Unauthorized – Invalid or missing JWT
- 400 Bad Request – Missing required fields
- 500 Internal Server Error – Unexpected error

---

## Note on Scaling Frontend–Backend Integration for Production

In production, the frontend–backend integration would be scaled with a focus on security, performance, reliability, and maintainability.

### Authentication & Security
- Store JWTs in HTTP-only secure cookies
- Use short-lived access tokens with refresh tokens
- Enforce HTTPS, strict CORS policies, and rate limiting

### Frontend Scalability
- Use Next.js for SSR/SSG
- Implement code splitting and lazy loading
- Deploy on CDN-backed platforms like Vercel or Netlify

### Backend Scalability
- Containerize services using Docker
- Deploy behind a load balancer and scale horizontally
- Use Redis for caching frequently accessed data

### Database & API
- Use MongoDB Atlas auto-scaling and indexing
- Version APIs (e.g., /api/v1)
- Standardize error handling and responses

### CI/CD & Reliability
- Set up CI/CD pipelines
- Add logging, monitoring, and alerts
- Use separate dev, staging, and production environments

---

## Author
Koushik Gowda
