import React from 'react';

const LoanTable = () => {
  const loans = [
    { amount: '50,000', period: '01 YEAR', emi: '4,170' },
    { amount: '100,000', period: '01 YEAR', emi: '8,335' },
    { amount: '500,000', period: '05 YEARS', emi: '8,335' },
    { amount: '1,000,000', period: '10 YEARS', emi: '8,335' },
    { amount: '1,500,000', period: '10 YEARS', emi: '12,500' },
    { amount: '2,000,000', period: '10 YEARS', emi: '16,670' },
    { amount: '3,000,000', period: '10 YEARS', emi: '25,000' },
    { amount: '5,000,000', period: '15 YEARS', emi: '27,780' },
  ];

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center mt-4 text-green-600">Loan Installment Plan</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-200 text-black">
          <tr>
            <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Loan Amount
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Time Period
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Monthly Installment
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loans.map((loan, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {loan.amount}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                {loan.period}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                {loan.emi} <span className="text-gray-500">EMI</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanTable;