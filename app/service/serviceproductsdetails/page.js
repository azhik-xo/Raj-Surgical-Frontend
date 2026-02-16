'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const DEFAULT_RENT = {
  perDay: 'Rs 500',
  deposit: 'Rs 2000',
  minDays: '3 days',
  includes: 'setup + pickup'
};

const SERVICES = [
  {
    name: 'Oxygen cilinder',
    image: '/images/Product%20page/Friends.svg',
    description: 'Medical-grade oxygen cylinder available for short-term and long-term rent.',
    details: ['Regulator included', 'Sanitized before delivery', 'Refill support available'],
    rent: DEFAULT_RENT
  },
  {
    name: 'BIG Cot',
    image: '/images/Product%20page/Medvance.svg',
    description: 'Comfortable hospital cot for patient care at home or clinic.',
    details: ['Adjustable height', 'Mattress included', 'Easy to move and lock'],
    rent: DEFAULT_RENT
  },
  {
    name: 'Room',
    image: '/images/Product%20page/Nebula.svg',
    description: 'Private patient room with daily maintenance and basic care support.',
    details: ['Daily cleaning', 'Quiet environment', 'Nursing call support'],
    rent: DEFAULT_RENT
  },
  {
    name: 'guest room',
    image: '/images/Product%20page/UIM.svg',
    description: 'Comfortable visitor room for family stay during patient care.',
    details: ['Daily housekeeping', 'Comfort seating', 'Accessible facilities'],
    rent: DEFAULT_RENT
  },
  {
    name: 'guest room',
    image: '/images/Product%20page/UIM.svg',
    description: 'Comfortable visitor room for family stay during patient care.',
    details: ['Daily housekeeping', 'Comfort seating', 'Accessible facilities'],
    rent: DEFAULT_RENT
  }
];

const ServiceProductsDetailsPage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';

  const service = useMemo(() => {
    return SERVICES.find((item) => item.name.toLowerCase() === name.toLowerCase());
  }, [name]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="px-6 md:px-16 lg:px-28 py-10 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link href="/service" className="text-sm text-gray-600 hover:text-gray-900">
              ← Back to Services
            </Link>
          </div>

          {!service && (
            <div className="rounded-2xl border border-gray-200 p-6 text-center">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Service not found</h1>
              <p className="text-gray-600 mt-2">Please select a service from the list below.</p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                {SERVICES.map((item) => (
                  <Link
                    key={item.name}
                    href={`/service/serviceproductsdetails?name=${encodeURIComponent(item.name)}`}
                    className="px-4 py-2 rounded-full border border-gray-200 hover:border-[#FBC13C]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {service && (
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="relative h-72 md:h-[420px] rounded-2xl border border-gray-200 overflow-hidden bg-gray-50">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">{service.name}</h1>
                <p className="text-gray-600 mt-3">{service.description}</p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-gray-200 p-4">
                    <h2 className="text-base font-semibold text-gray-900">Rent details</h2>
                    <div className="mt-3 text-sm text-gray-700 space-y-2">
                      <p>Per day: {service.rent.perDay}</p>
                      <p>Deposit: {service.rent.deposit}</p>
                      <p>Min days: {service.rent.minDays}</p>
                      <p>Includes: {service.rent.includes}</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 p-4">
                    <h2 className="text-base font-semibold text-gray-900">Service details</h2>
                    <ul className="mt-3 text-sm text-gray-700 space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-[#FBC13C] text-gray-900 font-semibold hover:bg-[#e5af36]"
                  >
                    Enquire now
                  </Link>
                  <Link
                    href="/service"
                    className="px-6 py-3 rounded-full border border-gray-200 text-gray-700 hover:border-[#FBC13C]"
                  >
                    View all services
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ServiceProductsDetailsPage;
