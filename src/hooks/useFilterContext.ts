import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import { FilterContextType } from '../interfaces';

const useFilterContext = (): FilterContextType => {
  const contextValue = useContext(FilterContext);
  if (contextValue === undefined) {
    throw new Error('FilterContext value is undefined');
  }
  return contextValue;
};

export default useFilterContext;
