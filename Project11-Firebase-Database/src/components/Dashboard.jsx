import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../app/inventorySlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.inventory);

  const [showForm, setShowForm] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (!product.name || !product.price || !product.stock) {
      alert("Please fill all fields");
      return;
    }

    dispatch(addProduct(product));
    setProduct({
      name: "",
      price: "",
      stock: "",
    });

    setShowForm(false);
    dispatch(addProduct(product));

    setProduct({
      name: "",
      price: "",
      stock: "",
    });

    setShowForm(false);
  };

  const stats = [
    {
      label: "Total Products",
      value: items.length,
      icon: "📦",
      bg: "bg-blue-50",
    },
    {
      label: "Total Stock Items",
      value: items.reduce((a, b) => a + Number(b.stock || 0), 0),
      icon: "📈",
      bg: "bg-emerald-50",
    },
    {
      label: "Low Stock Alerts",
      value: items.filter((i) => i.stock < 5).length,
      icon: "⚠️",
      bg: "bg-amber-50",
    },
    {
      label: "Inventory Value",
      value: `$${items.reduce((a, b) => a + b.price * b.stock, 0).toFixed(2)}`,
      icon: "💰",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between mb-8">
        <h1 className="text-4xl font-bold">Inventory Dashboard</h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-emerald-600 text-white px-6 py-3 rounded-2xl"
        >
          ➕ Add Product
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-3xl shadow mb-8">
          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            type="text"
            placeholder="Product Name"
            className="border p-3 w-full mb-3 rounded"
          />

          <input
            name="price"
            value={product.price}
            onChange={handleChange}
            type="number"
            placeholder="Price"
            className="border p-3 w-full mb-3 rounded"
          />

          <input
            name="stock"
            value={product.stock}
            onChange={handleChange}
            type="number"
            placeholder="Stock"
            className="border p-3 w-full mb-3 rounded"
          />

          <button
            onClick={handleSave}
            className="bg-emerald-600 text-white px-5 py-2 rounded"
          >
            Save Product
          </button>
        </div>
      )}

      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow">
            <p>{stat.label}</p>
            <h2 className="text-2xl font-bold">{stat.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
