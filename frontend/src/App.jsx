import { useEffect, useState } from "react";
import Header from "./components/Header";
import EquipmentTable from "./components/EquipmentTable";
import EquipmentForm from "./components/EquipmentForm";
import {
  getEquipment,
  addEquipment,
  updateEquipment,
  deleteEquipment
} from "./api";

function App() {
  const [equipment, setEquipment] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  // search
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // filter
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [showFilter, setShowFilter] = useState(false);

  // sort
  const [sortBy, setSortBy] = useState("");
  const [showSort, setShowSort] = useState(false);

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

  function handleSearch() {
    setSearchQuery(searchInput);
  }

  // ---------- FILTER + SORT LOGIC ----------

  let visibleEquipment = [...equipment];

  if (searchQuery) {
    visibleEquipment = visibleEquipment.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (selectedType !== "All") {
    visibleEquipment = visibleEquipment.filter(
      item => item.type === selectedType
    );
  }

  if (selectedStatus !== "All") {
    visibleEquipment = visibleEquipment.filter(
      item => item.status === selectedStatus
    );
  }

  if (sortBy === "name") {
    visibleEquipment.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortBy === "lastCleaned") {
    visibleEquipment.sort(
      (a, b) =>
        new Date(b.last_cleaned_date) -
        new Date(a.last_cleaned_date)
    );
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

              {/* SEARCH */}
              <input
                className="search"
                placeholder="Search by name"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="secondary" onClick={handleSearch}>
                🔍
              </button>

              {/* FILTER BUTTON */}
              <button
                className="secondary"
                onClick={() => {
                  setShowFilter(!showFilter);
                  setShowSort(false);
                }}
              >
                Filter ⏷
              </button>

              {/* SORT BUTTON */}
              <button
                className="secondary"
                onClick={() => {
                  setShowSort(!showSort);
                  setShowFilter(false);
                }}
              >
                Sort ⏷
              </button>
            </div>

            {/* FILTER PANEL */}
            {showFilter && (
              <div className="panel">
                <label>Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option>All</option>
                  <option>Machine</option>
                  <option>Vessel</option>
                  <option>Tank</option>
                  <option>Mixer</option>
                </select>

                <label>Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option>All</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Under Maintenance</option>
                </select>
              </div>
            )}

            {/* SORT PANEL */}
            {showSort && (
              <div className="panel">
                <label>Sort by</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="">None</option>
                  <option value="name">Name (A–Z)</option>
                  <option value="lastCleaned">
                    Last Cleaned (Newest)
                  </option>
                </select>
              </div>
            )}

            <EquipmentTable
              items={visibleEquipment}
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
        Made By Subramanya T N tnsubramanya7@gmail.com for Assignment.
      </footer>
    </div>
  );
}

export default App;
