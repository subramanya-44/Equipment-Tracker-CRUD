const service = require("../services/equipment.service");

// Handle request to get all equipment
async function getAll(req, res) {
  const data = await service.getAllEquipment();
  res.json(data);
}

// Handle request to create new equipment
async function create(req, res) {
  try {
    const created = await service.createEquipment(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Handle request to update equipment
async function update(req, res) {
  try {
    await service.updateEquipment(req.params.id, req.body);
    res.json({ message: "Updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Handle request to delete equipment
async function remove(req, res) {
  try {
    await service.deleteEquipment(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

module.exports = {
  getAll,
  create,
  update,
  remove
};
