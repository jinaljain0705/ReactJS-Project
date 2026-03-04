import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const [product] = useState(() => {
    const storedProduct = localStorage.getItem("selectedProduct");
    return storedProduct ? JSON.parse(storedProduct) : null;
  });
  const navigate = useNavigate();

  if (!product) {
    return <p className="text-center mt-10">No product found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate("/")}
        className="mb-6 bg-gray-300 px-4 py-2 rounded"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-60 mx-auto object-contain"
        />
        <h2 className="font-semibold mt-3 text-sm text-dark-800">{product.title}</h2>
        <p className="text-green-600 text-xl font-semibold mt-2">
          ${product.price}
        </p>
        <p className="mt-4 text-gray-600">{product.description}</p>
        <p className="mt-3 text-sm capitalize text-blue-500">
          Category: {product.category}
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
