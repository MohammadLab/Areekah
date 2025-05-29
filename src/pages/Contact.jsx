export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center">
        Have questions or want to learn more? We're here to help!
      </p>

      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="text-gray-600">
          Email: <a href="mailto:info@areekahfurniture.com" className="text-orange-500 hover:underline">info@areekahfurniture.com</a>
        </p>
        <p className="text-gray-600">
          Phone: <a href="tel:+11234567890" className="text-orange-500 hover:underline">+1 (123) 456-7890</a>
        </p>
        <p className="text-gray-600">
          Address: 123 Syrian Heritage St, YourCity, Country
        </p>
      </div>

      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">Our Showroom</h2>
        <p className="text-gray-600">
          Visit our showroom to explore our collections in person and discover the unique artistry of Syrian-inspired furniture.
        </p>
      </div>
    </div>
  );
}
