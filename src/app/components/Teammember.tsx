

import React from 'react';
import Image from 'next/image';

export const TeamMember = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row items-center lg:items-start p-8 max-w-4xl mx-auto font-serif">
      {/* Image */}
      <div className="relative h-64 w-64 lg:h-80 lg:w-80 rounded-full overflow-hidden border-4 border-emerald-100 flex-shrink-0">
        <Image
          src="/News.png" // Replace with the actual image path
          alt="Muhammad Saqib"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      {/* Text Content */}
      <div className="lg:ml-8 mt-4 lg:mt-0 text-center lg:text-left">
        {/* Name */}
        <h3 className="text-3xl font-bold text-gray-800">Muhammad Saqib</h3>

        {/* Description */}
        <p className="text-gray-600 mt-4 max-w-2xl mb-5">
          Muhammad Saqib is a visionary leader and a driving force behind Akhuwat's mission to provide interest-free loans to those in need. With a deep commitment to ethical finance and community development, he has played a pivotal role in transforming the lives of millions across Pakistan. His dedication to empowering individuals and communities through sustainable financial solutions has made Akhuwat a beacon of hope for countless families.
        </p>

        {/* Social Media Links (Optional) */}
       
      </div>
    </div>
  );
};