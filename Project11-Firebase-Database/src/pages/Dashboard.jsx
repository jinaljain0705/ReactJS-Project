import { useSelector } from "react-redux";
import DashboardChart from "../components/DashboardChart";

export default function Dashboard() {
  const products = useSelector((state) => state.inventory.products);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Inventory Dashboard</h1>

      <DashboardChart data={products} />
    </div>
  );
}
