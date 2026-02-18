"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({subsets:['latin']})
export default function HeroProduct({ onSearch }) {
	const [query, setQuery] = useState("");

const handleChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        if (typeof onSearch === "function") {
            onSearch(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Search is already live on input change
	};

	return (
		<section className="py-12 sm:py-16">
			<div className="mx-auto max-w-3xl px-4 flex flex-col items-center text-center gap-4">
				<h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">Find Your Product</h1>
				<p className={`${inter.className} text-sm sm:text-base text-gray-600 leading-relaxed`}>
					Explore a wide range of medical and surgical products supplied in bulk for hospitals and healthcare providers.
				</p>

				<form onSubmit={handleSubmit} className="w-full">
					<div className={`${inter.className} flex items-center rounded-full border border-gray-300 px-4 py-2 shadow-sm gap-2`}>
						<input
							value={query}
							onChange={handleChange}
							type="text"
							placeholder="Search a Product"
							aria-label="Search a product"
							className="flex-1 bg-transparent  text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none"
						/>
						<button
							type="submit"
							aria-label="Search"
							className="flex h-10 w-10 items-center justify-center rounded-full bg-[#63A16A] text-white hover:brightness-105 transition"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="h-5 w-5"
							>
								<circle cx="11" cy="11" r="7" />
								<line x1="16.65" y1="16.65" x2="21" y2="21" />
							</svg>
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
