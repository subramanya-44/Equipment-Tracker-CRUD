# Frontend – Equipment Tracker

![Image](assets/spa.png)

![Image](assets/addequipment.png)

This folder contains the React frontend for the Equipment Tracker application.

The frontend is a simple single-page application that communicates with the backend REST APIs.

---

## Features

- Display equipment list in a table
- Add new equipment
- Edit existing equipment
- Delete equipment
- Search equipment by name
- Filter equipment by type and status
- Sort equipment by name or last cleaned date
- Basic form validation
- Clean card-based UI

---

## Tech Used

- React (Vite)
- JavaScript
- Plain CSS
- Rest API

No UI libraries or state management libraries are used.

---

## Project Structure

```

frontend/
├── src/
│   ├── App.jsx
│   ├── api.js
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── Header.jsx
│       ├── EquipmentTable.jsx
│       └── EquipmentForm.jsx
├── index.html
└── package.json

```

---

## Search, Filter, and Sort

### Search
- Search is implemented by equipment name
- Search runs only when the search button is clicked
- No live search or prediction is used

### Filter
- Equipment can be filtered by:
  - Type (Machine, Vessel, Tank, Mixer)
  - Status (Active, Inactive, Under Maintenance)
- Filters are grouped under a single **Filter** button
- Filter changes apply immediately
- If a filter value is set to `All`, it is ignored

### Sort
- Sorting options:
  - Name (A–Z)
  - Last cleaned date (newest first)
- Sorting is grouped under a **Sort** button
- Only one sort option can be active at a time

All search, filter, and sort logic is handled on the frontend.

---

## How to Run Frontend

### Prerequisites
- Node.js installed
- Backend running on `http://localhost:5001`

### Steps

```

cd frontend
npm install
npm run dev

```

Vite will start the app on a local URL (usually `http://localhost:5173`).

---

## How Frontend Talks to Backend

All API calls are defined in `src/api.js`.

The frontend uses:

```

GET    /api/equipment
POST   /api/equipment
PUT    /api/equipment/:id
DELETE /api/equipment/:id

```

---

