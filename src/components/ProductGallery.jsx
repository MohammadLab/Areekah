
export default function ProductGallery({ images = [] }) {
  return (
    <div className="flex overflow-x-auto gap-2">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Product ${i}`}
          className="h-64 object-cover rounded shadow"
        />
      ))}
    </div>
  );
}
