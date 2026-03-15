import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/inventorySlice";
import { uploadImage } from "../utils/uploadImage";

export default function ProductForm() {

  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const url = await uploadImage(file);

    setProduct({
      ...product,
      image: url,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Button clicked"); // Debug

    dispatch(addProduct(product));

    setProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
      image: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 text-white p-4 shadow rounded mb-4"
    >

      <input
        name="name"
        value={product.name}
        placeholder="Product Name"
        className="border p-2 w-full mb-2 text-white"
        onChange={handleChange}
      />

      <input
        name="category"
        value={product.category}
        placeholder="Category"
        className="border p-2 w-full mb-2 text-white"
        onChange={handleChange}
      />

      <input
        name="price"
        value={product.price}
        placeholder="Price"
        className="border p-2 w-full mb-2 text-white"
        onChange={handleChange}
      />

      <input
        name="stock"
        value={product.stock}
        placeholder="Stock"
        className="border p-2 w-full mb-2 text-white"
        onChange={handleChange}
      />

      <input
        type="file"
        onChange={handleImage}
        className="mb-2"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2 rounded"
      >
        Add Product
      </button>

    </form>
  );
}
