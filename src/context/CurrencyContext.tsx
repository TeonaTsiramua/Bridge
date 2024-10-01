import React, { createContext, useState, useEffect } from 'react';
import { CurrencyContextType } from '../interfaces';

export const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currency, setCurrency] = useState<'USD' | 'GEL'>('USD');
  const [exchangeRate, setExchangeRate] = useState<number>(1); // GEL to USD
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      setLoading(true);
      try {
        // Fetch the exchange rate from USD to GEL
        const response = await fetch(
          'https://api.exchangerate-api.com/v4/latest/USD'
        );
        const data = await response.json();
        setExchangeRate(data.rates.GEL);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch exchange rate');
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);

  const value = { currency, exchangeRate, setCurrency, loading, error };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
