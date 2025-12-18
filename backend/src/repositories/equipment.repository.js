const db = require("../db/mysql");

async function findAll() {
  const [rows] = await db.query(
    "SELECT * FROM equipment ORDER BY id DESC"
  );
  return rows;
}

async function findById(id) {
  const [rows] = await db.query(
    "SELECT * FROM equipment WHERE id = ?",
    [id]
  );
  return rows[0];
}

async function create(data) {
  const result = await db.query(
    "INSERT INTO equipment (name, type, status, last_cleaned_date) VALUES (?, ?, ?, ?)",
    [data.name, data.type, data.status, data.lastCleanedDate]
  );

  return {
    id: result[0].insertId,
    ...data
  };
}

async function update(id, data) {
  await db.query(
    "UPDATE equipment SET name = ?, type = ?, status = ?, last_cleaned_date = ? WHERE id = ?",
    [data.name, data.type, data.status, data.lastCleanedDate, id]
  );
}

async function remove(id) {
  await db.query(
    "DELETE FROM equipment WHERE id = ?",
    [id]
  );
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};
