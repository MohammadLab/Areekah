import { useState } from "react";

export default function ProductCard({ item, index }) {
  const [zoom, setZoom] = useState(false);
  const images = item.images || [];
  const isEven = index % 2 === 0;

  const renderImages = () => {
    if (images.length === 1) {
      return (
        <div
          className="w-72 h-72 overflow-hidden rounded cursor-zoom-in"
          onClick={() => setZoom(true)}
        >
          <img
            src={images[0]}
            alt={item.title}
            className="w-full h-full object-cover rounded"
          />
        </div>
      );
    }

    if (images.length === 2) {
      return (
        <div className="relative w-72 h-72 cursor-zoom-in" onClick={() => setZoom(true)}>
          <img
            src={images[0]}
            alt={item.title}
            className="w-full h-full object-cover rounded"
          />
          <img
            src={images[1]}
            alt={item.title}
            className="absolute bottom-0 right-0 w-36 h-36 object-cover rounded border border-white"
          />
        </div>
      );
    }

    if (images.length >= 3) {
      return (
        <div className="relative w-72 h-72 cursor-zoom-in" onClick={() => setZoom(true)}>
          <img
            src={images[0]}
            alt={item.title}
            className="w-full h-full object-cover rounded"
          />
          <img
            src={images[1]}
            alt={item.title}
            className="absolute bottom-0 right-0 w-36 h-36 object-cover rounded border border-white"
          />
          <img
            src={images[2]}
            alt={item.title}
            className="absolute top-0 right-0 w-36 h-36 object-cover rounded border border-white"
          />
        </div>
      );
    }
  };

  return (
    <>
      <div
        className={`flex flex-col md:flex-row items-center gap-8 p-4 rounded shadow ${
          isEven ? "bg-white" : "bg-gray-100"
        } ${isEven ? "" : "md:flex-row-reverse"}`}
      >
        {renderImages()}
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
