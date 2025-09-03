export default function ContactForm() {
  return (
    <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <input
        type="text"
        placeholder="Nom"
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
      />
      <textarea
        placeholder="Message"
        className="w-full border p-2 rounded"
      ></textarea>
      <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#D9A066]">
        Envoyer
      </button>
    </form>
  );
}
