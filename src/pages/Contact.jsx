import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-[#8B4513] mb-4">Contact</h2>
      <p className="text-gray-600 mb-6">Vous avez une question ? Envoyez-nous un message :</p>
      <ContactForm />
    </div>
  );
}
