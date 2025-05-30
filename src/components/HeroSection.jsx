export default function HeroSection() {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <img
        src="/images/slider/slide1.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white p-4">
        <h1 className="text-5xl font-bold mb-4">Discover Syrian Craftsmanship</h1>
        <p className="max-w-2xl">
          Experience authentic, hand-crafted furniture that blends tradition with modern elegance.
        </p>
        <a
          href="/contact"
          className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
