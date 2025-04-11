import Image from 'next/image'
import React from 'react'

const Qasm = () => {
  return (
    <div className='flex flex-col  justify-center lg:flex-row   '>
       <div className='bg-green-500  lg:w-1/2  '>
       <div className='p-4 text-amber-50 font-serif'>
        <h1 className=' font-bold'>Who we are</h1>
        <h3 className='mt-3 font-semibold'>Akhuwat Foundation Loan</h3>
        <p className='mt-3'>if you are considering applying for a loan from the Akhuwat Foundation, you’re making a smart choice. Akhuwat offers interest- loans (Qarz-e-Hasna) to help individuals meet their financial needs while improving their quality of life. You can apply easily online, with Akhuwat loan options ranging from Rs.500,000 to Rs. 70 million, all from the comfort of your home.Akhuwat provides five types of loans to suit various needs: Loans, Student Loans, Wedding Loans, Business Loans, and Car Loans. Their application process is simple and user- friendly, allowing you to access ethical, interest- support.</p>
        <button className='bg-blue-500 p-3 rounded-xl mt-5'>Read more</button></div>
       </div>


       <div className=''>
        <Image src={'/qasm.png'} alt='qasm' width={500} height={200}/>

       </div>



    </div>
  )
}

export default Qasm