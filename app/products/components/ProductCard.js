import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
export default function ProductCard({ product }) {
  // Prefer explicit types, fallback to features Type
  const productType = product.types?.[0]
    || product.features
      .find((f) => f.startsWith('Type:'))
      ?.replace('Type:', '')
      .trim()
    || 'Standard';

  return (
    <Link href={`/productDetails/${product.id}`}>
      <div className="rounded-lg border border-gray-200 overflow-hidden bg-white hover:shadow-lg hover:border-blue-300 transition cursor-pointer h-full flex flex-col">
        <div className="aspect-square sm:aspect-[4/3] bg-gray-50 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:opacity-90 transition"
            loading="lazy"
          />
        </div>
        <div className="p-3 sm:p-4 flex-1 flex flex-col">
          <h3 className={`${inter.className} text-base sm:text-sm font-medium text-[#252C32] line-clamp-2 mb-2`}>{product.name}</h3>
          <div className="mt-auto">
            <div className="text-xs sm:text-xs text-green-600 font-medium mb-2">{productType}</div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-gray-900 truncate">{product.brand}</span>
              <span className="text-xs text-gray-600 flex-shrink-0">{product.category}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
