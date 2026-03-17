import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

function Dashboard() {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl">Dashboard</h1>

      <button onClick={logout} className="bg-black text-white px-4 py-2 mt-4">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
