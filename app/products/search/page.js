"use client";

import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import ProductsShell from '../ProductsShell';
import { useSearchParams } from 'next/navigation';

function SearchContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || '';

  return <ProductsShell initialCategory={category} />;
}

export default function ProductsSearchPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <SearchContent />
      </Suspense>
    </>
  );
}
