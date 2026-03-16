import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../app/inventorySlice";

function EditModal({ product, close }) {
  const dispatch = useDispatch();

  const [data, setData] = useState(product);

  useEffect(() => {
    if (product) setData(product);
  }, [product]);

  if (!product) return null;

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    dispatch(
      updateProduct({
        ...data,
        price: Number(data.price),
        quantity: Number(data.quantity),
      }),
    );

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-4">Edit Product</h2>

        <form onSubmit={submit} className="space-y-3">
          <input name="name" value={data.name} onChange={change} />

          <input name="category" value={data.category} onChange={change} />

          <input name="quantity" value={data.quantity} onChange={change} />

          <input name="price" value={data.price} onChange={change} />

          <div className="flex gap-2">
            <button type="submit">Update</button>

            <button type="button" onClick={close}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
