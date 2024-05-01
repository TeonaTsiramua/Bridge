import { useEffect } from 'react';

const useShowFilter = (
  setShowFilter: (value: boolean) => void,
  isTablet: boolean
) => {
  useEffect(() => {
    if (!isTablet) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  }, [setShowFilter, isTablet]);
};

export default useShowFilter;
