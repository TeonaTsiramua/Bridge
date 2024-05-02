import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useBodyScrollLock, useShowFilter } from '../hooks';
import { Aside, Button, ProductSidebar } from '../components';
import { PMain } from '../styles/MainStyles';

export default function Products() {
  const [showFilter, setShowFilter] = useState(false);

  const isTablet = useMediaQuery({ maxWidth: 900 });

  const toggleShowFilter = () => {
    if (isTablet) {
      setShowFilter(!showFilter);
    }
  };

  useShowFilter(setShowFilter, isTablet);

  useBodyScrollLock(showFilter, isTablet);

  return (
    <PMain>
      {isTablet && <Button onClick={toggleShowFilter} content='Filter' />}
      {showFilter && <Aside toggleShowFilter={toggleShowFilter} />}
      <ProductSidebar />
    </PMain>
  );
}
