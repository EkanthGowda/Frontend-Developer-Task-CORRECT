# Frontend Developer Intern Assignment

## Overview
This project is a full-stack web application built as part of the Frontend Developer Intern assignment.  
It demonstrates secure authentication, protected routes, dashboard functionality, and CRUD operations using a modern frontend and backend stack.

---

## Tech Stack
**Frontend**
- React.js
- Tailwind CSS
- Vite

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB Atlas

**Authentication & Security**
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

## Backend
```bash
cd backend
npm install
npm run dev

Create a .env file inside backend/:

PORT=5068
MONGO_URI=mongodb+srv://admin:Mysore*88@frontend-task-cluster.xdanzia.mongodb.net/?appName=frontend-task-cluster
JWT_SECRET=supersecretkey

Backend will run at:

http://localhost:5068


### Frontend
```bash
cd frontend
npm install
npm run dev

Frontend will run at:

http://localhost:5173



# API Documentation – Frontend Developer Task

Base URL:
http://localhost:5068/api

All protected routes require:
Authorization: Bearer <JWT_TOKEN>

---

## Authentication APIs

### Register User
POST /auth/register

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}

Response:
201 Created
{
  "message": "Registered successfully"
}

---

### Login User
POST /auth/login

Request Body:
{
  "email": "john@example.com",
  "password": "123456"
}

Response:
200 OK
{
  "token": "JWT_TOKEN"
}

---

## User APIs

### Get User Profile (Protected)
GET /user/profile

Headers:
Authorization: Bearer <JWT_TOKEN>

Response:
200 OK
{
  "_id": "userId",
  "name": "John Doe",
  "email": "john@example.com"
}

---

## Task APIs (Protected)

### Get All Tasks
GET /tasks

Optional Query Params:
search=<task_title>

Response:
200 OK
[
  {
    "_id": "taskId",
    "title": "Learn React",
    "status": "pending"
  }
]

---

### Create Task
POST /tasks

Request Body:
{
  "title": "Build Dashboard"
}

Response:
201 Created
{
  "_id": "taskId",
  "title": "Build Dashboard"
}

---

### Delete Task
DELETE /tasks/:id

Response:
200 OK
{
  "message": "Task deleted"
}

---

## Error Responses

401 Unauthorized – Invalid or missing JWT  
400 Bad Request – Missing required fields  
500 Server Error – Unexpected error



Note on Scaling Frontend–Backend Integration for Production
In a production environment, the frontend–backend integration would be scaled with a focus on security, performance, reliability, and maintainability.

Authentication & Security
Store JWTs in HTTP-only, Secure cookies instead of localStorage to prevent XSS attacks.
Use short-lived access tokens with refresh tokens.
Enforce HTTPS, strict CORS policies, and API rate limiting.

Frontend Scalability
Migrate to Next.js for Server-Side Rendering (SSR) or Static Site Generation (SSG) to improve SEO and performance.
Implement code splitting and lazy loading to reduce initial bundle size.
Deploy frontend on CDN-backed platforms like Vercel or Netlify.

Backend Scalability
Containerize backend services using Docker.
Deploy behind a load balancer and scale horizontally.
Introduce Redis caching for frequently accessed data such as user profiles and task lists.

Database & API
Use MongoDB Atlas auto-scaling, indexing, and replica sets.
Version APIs (e.g., /api/v1) for backward compatibility.
Standardize error handling and response formats.

CI/CD & Reliability
Implement CI/CD pipelines for automated testing and deployment.
Add logging, monitoring, and alerting for production stability.
Use separate environments for development, staging, and production.