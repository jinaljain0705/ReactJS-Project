import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../app/inventorySlice";

import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Inventory Tracking System</h1>

      <ProductForm />
      <ProductTable />
    </div>
  );
}

export default Dashboard;
