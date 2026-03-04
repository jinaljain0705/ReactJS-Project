import { useNavigate } from "react-router-dom";

function Card({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-xl transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />
      <h2 className="font-semibold mt-3 text-sm text-gray-800">
        {product.title}
      </h2>
      <p className="text-green-600 font-bold mt-2">${product.price}</p>
    </div>
  );
}

export default Card;
