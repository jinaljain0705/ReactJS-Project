import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { db } from "./firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";
import { setItems } from "./app/inventorySlice";
import Dashboard from "./components/Dashboard";
import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const productsRef = ref(db, "products");
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const list = data
        ? Object.keys(data).map((id) => ({ id, ...data[id] }))
        : [];
      dispatch(setItems(list));
    });
  }, [dispatch]);

  return (
    <>
      <div className="min-h-screen bg-[#fcfcfc]">
        <Dashboard onAddClick={() => setIsModalOpen(true)} />
        <div className="px-8 max-w-7xl mx-auto pb-20">
          <ProductTable />
        </div>
        <ProductForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
