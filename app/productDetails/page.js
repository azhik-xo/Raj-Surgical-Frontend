'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getProductById, getRelatedProducts } from '../products/_data';
import ProductCard from '../products/components/ProductCard';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
export default function ProductDetailsPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching product details (later will be replaced with API call to DB)
    const fetchProduct = async () => {
      try {
        // For now, using local data. Later: const response = await fetch(`/api/products/${params.id}`);
        const productData = getProductById(params.id);

        if (productData) {
          setProduct(productData);
          const related = getRelatedProducts(params.id, productData.category);
          setRelatedProducts(related);
          // Set default size if available
          if (productData.specifications?.sizes) {
            setSelectedSize(productData.specifications.sizes.split(',')[0].trim());
          }
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className={`text-lg text-gray-600 ${inter.className}`}>Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className={`${inter.className}text-lg text-gray-600`}>Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className={`max-w-7xl mx-auto px-4 py-4 text-sm ${inter.className} text-gray-600`}>
          <span>Home / {product.category} / {product.name}</span>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg p-6 mb-8">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover max-h-500px"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-start">
            {/* Product Name */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 text-base">{product.description}</p>
            </div>

            {/* Size Selection (if available) */}
            {product.specifications?.sizes && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Size: <span className="text-gray-600 font-normal">{selectedSize}</span>
                </label>
                <div className="flex gap-2 flex-wrap">
                  {product.specifications.sizes.split(',').map((size) => {
                    const trimSize = size.trim();
                    return (
                      <button
                        key={trimSize}
                        onClick={() => setSelectedSize(trimSize)}
                        className={`px-4 py-2 rounded border font-medium transition ${selectedSize === trimSize
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-900 border-gray-300 hover:border-blue-600'
                          }`}
                      >
                        {trimSize}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Delivery Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 text-xl">🏪</span>
                <div>
                  <p className="font-semibold text-gray-900">Visit Our Store</p>
                  <p className="text-sm text-gray-600">Product available at our physical location</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 text-xl">📞</span>
                <div>
                  <p className="font-semibold text-gray-900">Contact Us</p>
                  <p className="text-sm text-gray-600">Call for availability and more information</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Features */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg mt-0.5">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h2>
            <div className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-2">
                  <span className="text-gray-700 font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                  <span className="text-gray-900 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Long Description */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Details</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{product.longDescription}</p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-6">
            <p className="text-sm text-gray-700">
              <strong>📌 Note:</strong> This product information is currently stored locally. In the future, all product details will be fetched from our database for real-time inventory and pricing updates.
            </p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
