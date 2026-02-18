'use client';

import Navbar from '@/components/Navbar';
import ComingSoon from '@/components/ComingSoon';
import Heroservice from './Heroservice';
import FeedbackForm from './FeedbackForm';
import FooterSection from '@/components/FooterSection';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useRef, useState, useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] });
const products = [
  { name: 'Oxygen cilinder', image: '/images/Product%20page/Friends.svg' },
  { name: 'BIG Cot', image: '/images/Product%20page/Medvance.svg' },
  { name: 'Room', image: '/images/Product%20page/Nebula.svg' },
  { name: 'guest room', image: '/images/Product%20page/UIM.svg' },
];
const Service = () => {
  const containerRef = useRef(null);
  const isAutoScrolling = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const isCarousel = products.length > 4;

  const centerCard = (index, smooth = true) => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.service-card');
    const card = cards[index];
    if (!card) return;

    isAutoScrolling.current = true;

    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    const containerWidth = container.offsetWidth;
    const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);

    container.scrollTo({
      left: scrollLeft,
      behavior: smooth ? 'smooth' : 'auto',
    });

    setActiveIndex(index);

    setTimeout(() => {
      isAutoScrolling.current = false;
    }, smooth ? 500 : 100);
  };

  const handleScroll = () => {
    if (!isCarousel || isAutoScrolling.current) return;

    const container = containerRef.current;
    if (!container) return;

    const center = container.scrollLeft + container.offsetWidth / 2;
    const cards = container.querySelectorAll('.service-card');

    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    if (isCarousel && containerRef.current) {
      centerCard(0, false);
    }
  }, [isCarousel]);
  return (
    <div>
      <Navbar />
      {/* <ComingSoon title="Services" /> */}
      <Heroservice />
      {/* What We Stand For Quality */}
      {/* Featured Products Section - Service Carousel Style */}
      <section className="px-6 md:px-16 lg:px-28 py-16 md:py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto">
          {/* What We Stand For Quality */}
          <section className="">

            <div className="max-w-6xl mx-auto   items-center">
              <div>
                <h2 className="text-3xl  text-center sm:text-4xl lg:text-5xl font-normal leading-[1.2] md:leading-[1.25] lg:leading-[1.1] md:space-y-2">
                  <span className='block'>Our Services </span>
                </h2>
              </div>
              <div className={` text-center px-4 md:px-72  text-sm sm:text-sm py-2 md:py-4 text-gray-700 md:leading-normal ${inter.className}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</p>
              </div>
            </div>
          </section >

          {/* Products Grid / Carousel */}
          <div className="relative pb-16">
            {/* Left Fade - Only for carousel */}
            {isCarousel && (
              <>
                <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
              </>
            )}

            <div
              ref={containerRef}
              onScroll={handleScroll}
              className={
                isCarousel
                  ? "flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
                  : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-6"
              }
              style={isCarousel ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}}
            >
              {products.map((product, index) => (
                <Link
                  key={index}
                  href={`/service/serviceproductsdetails?name=${encodeURIComponent(product.name)}`}
                  className={`service-card ${isCarousel
                      ? 'snap-center shrink-0 w-64'
                      : ''
                    }`}
                >
                  <div className="relative h-64 md:h-72 border-2 border-gray-200 rounded-2xl overflow-hidden bg-white">
                    {/* Product Image */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className={`w-full h-full object-contain p-4 transition-transform duration-300 ${
                        isCarousel && index === activeIndex ? 'scale-105' : ''
                      }`}
                    />

                    {/* Product Info Bar */}
                    <div className="absolute left-3 right-3 bottom-3 bg-white rounded-xl p-3 flex justify-between items-center shadow-md border border-gray-100">
                      <span className="font-semibold text-gray-900 text-sm md:text-base">{product.name}</span>
                      <div className="h-9 w-9 rounded-full bg-[#FBC13C] flex items-center justify-center shadow-sm" aria-hidden="true">
                        <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-3">
                          <path d="M8.67428 1.20524L8.73479 0.513547L9.42649 0.574063L9.36597 1.26576L8.67428 1.20524ZM1.14103 8.43292C0.999938 8.55131 0.817599 8.6088 0.634121 8.59275C0.450644 8.5767 0.281059 8.48842 0.162671 8.34733C0.0442839 8.20624 -0.0132076 8.0239 0.00284463 7.84042C0.0188968 7.65695 0.107178 7.48736 0.248267 7.36897L1.14103 8.43292ZM2.86466 -2.34017e-05L8.73479 0.513547L8.61376 1.89694L2.74363 1.38337L2.86466 -2.34017e-05ZM9.36597 1.26576L8.8524 7.13589L7.46901 7.01486L7.98258 1.14473L9.36597 1.26576ZM9.12066 1.73722L1.14103 8.43292L0.248267 7.36897L8.2279 0.673269L9.12066 1.73722Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination dots - Only for carousel */}
            {isCarousel && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => centerCard(index)}
                    className={`h-1 rounded-full transition-all
                      ${activeIndex === index ? 'w-8 bg-black' : 'w-3 bg-gray-300'}`}
                  />
                ))}
              </div>
            )}

            {/* Navigation Arrows - Desktop Only - Show after 4 cards */}
            {isCarousel && (
              <div className="hidden md:flex absolute -bottom-5 right-7 gap-4">
                <button
                  onClick={() => {
                    const prevIndex = activeIndex > 0 ? activeIndex - 1 : products.length - 1;
                    centerCard(prevIndex);
                  }}
                  className="h-10 w-10 rounded-full border-2 border-[#FBC13C] flex items-center justify-center hover:bg-[#FBC13C]/10 transition-colors"
                  aria-label="Previous card"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" style={{ transform: 'rotate(180deg)' }}>
                    <path fill="#FBC13C" fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const nextIndex = activeIndex < products.length - 1 ? activeIndex + 1 : 0;
                    centerCard(nextIndex);
                  }}
                  className="h-10 w-10 rounded-full border-2 border-[#FBC13C] flex items-center justify-center hover:bg-[#FBC13C]/10 transition-colors"
                  aria-label="Next card"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path fill="#FBC13C" fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <FeedbackForm />
      <FooterSection />

    </div>
  );
};

export default Service;
