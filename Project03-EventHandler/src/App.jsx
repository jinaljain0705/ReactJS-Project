import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (name) => {
    const newStudent = {
      id: Date.now(),
      name,
      status: "",
      showDetails: false,
    };
    setStudents([...students, newStudent]);
  };

  const toggleDetails = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, showDetails: !s.showDetails } : s
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const markStatus = (id, status) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, status } : s
      )
    );
  };

  const presentCount = students.filter((s) => s.status === "present").length;
  const absentCount = students.filter((s) => s.status === "absent").length;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🎓 Student Activity Manager
      </h1>

      {/* Dashboard Summary */}
      <div className="bg-gray-100 p-4 rounded-xl shadow mb-6 flex justify-between text-center">
        <p>Total: <b>{students.length}</b></p>
        <p>Present: 
          <span className="text-green-600 font-semibold">{presentCount}</span>
        </p>
        <p>Absent: 
          <span className="text-red-600 font-semibold">{absentCount}</span>
        </p>
      </div>

      <StudentForm addStudent={addStudent} />

      <StudentList
        students={students}
        toggleDetails={toggleDetails}
        deleteStudent={deleteStudent}
        markStatus={markStatus} />
    </div>
  );
};

export default App;
