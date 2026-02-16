'use client';

import React, { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const SubscribeSection = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <section className="px-6 md:px-16 py-6">
            <style jsx>{`
                .subscription-bg {
                    background-image: url('/images/Product%20page/subscriptionmobile.png');
                }
                @media (min-width: 768px) {
                    .subscription-bg {
                        background-image: url('/images/Product%20page/subscription.png');
                    }
                }
            `}</style>
            <div className="subscription-bg max-w-5xl mx-auto rounded-3xl overflow-hidden bg-cover bg-center p-10">
                <div className="flex flex-col md:flex-row ">
                    {/* Left Side - Text Content */}
                    <div className="flex-1 p-8 md:p-12  text-gray-900 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-3">
                            Trusted by Leading Brands and Certified for Quality
                        </h2>
                        <p className={`${inter.className} text-gray-800 text-sm leading-relaxed`}>
                            Get ready to turn heads with clothing that speaks louder than words. Get ready to turn heads with clothing that speaks louder than words
                        </p>
                    </div>

                    {/* Right Side - Subscribe Form */}
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                            Subscribe Now
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className={`${inter.className} flex flex-col sm:flex-row gap-3`}>
                                <input
                                    type="email"
                                    placeholder="Enter Your name"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`${inter.className} flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FBC13C] placeholder-gray-500 text-sm`}
                                    
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-[#FBC13C] hover:bg-[#e5af36] text-gray-900 font-normal px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                                >
                                    Submit
                                </button>
                            </div>
                            <p className={`${inter.className} text-gray-600 text-xs px-2`}>
                                Get ready to turn heads with clothing that
                            </p>
                            {submitted && (
                                <p className="text-green-600 text-sm">Thanks for subscribing!</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;
