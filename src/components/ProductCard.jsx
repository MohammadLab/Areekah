import { useState } from "react";

export default function ProductCard({ item, index }) {
  const [zoom, setZoom] = useState(false);
  const media = item.media || [];
  const isEven = index % 2 === 0;

  const renderMedia = () => {
    return (
      <div className="flex gap-2 cursor-zoom-in w-full md:w-auto" onClick={() => setZoom(true)}>
        {media.slice(0, 3).map((mediaFile, i) => {
          const isVideo = mediaFile.endsWith(".mp4");
          return isVideo ? (
            <video
              key={i}
              src={mediaFile}
              controls
              className="w-72 h-72 object-cover rounded"
            />
          ) : (
            <img
              key={i}
              src={mediaFile}
              alt={item.title}
              className="w-72 h-72 object-cover rounded"
            />
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div
        className={`flex flex-col md:flex-row items-center gap-8 p-4 rounded shadow ${
          isEven ? "bg-white" : "bg-gray-100"
        } ${isEven ? "" : "md:flex-row-reverse"}`}
      >
        {renderMedia()}
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
              {media.map((mediaFile, i) => {
                const isVideo = mediaFile.endsWith(".mp4");
                return isVideo ? (
                  <video
                    key={i}
                    src={mediaFile}
                    controls
                    className="h-[36rem] object-contain rounded"
                  />
                ) : (
                  <img
                    key={i}
                    src={mediaFile}
                    className="h-[36rem] object-contain rounded"
                    alt={item.title}
                  />
                );
              })}
            </div>
            <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
            <p className="text-lg text-gray-700">{item.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
