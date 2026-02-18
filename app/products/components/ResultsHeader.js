"use client";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

export default function ResultsHeader({ total, sort, onSortChange, availableTypes = [], selectedType, onTypeChange }) {
  const [typeOpen, setTypeOpen] = useState(false);
  const currentTypeLabel = selectedType || 'All Types';

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3">
      <p className={`text-xl font-bold text-gray-700 ${inter.className}`}>
        Found <span className="font-medium text-[#59A069] ">{total}</span> results
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {availableTypes.length > 0 && (
          <div className="relative inline-flex items-center gap-2 text-sm text-gray-700">
            <span>Filter by Type</span>
            <button
              type="button"
              onClick={() => setTypeOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-800 shadow-sm"
              aria-haspopup="listbox"
              aria-expanded={typeOpen}
            >
              {currentTypeLabel}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {typeOpen && (
              <div
                role="listbox"
                className="absolute right-0 top-full z-20 mt-2 w-52 max-h-56 overflow-y-auto rounded-lg border border-gray-200 bg-white p-2 text-sm shadow-lg"
              >
                <button
                  type="button"
                  className={`w-full rounded-md px-3 py-2 text-left hover:bg-gray-100 ${
                    !selectedType ? 'bg-gray-100 font-medium' : ''
                  }`}
                  onClick={() => {
                    onTypeChange?.('');
                    setTypeOpen(false);
                  }}
                >
                  All Types
                </button>
                {availableTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`w-full rounded-md px-3 py-2 text-left hover:bg-gray-100 ${
                      selectedType === type ? 'bg-gray-100 font-medium' : ''
                    }`}
                    onClick={() => {
                      onTypeChange?.(type);
                      setTypeOpen(false);
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        
      </div>
    </div>
  );
}
