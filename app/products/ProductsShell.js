"use client";

import HeroProduct from './Heroproduct';
import { useEffect, useMemo, useState } from 'react';
import { PRODUCTS, getCategories, getBrands } from './_data';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import ResultsHeader from './components/ResultsHeader';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const applySort = (items, sort) => {
  const list = [...items];
  // Sorting removed - only showing featured order
  return list;
};

export default function ProductsShell({ initialCategory = '' }) {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    selectedCategories: initialCategory ? [initialCategory] : [],
    selectedProductNames: [],
  });
  const [sort, setSort] = useState('featured');
  const [selectedType, setSelectedType] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Keep filters in sync if initialCategory changes
  useEffect(() => {
    if (initialCategory) {
      setFilters((prev) => ({
        ...prev,
        selectedCategories: [initialCategory],
      }));
    }
  }, [initialCategory]);

  // Reset product name and type filters when category changes
  useEffect(() => {
    setSelectedType('');
    setFilters((prev) => ({
      ...prev,
      selectedProductNames: []
    }));
  }, [filters.selectedCategories.join(',')]);

  // Reset type filter when product name changes
  useEffect(() => {
    setSelectedType('');
  }, [filters.selectedProductNames.join(',')]);

  const categories = useMemo(() => getCategories(), []);

  const searched = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter((p) => {
      const name = (p.commonName || p.name).toLowerCase();
      const category = p.category.toLowerCase();
      return name.includes(q) || category.includes(q);
    });
  }, [query]);

  // Get available product names based on current category filter
  const availableProductNames = useMemo(() => {
    let list = query.trim() ? [...searched] : [...PRODUCTS];
    
    // Filter by selected categories first
    if (filters.selectedCategories.length > 0) {
      list = list.filter((p) => 
        filters.selectedCategories.includes(p.category)
      );
    }
    
    // Get unique product names - use commonName if available
    const nameSet = new Set(list.map(p => p.commonName || p.name));
    return Array.from(nameSet).sort();
  }, [query, searched, filters.selectedCategories]);

  // Get available types based on current filters
  const availableTypes = useMemo(() => {
    let list = query.trim() ? [...searched] : [...PRODUCTS];
    
    // Filter by selected categories
    if (filters.selectedCategories.length > 0) {
      list = list.filter((p) => 
        filters.selectedCategories.includes(p.category)
      );
    }
    
    // Filter by selected product names
    if (filters.selectedProductNames.length > 0) {
      list = list.filter((p) => {
        const displayName = p.commonName || p.name;
        return filters.selectedProductNames.includes(displayName);
      });
    }
    
    // Extract unique types from the types array
    const typeSet = new Set();
    list.forEach((product) => {
      if (product.types && product.types.length > 0) {
        product.types.forEach(type => typeSet.add(type));
      }
    });
    
    return Array.from(typeSet).sort();
  }, [query, searched, filters.selectedCategories, filters.selectedProductNames]);

  const filtered = useMemo(() => {
    let list = query.trim() ? [...searched] : [...PRODUCTS];
    
    // Apply category filter
    if (filters.selectedCategories.length > 0) {
      list = list.filter((p) => 
        filters.selectedCategories.includes(p.category)
      );
    }
    
    // Apply product name filter
    if (filters.selectedProductNames.length > 0) {
      list = list.filter((p) => {
        const displayName = p.commonName || p.name;
        return filters.selectedProductNames.includes(displayName);
      });
    }
    
    // Apply type filter
    if (selectedType) {
      list = list.filter((p) => {
        if (p.types && p.types.length > 0) {
          return p.types.includes(selectedType);
        }
        return false;
      });
    }
    
    return applySort(list, sort);
  }, [query, searched, filters, sort, selectedType]);

  return (
    <div>

      <HeroProduct onSearch={setQuery} />

      <main className="mx-auto max-w-6xl px-4 pb-16 ">
        <ResultsHeader 
          total={filtered.length} 
          sort={sort} 
          onSortChange={setSort}
          availableTypes={availableTypes}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />

        <div className="mt-4 sm:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((prev) => !prev)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
            aria-expanded={mobileFiltersOpen}
            aria-controls="mobile-filters"
          >
            <span className="inline-flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
                <circle cx="8" cy="6" r="2" />
                <circle cx="16" cy="12" r="2" />
                <circle cx="10" cy="18" r="2" />
              </svg>
              {mobileFiltersOpen ? 'Hide Filters' : 'Filter'}
            </span>
          </button>
        </div>

        <div
          id="mobile-filters"
          className={`fixed inset-0 z-40 sm:hidden ${
            mobileFiltersOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          aria-hidden={!mobileFiltersOpen}
        >
          <button
            type="button"
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              mobileFiltersOpen ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Close filters"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div
            className={`absolute left-0 right-0 bottom-0 origin-bottom rounded-t-2xl bg-white px-4 pb-6 pt-4 shadow-xl transition-transform duration-300 ${
              mobileFiltersOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">Filters</h3>
              <button
                type="button"
                className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="max-h-[75vh] overflow-y-auto pr-1">
              <Filters
                categories={categories}
                productNames={availableProductNames}
                selectedCategories={filters.selectedCategories}
                selectedProductNames={filters.selectedProductNames}
                onChange={(patch) => setFilters((prev) => ({ ...prev, ...patch }))}
              />
            </div>
          </div>
        </div>

        <div className={`mt-4 flex flex-col sm:flex-row gap-6 ${inter.className}`}>
          <div className="hidden sm:block">
            <Filters
              categories={categories}
              productNames={availableProductNames}
              selectedCategories={filters.selectedCategories}
              selectedProductNames={filters.selectedProductNames}
              onChange={(patch) => setFilters((prev) => ({ ...prev, ...patch }))}
            />
          </div>

          <div className="flex-1">
            <ProductGrid 
              products={filtered} 
              key={`grid-${filters.selectedCategories.join(',')}-${filters.selectedProductNames.join(',')}-${selectedType}`}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
