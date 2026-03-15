import { Link } from "react-router-dom";

export default function Navbar() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Inventory System</h1>

      <div className="flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/inventory">Inventory</Link>

        <button onClick={toggleDark} className="bg-black px-3 py-1 rounded">
          Dark
        </button>
      </div>
    </div>
  );
}
