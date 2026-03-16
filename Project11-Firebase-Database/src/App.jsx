import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenProducts } from "./app/inventorySlice";

import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import EditModal from "./components/EditModal";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.inventory.products);

  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    dispatch(listenProducts());
  }, [dispatch]);

  // Stats
  const totalProducts = products?.length || 0;

  const totalValue =
    products?.reduce((sum, p) => sum + p.price * p.quantity, 0) || 0;

  const lowStock = products?.filter((p) => p.quantity < 10).length || 0;

  return (
    <div className="app-container">
      <h1>Inventory Tracking System</h1>

      {/* Stats */}
      <div className="stats">
        <p>
          Total Products: <b>{totalProducts}</b>
        </p>
        <p>
          Total Value: <b>${totalValue.toFixed(2)}</b>
        </p>
        <p>
          Low Stock: <b>{lowStock}</b>
        </p>
      </div>

      {/* Add Product */}
      <ProductForm />

      {/* Product Table */}
      <ProductTable openEdit={setEditProduct} />

      {/* Edit Modal */}
      {editProduct && (
        <EditModal close={() => setEditProduct(null)}>
          <ProductForm
            editingProduct={editProduct}
            closeModal={() => setEditProduct(null)}
          />
        </EditModal>
      )}
    </div>
  );
}

export default App;
