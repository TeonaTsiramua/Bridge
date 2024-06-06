import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import useBodyScrollLock from './useBodyScrollLock';

const useShowFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const isTablet = useMediaQuery({ maxWidth: 900 });

  const toggleShowFilter = () => {
    if (isTablet) {
      setShowFilter(!showFilter);
    }
  };

  useEffect(() => {
    if (!isTablet) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  }, [setShowFilter, isTablet]);

  useBodyScrollLock(showFilter, isTablet);

  return { showFilter, toggleShowFilter };
};

export default useShowFilter;
