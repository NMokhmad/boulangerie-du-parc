import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#8B4513]">
          Bienvenue à la Boulangerie du Parc
        </h2>
        <p className="text-gray-600 mt-2">
          Pain artisanal, croissants frais et gourmandises chaque jour.
        </p>
      </section>

      {/* Produits phares */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Nos produits phares</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
