const repo = require("../repositories/equipment.repository");

// Basic validation for required fields
function validate(data) {
  if (!data.name) return "Name is required";
  if (!data.type) return "Type is required";
  if (!data.status) return "Status is required";
  if (!data.lastCleanedDate) return "Last cleaned date is required";
  return null;
}

// Get all equipment
async function getAllEquipment() {
  return repo.findAll();
}

// Create new equipment after validation
async function createEquipment(data) {
  const error = validate(data);
  if (error) throw new Error(error);

  return repo.create(data);
}

// Update equipment if it exists
async function updateEquipment(id, data) {
  const existing = await repo.findById(id);
  if (!existing) throw new Error("Equipment not found");

  const error = validate(data);
  if (error) throw new Error(error);

  await repo.update(id, data);
}

// Delete equipment if it exists
async function deleteEquipment(id) {
  const existing = await repo.findById(id);
  if (!existing) throw new Error("Equipment not found");

  await repo.remove(id);
}

module.exports = {
  getAllEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment
};
