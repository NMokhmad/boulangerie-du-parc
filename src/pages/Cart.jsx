import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("€", "").replace(",", "."));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-[#8B4513] mb-6">Votre Panier</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Votre panier est vide.</p>
      ) : (
        <div>
          <ul className="space-y-4 mb-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-white p-4 shadow rounded-lg"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>{item.price} x {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center font-bold text-xl">
            <p>Total :</p>
            <p>{total.toFixed(2)} €</p>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={clearCart}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500"
            >
              Vider le panier
            </button>
            <button className="bg-[#8B4513] text-white px-6 py-2 rounded-lg hover:bg-[#D9A066]">
              Passer commande
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
