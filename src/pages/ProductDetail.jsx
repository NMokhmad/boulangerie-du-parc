import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <p className="text-center text-gray-500">Produit introuvable.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <Link to="/products" className="text-[#8B4513] hover:underline">
        ← Retour aux produits
      </Link>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image produit */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />

        {/* Infos produit */}
        <div>
          <h2 className="text-3xl font-bold text-[#8B4513] mb-4">
            {product.name}
          </h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-[#8B4513] mb-6">
            {product.price}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-[#8B4513] text-white px-6 py-2 rounded-lg hover:bg-[#D9A066]"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

