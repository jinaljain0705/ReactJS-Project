import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/inventory/inventorySlice";

function AddProduct() {

  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    dispatch(addProduct(product));

    setProduct({
      name: "",
      category: "",
      price: "",
      stock: ""
    });

  };

  return (

    <form onSubmit={handleSubmit}>

      <input name="name" placeholder="Product Name" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input name="price" placeholder="Price" onChange={handleChange} />
      <input name="stock" placeholder="Stock" onChange={handleChange} />

      <button>Add Product</button>

    </form>

  );
}

export default AddProduct;
