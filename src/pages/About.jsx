export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <h1 className="text-4xl font-bold mb-4 text-center">About Areekah Furniture</h1>
      <p className="text-lg text-gray-700 text-center">
        At Areekah Furniture, we are dedicated to preserving the beauty of Syrian craftsmanship. Our unique furniture collections celebrate centuries of tradition, blending it seamlessly with modern design and comfort.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to bring the artistry of Syrian-inspired furniture into contemporary homes, creating spaces that are warm, inviting, and rich in cultural heritage.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Commitment</h2>
          <p className="text-gray-600">
            We are committed to using quality materials and skilled craftsmanship to produce furniture that is not only beautiful but also durable and timeless.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Craftsmanship & Quality</h2>
        <p className="text-gray-600">
          Each piece is meticulously designed and crafted by artisans who understand the importance of detail, ensuring that every item tells a story and becomes part of your home’s history.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Visit Us</h2>
        <p className="text-gray-600">
          Experience the beauty of Areekah Furniture in person. Visit our showroom to discover our collections and find inspiration for your space.
        </p>
      </div>
    </div>
  );
}
