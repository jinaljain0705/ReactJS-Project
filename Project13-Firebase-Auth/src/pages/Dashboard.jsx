import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">

        <h1 className="text-2xl font-bold mb-4">Welcome 🎉</h1>
        <p className="text-gray-600">{user?.email}</p>

      </div>

    </div>
  );
}

export default Dashboard;
