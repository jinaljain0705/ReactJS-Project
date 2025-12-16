export default function RecordRow({ record, onEdit, onDelete }) {
  return (
    <tr className="border-t">
      <td className="p-2">{record.name}</td>
      <td className="p-2">{record.value}</td>
      <td className="p-2 space-x-2">
        <button
          onClick={() => onEdit(record)}
          className="bg-yellow-400 px-3 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(record.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
