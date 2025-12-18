
# BACKEND README (`backend/README.md`)

```
# Backend – Equipment Tracker

This folder contains the backend REST API for the Equipment Tracker application.

The backend provides CRUD APIs to manage equipment records and stores data in MySQL.

---

## Tech Used

- Node.js
- Express
- MySQL
- mysql2
- dotenv
- cors
- nodemon for dev

---

## Project Structure

```
```
backend/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── db/
│   │   └── mysql.js
│   ├── routes/
│   │   └── equipment.routes.js
│   ├── controllers/
│   │   └── equipment.controller.js
│   ├── services/
│   │   └── equipment.service.js
│   └── repositories/
│       └── equipment.repository.js
├── .env
└── package.json

```

The backend follows a simple layered structure:
- Routes → Controllers → Services → Repositories

---

## API Endpoints

```

GET    /api/equipment
POST   /api/equipment
PUT    /api/equipment/:id
DELETE /api/equipment/:id


```

---

## Database Setup

Create database and table in MySQL:

```

CREATE DATABASE equipment_db;

USE equipment_db;

CREATE TABLE equipment (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
type VARCHAR(50),
status VARCHAR(50),
last_cleaned_date DATE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```

---

## Environment Variables

Create `.env` inside `backend` folder:

```

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=equipment_db

```

---

## How to Run Backend

```

cd backend
npm install
npm run dev

```

Server will start on:

```

[http://localhost:5001](http://localhost:5001)

```

Test health endpoint:

```

GET [http://localhost:5010/health](http://localhost:5000/health)

```

---

## Notes

- Validation is basic and handled in service layer
- No authentication is implemented
- Designed for simplicity and readability
```
