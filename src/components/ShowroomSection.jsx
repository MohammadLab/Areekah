export default function ShowroomSection() {
  return (
    <div className="bg-orange-500 text-white text-center p-12">
      <h2 className="text-3xl font-bold mb-2">Visit Our Showroom</h2>
      <p>Experience the beauty of Syrian-inspired furniture in person.</p>
      <a
        href="/contact"
        className="inline-block mt-4 px-6 py-2 bg-white text-orange-500 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Contact Us
      </a>
    </div>
  );
}
