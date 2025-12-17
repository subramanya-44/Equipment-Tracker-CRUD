# Equipment Tracker

This is a simple equipment tracker application.

Right now, only the backend is implemented.
The frontend (React) is not built yet.

The backend provides REST APIs to:
- View equipment
- Add equipment
- Update equipment
- Delete equipment

Frontend will be added later.
```

That’s it.
No over-explanation. No marketing language.

---

# ✅ Backend README (`backend/README.md`)

```
# Backend

This folder contains the backend for the Equipment Tracker app.

It is built using:
- Node.js
- Express
- MySQL

The backend exposes basic REST APIs to manage equipment data.
```

### How to run

```
npm install
npm run dev
```

Server runs on:

```
http://localhost:5000
```

### Database

Create the database and table in MySQL:

```
CREATE DATABASE equipment_db;

CREATE TABLE equipment (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  type VARCHAR(50),
  status VARCHAR(50),
  last_cleaned_date DATE
);
```

### APIs

```
GET    /api/equipment
POST   /api/equipment
PUT    /api/equipment/:id
DELETE /api/equipment/:id
```

