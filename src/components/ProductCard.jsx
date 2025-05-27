import { useState } from "react";

export default function ProductCard({ item, index }) {
  const [zoom, setZoom] = useState(false);
  const images = item.images || [];
  const isEven = index % 2 === 0;

  return (
    <>
      <div
        className={`flex flex-col md:flex-row items-center gap-8 ${
          isEven ? "" : "md:flex-row-reverse"
        }`}
      >
        <div
          className="flex-shrink-0 w-72 h-72 overflow-hidden rounded cursor-zoom-in shadow"
          onClick={() => setZoom(true)}
        >
          <img
            src={images[0] || "/images/placeholder.jpg"}
            alt={item.title}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex-1 text-left space-y-2">
          <h3 className="text-3xl font-bold">{item.title}</h3>
          <p className="text-lg text-gray-700">{item.description}</p>
        </div>
      </div>

      {zoom && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setZoom(false)}
        >
          <div
            className="bg-white p-4 rounded shadow-lg max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoom(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <div className="flex overflow-x-auto space-x-2 mb-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="h-[36rem] object-contain rounded"
                  alt={item.title}
                />
              ))}
            </div>
            <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
            <p className="text-lg text-gray-700">{item.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
