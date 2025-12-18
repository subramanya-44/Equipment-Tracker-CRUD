import { formatDateToIndianTime } from "../utils/dateFormatter";

function EquipmentTable({ items, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Last Cleaned</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>
              <span className={`status ${
                item.status === "Active"
                  ? "active"
                  : item.status === "Inactive"
                  ? "inactive"
                  : "maintenance"
              }`}>
                {item.status}
              </span>
            </td>
            <td>{formatDateToIndianTime(item.last_cleaned_date)}</td>
            <td>
              <button className="icon" onClick={() => onEdit(item)}>Edit</button>
              <button className="danger" onClick={() => onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EquipmentTable;
