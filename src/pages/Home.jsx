
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Home() {
  return (
    <div className="font-arabic">
      <div className="hero-pattern py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Areekah Furniture</h1>
        <p className="text-lg max-w-xl mx-auto">Handcrafted Syrian-style pieces blending tradition and elegance.</p>
      </div>
      <div className="p-6 space-y-8 max-w-4xl mx-auto">
        {Object.entries(products).map(([category, items]) => (
          <div key={category} className="card flex flex-col md:flex-row items-center gap-4">
            <img src={`/products/${category}/${items[0].folder}/1.jpg`} alt={category} className="w-40 h-40 object-cover rounded-md" />
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-semibold capitalize mb-1">{category}</h2>
              <p className="text-sm text-gray-700 mb-2">{items[0].description || 'Explore our collection of elegant ' + category + '.'}</p>
              <Link to={`/category/${category}`} className="inline-block px-4 py-2 bg-copper text-white rounded-full text-sm hover:bg-amber-800 transition">View {category}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
