import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  if (!products?.length) {
    return (
      <div className="py-10 text-center text-sm text-gray-600">No products found.</div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
