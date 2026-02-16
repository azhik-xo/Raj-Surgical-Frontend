"use client";

import Navbar from '@/components/Navbar';
import ProductsShell from '../ProductsShell';
import { useSearchParams } from 'next/navigation';

export default function ProductsSearchPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || '';

  return (
    <>
      <Navbar />
      <ProductsShell initialCategory={category} />
    </>
  );
}
