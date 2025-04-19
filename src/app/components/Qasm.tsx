import Image from 'next/image'
import React from 'react'

const Qasm = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row bg-white shadow-md rounded-xl overflow-hidden mt-10">
      {/* Left Content */}
      <div className="lg:w-1/2 bg-emerald-600 text-white px-6 py-10 flex flex-col justify-center">
        <h1 className="text-3xl font-bold font-serif mb-4">Who We Are</h1>
        <h3 className="text-xl font-semibold mb-4 font-serif">Akhuwat Foundation Loan</h3>
        <p className="text-md leading-relaxed font-light">
          If you are considering applying for a loan from the Akhuwat Foundation, you’re making a smart choice. Akhuwat offers 
          interest-free loans (Qarz-e-Hasna) to help individuals meet their financial needs while improving their quality of life.
          You can apply easily online, with loan options ranging from Rs. 500,000 to Rs. 70 million, all from the comfort of your home.
          Akhuwat provides five types of loans: Student, Wedding, Business, Car, and General Loans. The application process is simple, ethical, and interest-free.
        </p>
        <button className="mt-6 bg-white text-emerald-700 hover:bg-emerald-100 px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out w-max">
          Read More
        </button>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 h-[300px] lg:h-auto relative">
        <Image 
          src="/qasm.png" 
          alt="Akhuwat Foundation" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-none"
        />
      </div>
    </div>
  )
}

export default Qasm
