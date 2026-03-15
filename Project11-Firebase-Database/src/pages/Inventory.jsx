import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/inventorySlice";

import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";

export default function Inventory() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.inventory.products);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const limit = 5;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? p.category === category : true),
  );

  return (
    <div className="p-4">
      <ProductForm />

      <div className="flex gap-4 mb-4">
        <SearchBar setSearch={setSearch} />
        <CategoryFilter setCategory={setCategory} />
      </div>

      <ProductTable products={products} />

      <Pagination
        total={filtered.length}
        page={page}
        setPage={setPage}
        limit={limit}
      />
    </div>
  );
}
