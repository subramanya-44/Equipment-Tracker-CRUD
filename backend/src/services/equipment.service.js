const repo = require("../repositories/equipment.repository");


function validate(data) {
  if (!data.name) return "Name is required";
  if (!data.type) return "Type is required";
  if (!data.status) return "Status is required";
  if (!data.lastCleanedDate) return "Last cleaned date is required";
  return null;
}


async function getAllEquipment() {
  return repo.findAll();
}


async function createEquipment(data) {
  const error = validate(data);
  if (error) {
    throw new Error(error);
  }

  return repo.create(data);
}


async function updateEquipment(id, data) {
  const existing = await repo.findById(id);
  if (!existing) {
    throw new Error("Equipment not found");
  }

  const error = validate(data);
  if (error) {
    throw new Error(error);
  }

  await repo.update(id, data);
}


async function deleteEquipment(id) {
  const existing = await repo.findById(id);
  if (!existing) {
    throw new Error("Equipment not found");
  }

  await repo.remove(id);
}

module.exports = {
  getAllEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment
};
