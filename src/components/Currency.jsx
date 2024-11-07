import { useState } from "react";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = import.meta.env.VITE_API_KEY;

const Currency = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    try {
      const response = await axios.get(
        ` ${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency} `
      );
      const result = (response.data.data[toCurrency] * amount).toFixed(2);
      setResult(result);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

  const swap = () => {
    // Swap the currencies
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div>
      <h3 className="text-center text-lg mb-4">Exchange Rate</h3>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex items-center">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="h-11 p-2 rounded-s-lg border border-gray-300 focus:ring-gray-900 focus:border-gray-900 focus:outline-none"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="h-11 p-2 rounded-r-lg border border-gray-300 focus:ring-gray-900 focus:border-gray-900 focus:outline-none"
          >
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
          </select>
        </div>

        <button
          onClick={swap}
          type="button"
          className="w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Swap
        </button>
        <button
          onClick={exchange}
          type="button"
          className="w-full text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Convert
        </button>

        <div className="flex items-center">
          <input
            type="number"
            value={result}
            onChange={(e) => setResult(e.target.value)}
            className="h-11 p-2 rounded-s-lg border border-gray-300  focus:ring-gray-900 focus:border-gray-900 focus:outline-none"
          />
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="h-11 p-2 rounded-r-lg border border-gray-300 focus:ring-gray-900 focus:border-gray-900 focus:outline-none"
          >
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Currency;
