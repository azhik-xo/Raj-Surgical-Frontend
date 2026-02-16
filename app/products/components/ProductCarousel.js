'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Inter } from 'next/font/google';
import { PRODUCTS } from 'app/products/_data';
const inter = Inter({ subsets: ['latin'] });
const SERVICE_ITEMS = [
    { id: 1, category: 'Respiratory', img: 'https://picsum.photos/seed/hospital-oxygen/400/500' },
    { id: 2, category: 'Protective', img: 'https://picsum.photos/seed/hospital-mask/400/500' },
    { id: 3, category: 'Diagnostics', img: 'https://picsum.photos/seed/hospital-thermo/400/500' },
    { id: 4, category: 'Equipment', img: 'https://picsum.photos/seed/hospital-equip/400/500' },
    { id: 5, category: 'Mobility', img: 'https://picsum.photos/seed/hospital-mobility/400/500' },
    { id: 6, category: 'Supports', img: 'https://picsum.photos/seed/hospital-support/400/500' },
    { id: 7, category: 'Hygiene', img: 'https://picsum.photos/seed/hospital-hygiene/400/500' },
];

const CARD_DISC_BY_CATEGORY = PRODUCTS.reduce((acc, product) => {
    if (!acc[product.category] && product.carddisc) {
        acc[product.category] = product.carddisc;
    }
    return acc;
}, {});

const CARDS_PER_BATCH = 5;

export default function ProductCarousel() {
    const containerRef = useRef(null);
    const isAutoScrolling = useRef(false);

    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(CARDS_PER_BATCH);

    const hasMore = visibleCount < SERVICE_ITEMS.length;

    /* ---------- helpers ---------- */
    const getCenterLeft = (card, container) =>
        card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;

    const centerCard = (index, smooth = true) => {
        const container = containerRef.current;
        const card = container?.children[index];
        if (!container || !card) return;

        isAutoScrolling.current = true;

        container.scrollTo({
            left: getCenterLeft(card, container),
            behavior: smooth ? 'smooth' : 'auto',
        });

        setActiveIndex(index);

        setTimeout(() => {
            isAutoScrolling.current = false;
        }, smooth ? 500 : 100);
    };

    /* ---------- initial center ---------- */
    useEffect(() => {
        if (containerRef.current?.children.length) {
            centerCard(0, false);
        }
    }, []);

    /* ---------- scroll handler ---------- */
    const handleScroll = () => {
        if (isAutoScrolling.current) return;

        const container = containerRef.current;
        if (!container) return;

        const center = container.scrollLeft + container.offsetWidth / 2;

        let closestIndex = 0;
        let minDistance = Infinity;

        Array.from(container.children).forEach((card, index) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(center - cardCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        setActiveIndex(closestIndex);
    };

    /* ---------- show more ---------- */
    const handleShowMore = () => {
        setVisibleCount((prev) => {
            const next = Math.min(prev + CARDS_PER_BATCH, SERVICE_ITEMS.length);

            requestAnimationFrame(() => {
                centerCard(next - 1, true);
            });

            return next;
        });
    };

    /* ---------- UI ---------- */
    return (
        <div className="relative py-5 max-w-6xl mx-auto pb-24">
            {/* Left Fade */}
            <div className="absolute left-0 top-6 h-72 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />

            {/* Right Fade */}
            <div className="absolute right-0 top-6 h-72 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 pt-6 scroll-smooth"
                style={{ scrollbarWidth: 'none' }}
            >
                {SERVICE_ITEMS.slice(0, visibleCount).map((item, index) => (
                    <div
                        key={item.id}
                        className={`snap-center shrink-0 w-72 transition-all duration-300
              ${index === activeIndex ? 'scale-[1.02]' : 'opacity-80'}`}
                    >
                        <div className="relative h-72 border-2 rounded-2xl overflow-hidden">
                            <img src={item.img} alt={item.category} className="w-full h-full object-cover" />

                            <Link
                                href={`/products/search?category=${encodeURIComponent(item.category)}`}
                                className="absolute left-3 right-3 bottom-3 bg-white rounded-xl p-3  flex  justify-between items-center shadow"
                            >
                                <p className="flex flex-col">
                                    <span className={`font-semibold ${inter.className}`}>{item.category}</span>
                                    <span className={`font-light text-[0.50rem] ${inter.className}`}>
                                        {CARD_DISC_BY_CATEGORY[item.category] || ''}
                                    </span>
                                </p>

                                <div className="h-9 w-9 rounded-full bg-[#FBC13C] flex items-center justify-center shadow-sm" aria-hidden="true"> <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-3"> <path d="M8.67428 1.20524L8.73479 0.513547L9.42649 0.574063L9.36597 1.26576L8.67428 1.20524ZM1.14103 8.43292C0.999938 8.55131 0.817599 8.6088 0.634121 8.59275C0.450644 8.5767 0.281059 8.48842 0.162671 8.34733C0.0442839 8.20624 -0.0132076 8.0239 0.00284463 7.84042C0.0188968 7.65695 0.107178 7.48736 0.248267 7.36897L1.14103 8.43292ZM2.86466 -2.34017e-05L8.73479 0.513547L8.61376 1.89694L2.74363 1.38337L2.86466 -2.34017e-05ZM9.36597 1.26576L8.8524 7.13589L7.46901 7.01486L7.98258 1.14473L9.36597 1.26576ZM9.12066 1.73722L1.14103 8.43292L0.248267 7.36897L8.2279 0.673269L9.12066 1.73722Z" fill="white" /> </svg> </div>
                            </Link>
                        </div>
                    </div>
                ))}

                {hasMore && (
                    <button
                        onClick={handleShowMore}
                        className="snap-center shrink-0 w-72 h-72 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center gap-3"
                    >
                        <span className="text-lg font-semibold">Show More</span>
                        <span className="text-sm text-gray-500">
                            {SERVICE_ITEMS.length - visibleCount} more
                        </span>
                    </button>
                )}
            </div>

            {/* Pagination */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {SERVICE_ITEMS.slice(0, visibleCount).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => centerCard(index)}
                        className={`h-1 rounded-full transition-all
              ${activeIndex === index ? 'w-8 bg-black' : 'w-3 bg-gray-300'}`}
                    />
                ))}
            </div>

            {/* Navigation Arrows - Desktop Only */}
            <div className="hidden md:flex absolute bottom-7 right-6 gap-4">
                <button
                    onClick={() => {
                        const prevIndex = activeIndex > 0 ? activeIndex - 1 : visibleCount - 1;
                        centerCard(prevIndex);
                    }}
                    className="h-10 w-10 rounded-full border-2 border-[#FBC13C] flex items-center justify-center hover:bg-[#FBC13C]/10 transition-colors"
                    aria-label="Previous card"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" style={{ transform: 'rotate(180deg)' }}>
                        <path fill="#FBC13C" fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                </button>
                <button
                    onClick={() => {
                        const nextIndex = activeIndex < visibleCount - 1 ? activeIndex + 1 : 0;
                        centerCard(nextIndex);
                    }}
                    className="h-10 w-10 rounded-full border-2 border-[#FBC13C] flex items-center justify-center hover:bg-[#FBC13C]/10 transition-colors"
                    aria-label="Next card"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                        <path fill="#FBC13C" fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
