import { useState, useEffect } from 'react';

const useExchangeRate = () => {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          'https://v6.exchangerate-api.com/v6/34151c96e9f8593818901a87/latest/USD'
        );
        const data = await response.json();
        setExchangeRate(data.conversion_rates.GEL);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);
  return { exchangeRate, loading };
};

export default useExchangeRate;
