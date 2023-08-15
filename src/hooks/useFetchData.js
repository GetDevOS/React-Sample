import { useState } from "react";

// Custom hook for fetching data
export function useFetchData() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = "acfd82d829c449dca5776d7b4219c6db";

  const fetchData = async (baseAmount, base, target) => {
    const amount = baseAmount;
    const baseCurrency = base;
    const targetCurrency = target;
    const url = `https://exchange-rates.abstractapi.com/v1/convert?api_key=${apiKey}&base=${baseCurrency}&target=${targetCurrency}&base_amount=${amount}`;
    console.log("Url", "Feting");
    try {
      setIsLoading(true);
      const response = await fetch(url);

      const jsonData = await response.json();
      setData(jsonData);
      console.log("Url", jsonData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  return { data, isLoading, fetchData };
}
