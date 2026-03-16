import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../app/inventorySlice";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProduct({
        name,
        price,
      }),
    );

    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        className="border p-2"
      />

      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        className="border p-2"
      />

      <button className="bg-blue-500 text-white px-4">Add</button>
    </form>
  );
}

export default ProductForm;
