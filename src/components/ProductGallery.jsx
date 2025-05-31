export default function ProductGallery({ images = [] }) {
  return (
    <div className="flex overflow-x-auto space-x-2 rounded">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Product Image ${i + 1}`}
          className="h-64 object-cover rounded shadow"
        />
      ))}
    </div>
  );
}
