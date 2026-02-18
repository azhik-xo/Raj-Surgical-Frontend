'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getProductById, getRelatedProducts } from '../../products/_data';
import Breadcrumb from './Breadcrumb';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductFeatures from './ProductFeatures';
import ProductSpecifications from './ProductSpecifications';
import ProductDescription from './ProductDescription';
import RelatedProducts from './RelatedProducts';
import Navbar from '@/components/Navbar';

export default function ProductDetailsPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
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
        <div className="text-lg text-gray-600">Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <Breadcrumb category={product.category} productName={product.name} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg p-6 mb-8">
          <ProductImage product={product} />
          <ProductInfo product={product} />
        </div>

        {/* Features & Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ProductFeatures features={product.features} />
          <ProductSpecifications specifications={product.specifications} />
        </div>

        {/* Product Description */}
        <div className="mb-8">
          <ProductDescription longDescription={product.longDescription} />
        </div>

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
}
