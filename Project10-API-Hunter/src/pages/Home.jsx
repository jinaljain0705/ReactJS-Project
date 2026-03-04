import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import Card from "../components/Card";
import Loader from "../components/Loader";
import CategoryFilter from "../components/CategoryFilter";

function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      setFiltered(res.data);

      const uniqueCategories = [
        ...new Set(res.data.map((item) => item.category)),
      ];
      setCategories(uniqueCategories);

      setError("");
    } catch {
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    const result = products.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );
    setFiltered(result);
  };

  const handleCategory = (category) => {
    if (category === "all") {
      setFiltered(products);
    } else {
      const result = products.filter((item) => item.category === category);
      setFiltered(result);
    }
  };

  return (
    <div className="min-h-screen bg-dark-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">API Hunter</h1>

      <div className="max-w-6xl mx-auto">
        <Search onSearch={handleSearch} />
        <CategoryFilter categories={categories} onSelect={handleCategory} />

        {loading && <Loader />}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
