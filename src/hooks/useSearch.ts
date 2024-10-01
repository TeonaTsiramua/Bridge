import { useEffect, useState } from 'react';
import { useDebounce, useQueryParams } from '.';

const useSearch = (initialText = '') => {
  const [searchText, setSearchText] = useState(initialText);
  const [queryParams, updateQueryParams] = useQueryParams();
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    const querySearch = queryParams.get('search');
    setSearchText(querySearch || '');
  }, [queryParams]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    updateQueryParams({ page: '1', search: value });
  };

  return { searchText, setSearchText, debouncedSearchText, handleSearchChange };
};

export default useSearch;
