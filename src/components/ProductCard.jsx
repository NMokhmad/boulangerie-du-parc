import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-[#8B4513] font-bold">{product.price}</p>
        </div>
      </div>
    </Link>
  );
}


