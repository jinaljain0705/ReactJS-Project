const StudentCard = ({ student, toggleDetails, deleteStudent, markStatus }) => {
  return (
    <div className="bg-white p-4 rounded-xl mb-4 shadow border">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          {student.name}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            student.status === "present"
              ? "bg-green-200 text-green-700"
              : student.status === "absent"
              ? "bg-red-200 text-red-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {student.status ? student.status.toUpperCase() : "Not Marked"}
        </span>
      </div>

      <div className="mt-3 flex gap-3 flex-wrap">
        <button
          onClick={() => toggleDetails(student.id)}
          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg"
        >
          {student.showDetails ? "Hide Details" : "Show Details"}
        </button>

        <button
          onClick={() => markStatus(student.id, "present")}
          className="px-3 py-1 bg-green-100 text-green-700 rounded-lg"
        >
          Present
        </button>

        <button
          onClick={() => markStatus(student.id, "absent")}
          className="px-3 py-1 bg-red-100 text-red-700 rounded-lg"
        >
          Absent
        </button>

        <button
          onClick={() => deleteStudent(student.id)}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg"
        >
          Delete
        </button>
      </div>

      {student.showDetails && (
        <div className="mt-3 text-gray-700 space-y-1">
          <p>📌 <b>Student ID:</b> {student.id}</p>
          <p>📘 <b>Course:</b> {student.course}</p>
          <p>📞 <b>Phone:</b> {student.phone}</p>
        </div>
      )}
    </div>
  );
};

export default StudentCard;
