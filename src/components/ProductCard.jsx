import { useState } from "react";

export default function ProductCard({ item }) {
  const [zoom, setZoom] = useState(false);
  const images = item.images || [];

  return (
    <div className="card">
      {!zoom ? (
        <img
          onClick={() => setZoom(true)}
          src={images[0]}
          alt={item.title}
          className="w-full h-48 object-cover rounded cursor-zoom-in"
        />
      ) : (
        <div onClick={() => setZoom(false)} className="cursor-zoom-out">
          <div className="flex overflow-x-auto space-x-2">
            {images.map((img, i) => (
              <img key={i} src={img} className="h-48 object-contain" alt={item.title} />
            ))}
          </div>
        </div>
      )}
      {item.title && <div className="mt-2 font-bold text-xl">{item.title}</div>}
      {item.description && <div className="text-sm text-gray-600">{item.description}</div>}
    </div>
  );
}
