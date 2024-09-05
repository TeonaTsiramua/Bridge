import React from 'react';
import { useCurrency } from '../../../hooks';

const CurrencySwitcher: React.FC = () => {
  const { currency, setCurrency, loading, error } = useCurrency();

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCurrency = event.target.value as 'USD' | 'GEL';
    setCurrency(newCurrency);
  };

  return (
    <div>
      <label htmlFor="currency">Choose a currency:</label>
      <select
        id="currency"
        value={currency}
        onChange={handleCurrencyChange}
        disabled={loading}
      >
        <option value="USD">USD</option>
        <option value="GEL">GEL</option>
      </select>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CurrencySwitcher;
