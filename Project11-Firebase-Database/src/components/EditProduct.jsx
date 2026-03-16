import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../features/inventory/inventorySlice";

function EditProduct({ product, closeEdit }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateProduct(formData));

    closeEdit();
  };

  return (
    <div>
      <h3>Edit Product</h3>

      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <input name="price" value={formData.price} onChange={handleChange} />
        <input name="stock" value={formData.stock} onChange={handleChange} />

        <button type="submit">Update</button>
        <button type="button" onClick={closeEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
