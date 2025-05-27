import { useState } from "react";

export default function ProductCard({ item, index }) {
  const [zoom, setZoom] = useState(false);
  const images = item.images || [];
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center gap-4 ${isEven ? "" : "md:flex-row-reverse"}`}>
      <div className="flex-shrink-0 w-48 h-48 overflow-hidden rounded">
        <img
          src={images[0] || "/images/placeholder.jpg"} // fallback for missing images
          alt={item.title}
          className="w-full h-full object-cover cursor-zoom-in rounded"
          onClick={() => setZoom(!zoom)}
        />
      </div>
      <div className="flex-1 text-left">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
    </div>
  );
}
