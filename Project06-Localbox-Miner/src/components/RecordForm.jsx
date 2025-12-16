import { useState } from "react";

export default function RecordForm({ addRecord, updateRecord, editRecord }) {
  const [name, setName] = useState(() => (editRecord ? editRecord.name : ""));
  const [value, setValue] = useState(() =>
    editRecord ? editRecord.value : ""
  );
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !value) {
      setError("All fields are required");
      return;
    }

    const record = {
      id: editRecord ? editRecord.id : Date.now(),
      name,
      value,
    };

    if (editRecord) {
      updateRecord(record);
      setMessage("Record updated successfully ✅");
    } else {
      addRecord(record);
      setMessage("Record added successfully ✅");
    }

    setError("");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-3 dark:text-black">
        {editRecord ? "✏️ Edit Record" : "➕ Add Record"}
      </h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {message && <p className="text-green-600 mb-2">{message}</p>}

      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="border p-2 rounded
             bg-white dark:bg-gray-700
             text-black dark:text-white
             placeholder-gray-400"
          placeholder="Record Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 rounded
             bg-white dark:bg-gray-700
             text-black dark:text-white
             placeholder-gray-400"
          placeholder="Record Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="mt-4 flex gap-3">
        <button
          type="submit"
          className="bg-blue-600 text-dark px-5 py-2 rounded"
        >
          {editRecord ? "Update" : "Add"}
        </button>

        {editRecord && (
          <button
            type="button"
            onClick={() => updateRecord(null)}
            className="bg-gray-400 text-dark px-5 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
