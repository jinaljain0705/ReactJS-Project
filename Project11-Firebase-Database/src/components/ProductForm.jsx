import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../app/inventorySlice";

function ProductForm() {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    dispatch(
      addProduct({
        ...data,
        price: Number(data.price),
        quantity: Number(data.quantity),
      }),
    );

    setData({
      name: "",
      category: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <input
        name="name"
        placeholder="Product Name"
        onChange={change}
        value={data.name}
      />

      <input
        name="category"
        placeholder="Category"
        onChange={change}
        value={data.category}
      />

      <input
        name="quantity"
        placeholder="Stock"
        onChange={change}
        value={data.quantity}
      />

      <input
        name="price"
        placeholder="Price"
        onChange={change}
        value={data.price}
      />

      <button>Add Product</button>
    </form>
  );
}

export default ProductForm;
