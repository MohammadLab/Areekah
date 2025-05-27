import { Link } from "react-router-dom";

const categories = [
  {
    name: "Sofas",
    slug: "sofas",
    description: "Discover our range of handcrafted Syrian-style sofas, blending tradition and luxury.",
  },
  {
    name: "Seats",
    slug: "seats",
    description: "Elegant and comfortable seating options, meticulously crafted to elevate your space.",
  },
  {
    name: "Sets",
    slug: "sets",
    description: "Complete sets for your living space, offering cohesive style and functionality.",
  },
  {
    name: "Tables",
    slug: "tables",
    description: "Unique Syrian-inspired tables to enrich your home decor.",
  },
  {
    name: "Changing Screen",
    slug: "changing_screen",
    description: "Traditional wooden screens with intricate Syrian designs, perfect for partitioning or decorating.",
  },
];

export default function Home() {
  return (
    <div className="font-arabic">
      <div className="hero-pattern py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Areekah Furniture</h1>
        <p className="text-lg max-w-xl mx-auto">
          Explore our unique range of Syrian furniture and find the perfect addition to your space.
        </p>
      </div>

      <div className="p-6 space-y-8 max-w-4xl mx-auto">
        {categories.map((category, i) => (
          <div key={i} className="card flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-semibold capitalize mb-1">{category.name}</h2>
              <p className="text-sm text-gray-700 mb-2">{category.description}</p>
              <Link
                to={`/category/${category.slug}`}
                className="inline-block mt-2 px-4 py-2 bg-copper text-white rounded-full text-sm hover:bg-amber-800 transition"
              >
                View {category.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
