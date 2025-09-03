import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const categories = ["Tous", "Pains", "Viennoiseries", "Pâtisseries"];
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrage par catégorie + recherche
  const filteredProducts = products.filter((p) => {
    const matchCategory =
      activeCategory === "Tous" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-[#8B4513] mb-6">Nos Produits</h2>

      {/* Onglets catégories */}
      <div className="flex border-b border-gray-300 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 -mb-px text-lg font-medium border-b-2 transition-colors duration-300
              ${
                activeCategory === cat
                  ? "border-[#8B4513] text-[#8B4513]"
                  : "border-transparent text-gray-500 hover:text-[#8B4513]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Champ de recherche */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
        />
      </div>

      {/* Liste produits */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">Aucun produit trouvé.</p>
      )}
    </div>
  );
}



