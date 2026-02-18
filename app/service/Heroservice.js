'use client';

import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Heroservice = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-16 text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-[1.2] md:leading-[1.25] lg:leading-[1.1] md:space-y-2">
        <span className="block font-light">WHERE</span>
        <span className="block font-normal">QUALITY MEETS YOUR</span>
        <span className="block font-light">BUDGET-FRIENDLY EXPERIENCES</span>
      </h1>
      <p className={`mx-auto px-4 mt-3 md:mt-6 max-w-2xl  text-gray-600 text-sm sm:text-base ${inter.className} leading-relaxed`}>
        Quality products that support better care at every stage of treatment. Quality products that support better care at every stage of treatment.
      </p>
      <div className="mt-2 flex justify-center">
        <button className={`rounded-full border border-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white ${inter.className} transition-colors`}>
          EXPLORE NOW
        </button>
      </div>
    </section>
  );
};

export default Heroservice;