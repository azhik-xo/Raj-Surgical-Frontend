import ProductCard from '../../products/components/ProductCard';

export default function RelatedProducts({ products }) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Related Products</h2>
      <div className="grid grid-cols-2   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
