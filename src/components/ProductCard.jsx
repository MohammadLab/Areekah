{showModal && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    onClick={() => setShowModal(false)}
  >
    <div
      className="bg-white p-4 rounded shadow-lg max-w-3xl w-full relative" // wider max width!
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
      >
        &times;
      </button>
      <div className="flex overflow-x-auto space-x-2 mb-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="h-96 object-contain rounded" // taller preview images
            alt={item.title}
          />
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-2">{item.title}</h3> {/* bigger title */}
      <p className="text-base text-gray-600">{item.description}</p>
    </div>
  </div>
)}
