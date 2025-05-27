import { useState } from "react";

export default function ProductCard({ item, index }) {
  const [showModal, setShowModal] = useState(false);
  const images = item.images || [];
  const isEven = index % 2 === 0;

  return (
    <>
      <div className={`flex flex-col md:flex-row items-center gap-4 ${isEven ? "" : "md:flex-row-reverse"}`}>
        <div
          className="flex-shrink-0 w-48 h-48 overflow-hidden rounded cursor-zoom-in"
          onClick={() => setShowModal(true)}
        >
          <img
            src={images[0] || "/images/placeholder.jpg"}
            alt={item.title}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-4 rounded shadow-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <div className="flex overflow-x-auto space-x-2 mb-4">
              {images.map((img, i) => (
                <img key={i} src={img} className="h-64 object-contain rounded" alt={item.title} />
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
