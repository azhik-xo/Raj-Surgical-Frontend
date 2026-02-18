import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });


export default function ProductInfo({ product }) {
  return (
    <div className="flex flex-col justify-start">
      {/* Product Name */}
      <div className="mb-6">
        <h1 className={`${inter.className} text-2xl font-semibold text-gray-900 mb-1`}>{product.name}</h1>
        <p className={`text-lg text-gray-600 ${inter.className}`}>{product.brand}</p>
      </div>

      {/* Volume/Size Options (if available) */}
      {product.specifications?.volume && (
        <div className="mb-6 pb-6 border-b">
          <label className="block text-sm font-semibold text-gray-900 mb-3">Available Volume:</label>
          <div className="flex gap-2 flex-wrap">
            {product.specifications.volume.split(',').map((vol) => {
              const trimVol = vol.trim();
              return (
                <div
                  key={trimVol}
                  className="px-4 py-2 rounded border border-gray-300 bg-gray-50 font-medium text-gray-900"
                >
                  {trimVol}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Size Options (if available) */}
      {product.specifications?.sizes && (
        <div className="mb-6 pb-6 border-b">
          <label className="block text-sm font-semibold text-gray-900 mb-3">Available Sizes:</label>
          <div className="flex gap-2 flex-wrap">
            {product.specifications.sizes.split(',').map((size) => {
              const trimSize = size.trim();
              return (
                <div
                  key={trimSize}
                  className="px-4 py-2 rounded border border-gray-300 bg-gray-50 font-medium text-gray-900"
                >
                  {trimSize}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
        <p className="text-gray-700 text-base leading-relaxed">{product.description}</p>
      </div>

      {/* Store Purchase Note */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
        <p className="text-sm text-gray-700">
          <strong>🏪 Visit Our Store:</strong> This product is available for purchase at our physical store location. Please visit us or call for availability and pricing.
        </p>
      </div>
    </div>
  );
}
