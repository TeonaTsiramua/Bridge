import { useEffect, useState } from 'react';
import { useQueryParams } from '.';

const usePagination = (initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [queryParams, updateQueryParams] = useQueryParams();

  useEffect(() => {
    const queryPage = queryParams.get('page');
    setCurrentPage(queryPage ? parseInt(queryPage) : initialPage);
  }, [queryParams, initialPage]);

  const handlePageChange = (_: unknown, page: number) => {
    setCurrentPage(page);
    updateQueryParams({ page: page.toString() });
  };

  return { currentPage, handlePageChange };
};

export default usePagination;
