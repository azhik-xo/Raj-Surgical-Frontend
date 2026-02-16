import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

const Banner = () => {
    return (
        <>
            {/* CTA Banner */}
            <section className="px-6 md:px-16 lg:px-28 py-10 md:py-14">
                <div className="max-w-6xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br
from-[rgba(18,40,18,1)]
via-[rgba(26,53,26,1)]
to-[rgba(35,104,35,1)]
 text-white">
                        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_40%)]" aria-hidden="true" />
                        <div className="flex flex-col-reverse  lg:flex-row items-center justify-between gap-6 lg:gap-10 px-6 md:px-10 lg:px-12 py-4 md:py-4 lg:py-4">
                            {/* Text */}
                            <div className="flex-1 max-w-lg">
                                <h3 className="text-3xl md:text-5xl md:text-left text-center lg:text-4xl  tracking-wide leading-tight mb-3 md:mb-6">
                                    <span className="block">Schedule Your</span>
                                    <span className="block font-normal">Appointment With us</span>
                                </h3>
                                <p className={`${inter.className} text-sm md:text-base md:text-left text-center  font-light text-white leading-relaxed mb-8 tracking-wide`}>
                                    Lorem ipsum dolor sit amet consectetur. At donec mollis nulla amet. Elementum nibh lacus adipiscing integer. Elementum nibh lacus adipiscing
                                </p>
                                <div className="flex items-center md:justify-start justify-center gap-4">
                                    <Link
                                        href="/contact"
                                        className={`${inter.className} inline-flex items-center gap-2 bg-white text-gray-900 font-light text-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all`}
                                    >
                                        Make as a Call
                                        <span className="flex items-center justify-center w-5 h-5 p-1 bg-gray-900 text-white rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="flex-1 w-full max-w-lg">
                                <div className="relative  h-72 md:h-80 lg:h-96">
                                    <Image
                                        src="/images/Home%20page/image%2013.png"
                                        alt="Medical chair"
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority
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

export default Banner