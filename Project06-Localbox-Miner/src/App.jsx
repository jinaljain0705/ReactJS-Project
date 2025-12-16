import { useEffect, useState } from "react";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";
import DashboardStats from "./components/DashboardStats";
import SearchBar from "./components/SearchBar";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  // Records state
  const [records, setRecords] = useState(() => {
    return JSON.parse(localStorage.getItem("records")) || [];
  });

  const [editRecord, setEditRecord] = useState(null);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Dark mode state
  const [dark, setDark] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );

  // Persist records
  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  // Persist dark mode
  useEffect(() => {
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  // CRUD functions
  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  const updateRecord = (record) => {
    if (!record) {
      setEditRecord(null);
      return;
    }
    setRecords(records.map((r) => (r.id === record.id ? record : r)));
    setEditRecord(null);
  };

  const deleteRecord = (id) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  const clearAllRecords = () => {
    if (confirm("Clear all records?")) {
      setRecords([]);
    }
  };

  // Filtered records based on search
  const filteredRecords = records.filter((record) =>
    record.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-6">

          {/* Header + Dark Mode Toggle */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">📦 LocalBox Miner</h1>
            <DarkModeToggle dark={dark} setDark={setDark} />
          </div>

          {/* Dashboard Stats */}
          <DashboardStats records={records} />

          {/* Search Bar */}
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {/* Record Form */}
          <RecordForm
            addRecord={addRecord}
            updateRecord={updateRecord}
            editRecord={editRecord}
          />

          {/* Record List */}
          <RecordList
            records={filteredRecords}  // filtered using search
            onEdit={setEditRecord}
            onDelete={deleteRecord}
            onClear={clearAllRecords}
          />
        </div>
      </div>
    </div>
  );
}
