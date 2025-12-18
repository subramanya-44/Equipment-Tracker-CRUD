import { useEffect, useState } from "react";

function EquipmentForm({ onSubmit, onCancel, initialData }) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    status: "",
    lastCleanedDate: ""
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        type: initialData.type,
        status: initialData.status,
        lastCleanedDate: initialData.last_cleaned_date
      });
    }
  }, [initialData]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <div className="card form">
      <h2>{initialData ? "Edit Equipment" : "Add Equipment"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Type</label>
          <select name="type" value={form.type} onChange={handleChange} required>
            <option value="">Select type</option>
            <option>Machine</option>
            <option>Vessel</option>
            <option>Tank</option>
            <option>Mixer</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select name="status" value={form.status} onChange={handleChange} required>
            <option value="">Select status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Under Maintenance</option>
          </select>
        </div>

        <div className="form-group">
          <label>Last Cleaned</label>
          <input
            type="date"
            name="lastCleanedDate"
            value={form.lastCleanedDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="actions">
          <button className="secondary" type="button" onClick={onCancel}>Cancel</button>
          <button className="primary" type="submit">
            {initialData ? "Update Equipment" : "Add Equipment"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EquipmentForm;
