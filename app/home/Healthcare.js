import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

const Healthcare = () => {
    return (
        <>
            {/* Trusted Healthcare Section */}
            <section className="px-6 md:px-16 lg:px-28 py-12 md:py-16  ">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl/10 md:text-4xl/[3rem] lg:text-5xl/[3.5rem] font-[300] text-gray-900 mb-4 tracking-wide">
                            <span className="block">Trusted by Leading Healthcare</span>
                            <span className="block">Providers</span>
                        </h2>
                        <p className={`${inter.className} text-gray-600 text-sm md:text-base/6 max-w-2xl mx-auto`}>
                            Quality products that support better care at every stage of treatment
                            Quality products that support better care at every stage of
                        </p>
                    </div>

                    {/* Image Grid */}
                    <div className="flex flex-col gap-2">
                        {/* Mobile layout */}
                        <div className="grid grid-cols-[1.2fr_0.8fr] gap-2 sm:gap-3 md:hidden">
                            {/* Top full-width */}
                            <div className="col-span-2 relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src="/images/Home%20page/Frame%203.png"
                                    alt="Surgical procedure"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Left tall hero image */}
                            <div className="row-span-3 relative w-full min-h-[300px] sm:min-h-[360px] rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src="/images/Home%20page/Frame%205.png"
                                    alt="Medical mask"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Right column stacked */}
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src="/images/Home%20page/Frame%206.png"
                                    alt="Medical equipment"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src="/images/Home%20page/Frame%207.png"
                                    alt="Medical professional"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src="/images/Home%20page/Frame%208.png"
                                    alt="Laboratory equipment"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Desktop / tablet layout */}
                        <div className="hidden md:flex flex-col gap-2">
                            {/* Top Row - 2 Images */}
                            <div className="grid grid-cols-3 gap-2 h-64 md:h-80 lg:h-96">
                                {/* Large Image - Surgery */}
                                <div className="col-span-2 relative h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/images/Home%20page/Frame%203.png"
                                        alt="Surgical procedure"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Small Image - Medical Equipment */}
                                <div className="relative h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/images/Home%20page/Frame%205.png"
                                        alt="Medical equipment"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Bottom Row - 3 Equal Images */}
                            <div className="grid grid-cols-3 gap-2">
                                {/* Image 1 - Surgical Instruments */}
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/images/Home%20page/Frame%206.png"
                                        alt="Surgical instruments"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Image 2 - Medical Professional */}
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/images/Home%20page/Frame%207.png"
                                        alt="Medical professional"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Image 3 - Laboratory */}
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/images/Home%20page/Frame%208.png"
                                        alt="Laboratory equipment"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Healthcare