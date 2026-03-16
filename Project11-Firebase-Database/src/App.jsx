import React from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Inventory Tracking System</h1>

        <AddProduct />

        <ProductList />
      </div>
    </>
  );
}

export default App;
