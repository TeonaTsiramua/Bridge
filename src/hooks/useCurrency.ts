import { useContext } from 'react';
import { CurrencyContextType } from '../interfaces';
import { CurrencyContext } from '../context/CurrencyContext';

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
