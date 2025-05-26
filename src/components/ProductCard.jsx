import { useState } from 'react';
export default function ProductCard({ item, category }) {
  const [zoom, setZoom] = useState(false);
  const images = Array.from({ length: 5 }, (_, i) => `/products/${category}/${item.folder}/${i + 1}.jpg`);
  return (
    <div className="card">
      {!zoom ? (
        <img onClick={() => setZoom(true)} src={images[0]} className="w-full h-48 object-cover rounded cursor-zoom-in" />
      ) : (
        <div onClick={() => setZoom(false)} className="cursor-zoom-out">
          <div className="flex overflow-x-auto space-x-2">
            {images.map((img, i) => (
              <img key={i} src={img} className="h-48 object-contain" />
            ))}
          </div>
        </div>
      )}
      {item.name && <div className="mt-2 font-bold text-xl">{item.name}</div>}
      {item.description && <div className="text-sm text-gray-600">{item.description}</div>}
    </div>
  );
}