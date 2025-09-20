# Todo-MERN

A simple To-Do application built using the MERN stack (MongoDB, Express, React, Node). Allows users to add, update, view, and delete tasks.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack & Design Decisions](#tech-stack--design-decisions)  
- [Setup & Installation](#setup--installation)  
- [Usage](#usage)  
- [Extra Features](#extra-features)  


---

## Features

- Create new todo items.  
- View all todo items.  
- Edit / update a todo.  
- Delete a todo.  
- Persist data with MongoDB.  
- Frontend interface for interacting with backend API.

---

## Tech Stack & Design Decisions

 Backend: Node.js + Express - Lightweight, popular stack for REST APIs in JS. 
 Database: MongoDB (via Mongoose) - Flexible schema for todos; easy to set up and scale. 
 Frontend: React - Component-based UI, good for dynamic interactions. 
 Communication: RESTful API - Clear endpoints for CRUD operations. 
 Project Structure: Separate **client/** and **server/** directories  Clear separation of concerns; easier to maintain and deploy. 
 Environment Configuration: .env for sensitive 
 devDepencies: Nodemon - Auto-restart server during development on changes.

---

## usage 
-Create a new todo via frontend form.
-View all todos in the list.
-Click/tap to edit a todo.
-Delete a todo.

Frontend sends requests (GET / POST / PUT / DELETE) to backend, which persists to MongoDB.


1. **Clone the repo**

```bash
git clone https://github.com/saint-favour/todo-MERN.git
cd todo-MERN
