import { useState } from "react";
import RecordRow from "./RecordRow";

export default function RecordList({ records, onEdit, onDelete, onClear }) {
  const [search, setSearch] = useState("");

  const filteredRecords = records.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <input
          className="border p-2 rounded w-1/2"
          placeholder="Search record..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>

        <span className="text-sm">Showing {filteredRecords.length}</span>
      </div>

      {filteredRecords.length === 0 ? (
        <p className="text-center text-gray-400 py-6">No Records Found</p>
      ) : (
        <>
          <table className="w-full border">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Value</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record) => (
                <RecordRow
                  key={record.id}
                  record={record}
                  onEdit={onEdit}
                  onDelete={onDelete}/>
              ))}
            </tbody>
          </table>

          <button
            onClick={onClear}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Clear All
          </button>
        </>
      )}
    </div>
  );
}
