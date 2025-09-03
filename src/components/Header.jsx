import { Link } from "react-router-dom";
import { useState, useContext, useRef, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartRef = useRef();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("€", "").replace(",", "."));
    return sum + price * item.quantity;
  }, 0);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#8B4513] text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Boulangerie du Parc</h1>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-[#D9A066]">Accueil</Link>
          <Link to="/about" className="hover:text-[#D9A066]">À propos</Link>
          <Link to="/products" className="hover:text-[#D9A066]">Produits</Link>
          <Link to="/contact" className="hover:text-[#D9A066]">Contact</Link>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>

        <div className="relative ml-4" ref={cartRef}>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="bg-[#D9A066] px-4 py-2 rounded-lg hover:bg-[#EAB676] transition"
          >
            Panier ({cart.length})
          </button>

          {isCartOpen && (
            <div className="absolute right-0 mt-2 w-72 md:w-80 bg-white text-gray-800 rounded-lg shadow-lg z-50 p-4 max-h-96 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-gray-500">Votre panier est vide.</p>
              ) : (
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {cart.map((item) => (
                      <li key={item.id} className="flex items-center gap-3 border-b pb-2">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.price} x {item.quantity}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline text-sm">Supprimer</button>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between font-bold">
                    <span>Total :</span>
                    <span>{total.toFixed(2)} €</span>
                  </div>
                  <Link to="/cart" className="block text-center bg-[#8B4513] text-white px-4 py-2 rounded-lg hover:bg-[#A0522D] transition" onClick={() => setIsCartOpen(false)}>Voir le panier</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-[#8B4513] mt-2 p-4 space-y-2">
          <Link to="/" className="block hover:text-[#D9A066]" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
          <Link to="/about" className="block hover:text-[#D9A066]" onClick={() => setIsMenuOpen(false)}>À propos</Link>
          <Link to="/products" className="block hover:text-[#D9A066]" onClick={() => setIsMenuOpen(false)}>Produits</Link>
          <Link to="/contact" className="block hover:text-[#D9A066]" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}




