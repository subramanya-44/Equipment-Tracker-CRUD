import { useEffect, useState } from "react";
import Header from "./components/Header";
import EquipmentTable from "./components/EquipmentTable";
import EquipmentForm from "./components/EquipmentForm";
import { getEquipment, addEquipment, updateEquipment, deleteEquipment } from "./api";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setEquipment(await getEquipment());
  }

  async function handleSave(data) {
    if (editing) {
      await updateEquipment(editing.id, data);
    } else {
      await addEquipment(data);
    }
    setShowForm(false);
    setEditing(null);
    loadData();
  }

  async function handleDelete(id) {
    if (confirm("Delete this equipment?")) {
      await deleteEquipment(id);
      loadData();
    }
  }

  return (
    <div className="app">
      <Header />

      <main className="container">
        <h1 className="page-title">Equipment Management</h1>
        <p className="page-subtitle">Track and manage equipment</p>

        {showForm ? (
          <EquipmentForm
            initialData={editing}
            onSubmit={handleSave}
            onCancel={() => {
              setShowForm(false);
              setEditing(null);
            }}
          />
        ) : (
          <div className="card">
            <div className="actions">
              <button className="primary" onClick={() => setShowForm(true)}>
                + Add Equipment
              </button>
             
            </div>

            <EquipmentTable
              items={equipment}
              onEdit={(item) => {
                setEditing(item);
                setShowForm(true);
              }}
              onDelete={handleDelete}
            />
          </div>
        )}
      </main>

      <footer className="footer">
        © 2024 Equipment Tracker App
      </footer>
    </div>
  );
}

export default App;
