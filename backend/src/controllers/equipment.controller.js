const service = require("../services/equipment.service");

async function getAll(req, res) {
  const data = await service.getAllEquipment();
  res.json(data);
}

async function create(req, res) {
  try {
    const result = await service.createEquipment(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function update(req, res) {
  try {
    await service.updateEquipment(req.params.id, req.body);
    res.json({ message: "Updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

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
