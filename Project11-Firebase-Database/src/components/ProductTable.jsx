import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../app/inventorySlice";

function ProductTable() {
  const { products } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>
              <button
                onClick={() => dispatch(deleteProduct(p.id))}
                className="bg-red-500 text-white px-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
