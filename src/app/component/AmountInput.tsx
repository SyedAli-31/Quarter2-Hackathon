"use client"
import { useState } from 'react';

function AmountInput() {
  const [amount, setAmount] = useState(1);

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="flex items-center mt-8">
      <span className="mr-2 text-[#2A254B] text-[16px] font-normal ">Amount:</span>
      <button
        onClick={handleDecrement}
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-2 rounded-l"
      >
        -
      </button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border border-gray-300 px-4 py-2 w-16 text-center"
      />
      <button
        onClick={handleIncrement}
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-2 rounded-r"
      >
        +
      </button>
    </div>
  );
}

export default AmountInput;