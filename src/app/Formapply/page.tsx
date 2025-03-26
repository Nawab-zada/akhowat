"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    cnicNumber: "",
    mobileNumber: "",
    loanType: "",
    loanAmount: "",
    profilePicture: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e:any) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === 'file' ? files[0] : value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 3000));

    const response = await fetch("/api/Sendapplication", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Application sent successfully!");
    } else {
      alert("Failed to send application. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 mt-10 w-full rounded-lg shadow-md max-w-2xl mx-auto border border-gray-500"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold mb-4 text-green-500"
      >
        Apply For Akhuwat Loan programme
      </motion.h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
       
           <h1>Full Name</h1>
        <motion.input 
                    
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
            <h2>CNIC Number</h2>
        <motion.input
         
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          type="text"
          name="cnicNumber"
          placeholder="CNIC Number"
          onChange={handleChange}
          required
          className="p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
            <h3>Mobile Number</h3>
        <motion.input 
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          type="tel"
          name="mobileNumber"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
          className="p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <h4>Salect laon type</h4>

        <motion.select
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          name="loanType"
          onChange={handleChange}
          required
          className="p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          <option value="" disabled selected>--Select--</option>
          <option value="personal">Personal Loan</option>
          <option value="business">Business Loan</option>
          <option value="home">Home Loan</option>
          <option value="car">Car Loan</option>
          <option value="education">education loan</option>
        </motion.select>
          <h4>Select laon amount</h4>
        <motion.select
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          name="loanAmount"
          onChange={handleChange}
          required
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          <option value="" disabled selected>--Select--</option>
          <option value="50000">50,000</option>
          <option value="100000">1,00,000</option>
          <option value="200000">2,00,000</option>
          <option value="500000">5,00,000</option>
          <option value="1000000">10,00,000</option>
          <option value="2000000">20,00,000</option>
          <option value="3000000">30,00,000</option>
          <option value="4000000">40,00,000</option>
          <option value="5000000">50,00,000</option>
        </motion.select>

        <motion.button
          whileHover={{ scale: isLoading ? 1 : 1.02 }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
          type="submit"
          disabled={isLoading}
          className={`bg-blue-600 text-black p-3 rounded-md transition-colors duration-200 font-semibold flex items-center justify-center gap-2 ${
            isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {isLoading ? "Submitting..." : "Submit Application"}
        </motion.button>
      </form>
    </motion.div>
  );
}
