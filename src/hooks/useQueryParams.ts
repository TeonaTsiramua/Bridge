import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Params = {
  [key: string]: string | undefined;
};

const useQueryParams = (): [URLSearchParams, (params: Params) => void] => {
  const location = useLocation();
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useState(
    new URLSearchParams(location.search)
  );

  useEffect(() => {
    // Update queryParams when location.search changes
    setQueryParams(new URLSearchParams(location.search));
  }, [location.search]);

  const updateQueryParams = (params: Params) => {
    // Create a new URLSearchParams instance to avoid directly mutating state
    const newQueryParams = new URLSearchParams(location.search);

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newQueryParams.set(key, value);
      } else {
        newQueryParams.delete(key);
      }
    });

    // Use navigate to update the URL
    navigate(`${location.pathname}?${newQueryParams.toString()}`, {
      replace: true,
    });
  };

  return [queryParams, updateQueryParams];
};

export default useQueryParams;
