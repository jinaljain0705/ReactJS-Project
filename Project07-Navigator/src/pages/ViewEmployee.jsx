import { useState } from "react";
import { Link } from "react-router-dom";

export default function ViewEmployee() {
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem("Employees")) || [];
  });

  const removeEmp = (id) => {
    const filtered = data.filter((e) => e.id !== id);
    setData(filtered);
    localStorage.setItem("Employees", JSON.stringify(filtered));
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold text-black mb-4 text-center">
        Employee List
      </h2>

      <table className="min-w-full bg-grey text-black shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp) => (
            <tr
              key={emp.id}
              className="border-b text-center hover:bg-gray-50 transition"
            >
              {/* Image */}
              <td className="p-3">
                {emp.image ? (
                  <img
                    src={emp.image}
                    alt="emp"
                    className="w-10 h-10 rounded-full mx-auto object-cover"
                  />
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </td>

              {/* Name */}
              <td className="p-3 font-medium">{emp.ename}</td>

              {/* Email */}
              <td className="p-3">{emp.email}</td>

              {/* Phone */}
              <td className="p-3">{emp.phone}</td>

              {/* Department */}
              <td className="p-3">{emp.department}</td>

              {/* Salary */}
              <td className="p-3 font-semibold text-gray-800">₹{emp.salary}</td>

              {/* Status */}
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    emp.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {emp.status}
                </span>
              </td>

              {/* Action */}
              <td className="p-3 space-x-4">
                <Link
                  to={`/edit/${emp.id}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Edit
                </Link>
                <button
                  onClick={() => removeEmp(emp.id)}
                  className="text-red-600 hover:underline font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
