export default function DashboardStats({ records }) {
  const lastRecord = records[records.length - 1];

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded">
        <p className="text-sm">Total Records</p>
        <h2 className="text-2xl font-bold">{records.length}</h2>
      </div>

      <div className="bg-green-100 dark:bg-green-900 p-4 rounded">
        <p className="text-sm">Last Added</p>
        <h2 className="font-semibold">{lastRecord ? lastRecord.name : "—"}</h2>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded">
        <p className="text-sm">Storage</p>
        <h2 className="font-semibold">localStorage</h2>
      </div>
    </div>
  );
}
