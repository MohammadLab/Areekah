const categories = [
  { name: "Sofas", image: "/images/category-sofas.jpg", link: "/category/sofas" },
  { name: "Seats", image: "/images/category-seats.jpg", link: "/category/seats" },
  { name: "Sets", image: "/images/category-sets.jpg", link: "/category/sets" },
  { name: "Tables", image: "/images/category-tables.jpg", link: "/category/tables" },
  { name: "Changing Screens", image: "/images/category-screens.jpg", link: "/category/changing_screen" },
];

export default function CategoryHighlights() {
  return (
    <div className="max-w-6xl mx-auto my-12 px-4 space-y-8">
      <h2 className="text-3xl font-bold text-center">Explore Our Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {categories.map((category, i) => (
          <a
            key={i}
            href={category.link}
            className="relative group overflow-hidden rounded shadow w-full max-w-[300px]"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center text-white font-semibold text-xl group-hover:bg-opacity-50 transition">
              {category.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
