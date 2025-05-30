const featuredProducts = [
  { title: "Elegant Sofa", image: "/images/slider/slide2.jpg", link: "/product/0001" },
  { title: "Cozy Armchair", image: "/images/slider/slide3.jpg", link: "/product/0002" },
  { title: "Wooden Table", image: "/images/slider/slide1.jpg", link: "/product/0003" },
  { title: "Decorative Screen", image: "/images/slider/slide2.jpg", link: "/product/0004" },
];

export default function FeaturedProducts() {
  return (
    <div className="max-w-6xl mx-auto my-12 px-4 space-y-8">
      <h2 className="text-3xl font-bold text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {featuredProducts.map((product, i) => (
          <a
            key={i}
            href={product.link}
            className="group border rounded overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <h3 className="text-lg font-semibold group-hover:text-orange-500 transition">
                {product.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
