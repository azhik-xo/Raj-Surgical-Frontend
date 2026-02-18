export default function ProductImage({ product }) {
  return (
    <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover max-h-500px"
      />
    </div>
  );
}
