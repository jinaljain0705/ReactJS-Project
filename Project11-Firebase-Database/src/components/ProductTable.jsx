import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../app/inventorySlice";

function ProductTable({ openEdit }) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.inventory.products);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.category}</td>
            <td>${p.price}</td>

            <td style={{ color: p.quantity < 10 ? "red" : "green" }}>
              {p.quantity}
            </td>

            <td>
              <button onClick={() => openEdit(p)}>Edit</button>

              <button onClick={() => dispatch(deleteProduct(p.id))}>
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
