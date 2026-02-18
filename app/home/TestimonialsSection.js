
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet consectetur. At sodales metus morbi enim iaculis adipiscing.",
            name: "Rebecca Phillips",
            title: "London, UK",
            rating: 5
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet consectetur. At sodales metus morbi enim iaculis adipiscing.",
            name: "Rebecca Phillips",
            title: "London, UK",
            rating: 4
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet consectetur. At sodales metus morbi enim iaculis adipiscing.",
            name: "Rebecca Phillips",
            title: "London, UK",
            rating: 4
        },
        {
            id: 4,
            text: "Lorem ipsum dolor sit amet consectetur. At sodales metus morbi enim iaculis adipiscing.",
            name: "Rebecca Phillips",
            title: "London, UK",
            rating: 5
        },
        {
            id: 5,
            text: "Lorem ipsum dolor sit amet consectetur. At sodales metus morbi enim iaculis adipiscing.",
            name: "Rebecca Phillips",
            title: "London, UK",
            rating: 5
        },
        {
            id: 6,
            text: "Lorem ipsum dolor sit amet consectetur. At sodales metus morbi enim iaculis adipiscing.",
            name: "Rebecca Phillips",
            title: "London, UK",
            rating: 5
        }
    ];

    return (
        <section className="px-6 md:px-16 lg:px-28 py-12 md:py-16 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <p className={`${inter.className} text-gray-600 text-sm font-medium`}>
                            Meet expert doctors for better care
                        </p>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[300] text-gray-900">
                        What Our Patients Say
                    </h2>
                </div>

                {/* Smooth Scrolling Animation */}
                <style>{`
                    @keyframes scroll-left {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    @keyframes scroll-right {
                        0% {
                            transform: translateX(-50%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }

                    .scroll-container-left {
                        animation: scroll-left 50s linear infinite;
                    }

                    .scroll-container-right {
                        animation: scroll-right 50s linear infinite;
                    }

                    .scroll-container-left:hover,
                    .scroll-container-right:hover {
                        animation-play-state: paused;
                    }
                `}</style>

                {/* First Row - Scroll Left */}
                <div className="relative mb-8 w-full overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="flex gap-6 scroll-container-left w-fit">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={`left-${index}`}
                                className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <p className={`${inter.className} text-gray-600 text-sm mb-6 leading-relaxed`}>
                                    {testimonial.text}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                                        <p className={`${inter.className} text-gray-500 text-xs`}>{testimonial.title}</p>
                                        <div className="flex gap-1 mt-2">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i} className="text-yellow-400 text-xs">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={`left-dup-${index}`}
                                className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <p className={`${inter.className} text-gray-600 text-sm mb-6 leading-relaxed`}>
                                    {testimonial.text}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                                        <p className={`${inter.className} text-gray-500 text-xs`}>{testimonial.title}</p>
                                        <div className="flex gap-1 mt-2">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i} className="text-yellow-400 text-xs">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Row - Scroll Right */}
                <div className="relative w-full overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="flex gap-6 scroll-container-right w-fit">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={`right-${index}`}
                                className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <p className={`${inter.className} text-gray-600 text-sm mb-6 leading-relaxed`}>
                                    {testimonial.text}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                                        <p className={`${inter.className} text-gray-500 text-xs`}>{testimonial.title}</p>
                                        <div className="flex gap-1 mt-2">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i} className="text-yellow-400 text-xs">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={`right-dup-${index}`}
                                className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <p className={`${inter.className} text-gray-600 text-sm mb-6 leading-relaxed`}>
                                    {testimonial.text}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                                        <p className={`${inter.className} text-gray-500 text-xs`}>{testimonial.title}</p>
                                        <div className="flex gap-1 mt-2">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i} className="text-yellow-400 text-xs">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
