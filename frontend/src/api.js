const BASE_URL = "http://localhost:5001/api/equipment";

export async function getEquipment() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function addEquipment(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function updateEquipment(id, data) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export async function deleteEquipment(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
}
