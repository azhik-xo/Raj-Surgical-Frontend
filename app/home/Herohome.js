import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

const Herohome = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="px-6 md:px-16 lg:px-28 py-12 md:py-20 lg:py-14">
                <div className="flex flex-col lg:flex-row max-w-7xl mx-auto items-center gap-8 lg:gap-16 w-full">
                    {/* Left Side - Content */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h1 className="text-5xl  md:text-5xl lg:text-6xl text-center  md:text-left font-[300] text-gray-900 leading-[1.2] md:leading-[1.25] lg:leading-[1.1] mb-6">
                            Find perfect medical products for safe
                        </h1>
                        <p className={`${inter.className} text-gray-600 text-center md:text-left  text-md font-light  md:text-xl mb-5 leading-relaxed`} >
                            Quality products that support better care at every stage of treatment
                        </p>
                        <div className='justify-items-center md:justify-start flex justify-center'>
                            <Link
                                href="/products"
                                className={`${inter.className} bg-primary  font-semibold text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors font-sm inline-block`}
                            >
                                Explore Now
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex-1 w-full aspect-video ">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden">
                            <Image
                                src="/images/Home%20page/Rectangle%202.png"
                                alt="Medical products"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Herohome