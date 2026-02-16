'use client';

import React, { useMemo, useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const STAR_COUNT = 5;
const filledStar = 'fill-current text-[#f6c343]';
const emptyStar = 'fill-current text-gray-300';

const Star = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`h-6 w-6 ${active ? filledStar : emptyStar}`}
    aria-hidden="true"
  >
    <path d="M12 2.75l2.62 5.31 5.86.85-4.24 4.13 1 5.83L12 16.9l-5.24 2.75 1-5.83-4.24-4.13 5.86-.85L12 2.75z" />
  </svg>
);

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const displayRating = hoverRating || rating;

  const fileLabel = useMemo(() => {
    if (!file) return 'Upload an image (optional)';
    return file.name.length > 32 ? `${file.name.slice(0, 29)}...` : file.name;
  }, [file]);

  const handleStarClick = (value) => setRating(value);

  const handleFileChange = (event) => {
    const selected = event.target.files?.[0];
    setFile(selected || null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Wire this up to your backend endpoint (e.g., POST /api/feedback) with form-data
    // containing name, location, message, rating, and optional image file.
    console.log({ name, location, message, rating, file });
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl">
        <header className="text-center mb-6 md:mb-8">
          <h1 className={`text-3xl md:text-4xl font-semibold text-[#1f2a37]`}>Share Your Feedback</h1>
          <p className={`mt-2 text-sm md:text-base text-gray-600 ${inter.className}`}>
            Tell us about your experience with our products and services
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-300 bg-white shadow-sm px-4 sm:px-8 py-8 flex flex-col gap-6"
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center gap-3">
            <label className="flex h-16 w-16 items-center justify-center rounded-full bg-[#254a33] cursor-pointer" htmlFor="feedback-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 text-white" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 7a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm6-1h-1.17l-.41-1.23A2 2 0 0014.52 3h-5.1a2 2 0 00-1.9 1.32L7.1 6H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2zm-6 8a4 4 0 110-8 4 4 0 010 8z"
                />
              </svg>
            </label>
            <input id="feedback-image" name="image" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            <p className={`text-xs text-gray-600 ${inter.className}`}>{fileLabel}</p>
          </div>

          <div className="flex items-center justify-start gap-2" aria-label="Rating">
            {Array.from({ length: STAR_COUNT }, (_, index) => {
              const value = index + 1;
              const active = value <= displayRating;
              return (
                <button
                  key={value}
                  type="button"
                  onMouseEnter={() => setHoverRating(value)}
                  onMouseLeave={() => setHoverRating(0)}
                  onFocus={() => setHoverRating(value)}
                  onBlur={() => setHoverRating(0)}
                  onClick={() => handleStarClick(value)}
                  className="focus:outline-none"
                  aria-label={`${value} star${value > 1 ? 's' : ''}`}
                >
                  <Star active={active} />
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full rounded-md border border-gray-300 px-3 py-3 text-sm md:text-base focus:border-gray-500 focus:outline-none ${inter.className}`}
            />
            <input
              type="text"
              name="location"
              placeholder="Enter Your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`w-full rounded-md border border-gray-300 px-3 py-3 text-sm md:text-base focus:border-gray-500 focus:outline-none ${inter.className}`}
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell us about product Quality, delivery (or) Service experience"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className={`w-full rounded-md border border-gray-300 px-3 py-3 text-sm md:text-base focus:border-gray-500 focus:outline-none ${inter.className}`}
          />

          <button
            type="submit"
            className={`w-full rounded-md bg-[#1f4d2b] px-4 py-3 text-sm md:text-base font-medium text-white hover:bg-[#193d22] transition-colors ${inter.className}`}
          >
            Submit Feedback
          </button>

          <a
            href="tel:+919600593690"
            className={`w-full rounded-md bg-[#254a33] px-4 py-3 text-sm md:text-base font-medium text-white hover:bg-[#1e3a28] transition-colors text-center flex items-center justify-center gap-2 ${inter.className}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            Call Now
          </a>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;
