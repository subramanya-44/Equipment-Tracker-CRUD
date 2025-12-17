const pool = require("../db/mysql");

// Fetch all equipment records from database
async function findAll() {
  const [rows] = await pool.query("SELECT * FROM equipment");
  return rows;
}

// Fetch a single equipment by ID
async function findById(id) {
  const [rows] = await pool.query(
    "SELECT * FROM equipment WHERE id = ?",
    [id]
  );
  return rows[0];
}

// Insert a new equipment record
async function create(equipment) {
  const { name, type, status, lastCleanedDate } = equipment;

  const [result] = await pool.query(
    "INSERT INTO equipment (name, type, status, last_cleaned_date) VALUES (?, ?, ?, ?)",
    [name, type, status, lastCleanedDate]
  );

  // Return the created equipment with generated ID
  return { id: result.insertId, ...equipment };
}

// Update existing equipment by ID
async function update(id, equipment) {
  const { name, type, status, lastCleanedDate } = equipment;

  await pool.query(
    "UPDATE equipment SET name=?, type=?, status=?, last_cleaned_date=? WHERE id=?",
    [name, type, status, lastCleanedDate, id]
  );
}

// Delete equipment by ID
async function remove(id) {
  await pool.query("DELETE FROM equipment WHERE id=?", [id]);
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};
