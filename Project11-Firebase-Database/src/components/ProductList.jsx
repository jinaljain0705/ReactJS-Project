import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
} from "../features/inventory/inventorySlice";

import EditProduct from "./EditProduct";

function ProductList() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.inventory);

  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {editProduct && (
        <EditProduct
          product={editProduct}
          closeEdit={() => setEditProduct(null)}
        />
      )}

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>

              <td>
                <button onClick={() => setEditProduct(p)}>Edit</button>

                <button onClick={() => dispatch(deleteProduct(p.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
