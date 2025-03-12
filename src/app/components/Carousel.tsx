'use client'
import React, { useEffect, useState } from 'react';

export const PartnersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const partners = [
    { id: 1, logo: '/partner1.png', alt: 'Partner 1' },
    { id: 2, logo: '/partner2.png', alt: 'Partner 2' },
    { id: 3, logo: '/partner3.png', alt: 'Partner 3' },
    { id: 4, logo: '/partner4.png', alt: 'Partner 4' },
    { id: 5, logo: '/partner5.png', alt: 'Partner 5' },
    { id: 6, logo: '/partner6.png', alt: 'Partner 6' },
  ];

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className=" py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold ">
            Our Partners
          </h2>
          <p className="mt-4 text-lg  max-w-2xl mx-auto">
            We are proud to collaborate with these esteemed organizations.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="min-w-full flex items-center justify-center p-8"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className=" rounded-3xl max-h-30 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSlide === index ? 'bg-emerald-400' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};