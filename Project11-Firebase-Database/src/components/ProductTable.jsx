import { useDispatch } from "react-redux";
import { deleteProduct } from "../features/inventorySlice";

export default function ProductTable({ products = [] }) {
  const dispatch = useDispatch();

  return (
    <table className="bg-black w-full border text-white">
      <thead>
        <tr className="bg-gray-800">
          <th className="border p-2">Name</th>
          <th className="border p-2">Category</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Stock</th>
          <th className="border p-2">Image</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>

      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan="6" className="text-center p-4">
              No Products Available
            </td>
          </tr>
        ) : (
          products.map((p) => (
            <tr key={p.id} className={p.stock < 5 ? "bg-red-200 text-black" : ""}>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.category}</td>
              <td className="border p-2">{p.price}</td>
              <td className="border p-2">{p.stock}</td>

              <td className="border p-2">
                {p.image ? (
                  <img src={p.image} alt="product" className="w-12" />
                ) : (
                  "No Image"
                )}
              </td>

              <td className="border p-2">
                <button
                  onClick={() => dispatch(deleteProduct(p.id))}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
