import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useShowFilter } from '../hooks';
import { Aside, ProductSidebar } from '../components';
import { PMain } from '../styles/MainStyles';

export default function Products() {
  const [showFilter, setShowFilter] = useState(false);

  const isTablet = useMediaQuery({ maxWidth: 800 });

  const toggleShowFilter = () => {
    if (isTablet) {
      setShowFilter(!showFilter);
    }
  };

  useShowFilter(setShowFilter, isTablet);

  return (
    <PMain>
      {isTablet && <button onClick={toggleShowFilter}>Filter</button>}
      {showFilter && <Aside toggleShowFilter={toggleShowFilter} />}
      <ProductSidebar />
    </PMain>
  );
}
