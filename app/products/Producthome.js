'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import ProductCarousel from './components/ProductCarousel';
import SubscribeSection from './components/SubscribeSection';
import FooterSection from '@/components/FooterSection';

const inter = Inter({ subsets: ['latin'] });

const Producthome = () => {
    const logos = [
        { name: 'Friends', image: '/images/Product%20page/Friends.svg' },
        { name: 'Medvance', image: '/images/Product%20page/Friends.svg' },
        { name: 'Nebula', image: '/images/Product%20page/Friends.svg' },
        { name: 'UIM', image: '/images/Product%20page/Friends.svg' },
        { name: 'Romson', image: '/images/Product%20page/Friends.svg' },
    ];



    return (
        <>
            {/* Hero Section */}
            <section className="relative px-6 md:px-16 lg:px-28 py-20 md:py-28 lg:py-32 flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/Product%20page/Producthero.png"
                        alt="Medical products showcase"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Content Centered on Top of Image */}
                <div className="relative z-10 text-center px-6 md:px-16 lg:px-28 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-[300] text-gray-900 leading-[1.2] md:leading-[1.25] lg:leading-[1.1] mb-6">
                        Where Fashion Meets Freedom
                    </h1>
                    <p className={`${inter.className} text-gray-700 text-base md:text-lg lg:text-xl font-light mb-8 leading-relaxed`}>
                        Get ready to turn heads with clothing that speaks louder than words
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href="/products/search"
                            className={`${inter.className} bg-primary font-semibold text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors inline-block shadow-lg`}
                        >
                            Explore Now →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Logo Carousel Section */}
            <section className="px-6 md:px-16 lg:px-28 py-8 md:py-16 bg-[#ffffff]">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[300] text-gray-900 mb-2 md:mb-4">
                            Trusted by Leading Brands and
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-[300] text-gray-900">
                            Certified for Quality
                        </h3>
                    </div>

                    {/* Logo Grid - All logos in single row */}
                    {/* Mobile: Marquee Scrolling */}
                    <div className="sm:hidden">
                        <style jsx>{`
                            @keyframes marquee {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                            .marquee-container {
                                animation: marquee 15s linear infinite;
                            }
                        `}</style>
                        <div className="relative overflow-hidden">
                            <div className="flex marquee-container">
                                {[...logos, ...logos].map((logo, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 flex items-center justify-center mx-4"
                                    >
                                        <div className="bg-white rounded-lg shadow-sm p-6 w-40">
                                            <div className="relative w-28 h-24">
                                                <Image
                                                    src={logo.image}
                                                    alt={logo.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tablet & Desktop: Grid Layout */}
                    <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6"
                            >
                                <div className="relative w-24 h-20 md:w-28 md:h-24 lg:w-32 lg:h-28">
                                    <Image
                                        src={logo.image}
                                        alt={logo.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="">
                <div className="max-w-5xl mx-auto  grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-left text-center sm:text-4xl lg:text-5xl font-normal leading-[1.2] md:leading-[1.25] lg:leading-[1.1] md:space-y-2">
                            <span className='block'>What We </span>
                            <span className='block'>Stand For Quality</span>
                        </h2>
                    </div>
                    <div className={` text-center md:text-left text-sm sm:text-sm md:px-0 px-5 py-2 md:py-0 text-gray-700 md:leading-normal ${inter.className}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</p>
                        <div className='flex items-center justify-center py-4 md:py-2 md:justify-end md:mx-8 gap-6'>
                            <Link
                                href="/products/search"
                                className='bg-[#FBC13C] hover:bg-[#e5af36] text-gray-900 font-semibold text-base px-5 py-2 rounded-full transition-all shadow-md hover:shadow-lg inline-block'
                            >
                                Place order
                            </Link>
                            <Link href="/products/search" className="group">
                                <div className="h-10 w-10 rounded-full flex items-center justify-center border  hover:shadow-lg transition-all group-hover:scale-110 bg-[FBC13C]" aria-hidden="true">
                                    <svg width="14" height="12" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-4">
                                        <path d="M8.67428 1.20524L8.73479 0.513547L9.42649 0.574063L9.36597 1.26576L8.67428 1.20524ZM1.14103 8.43292C0.999938 8.55131 0.817599 8.6088 0.634121 8.59275C0.450644 8.5767 0.281059 8.48842 0.162671 8.34733C0.0442839 8.20624 -0.0132076 8.0239 0.00284463 7.84042C0.0188968 7.65695 0.107178 7.48736 0.248267 7.36897L1.14103 8.43292ZM2.86466 -2.34017e-05L8.73479 0.513547L8.61376 1.89694L2.74363 1.38337L2.86466 -2.34017e-05ZM9.36597 1.26576L8.8524 7.13589L7.46901 7.01486L7.98258 1.14473L9.36597 1.26576ZM9.12066 1.73722L1.14103 8.43292L0.248267 7.36897L8.2279 0.673269L9.12066 1.73722Z" fill="#000000" stroke="#000000" strokeWidth="0.2" /> </svg> </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <ProductCarousel />
            <SubscribeSection />
            <div className='md:py-5 '>
                <FooterSection />

            </div>
        </>
    );
};

export default Producthome;
