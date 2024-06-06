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
    setQueryParams(new URLSearchParams(location.search));
  }, [location.search]);

  const updateQueryParams = (params: Params) => {
    const newQueryParams = new URLSearchParams(location.search);

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newQueryParams.set(key, value);
      } else {
        newQueryParams.delete(key);
      }
    });

    navigate(`${location.pathname}?${newQueryParams.toString()}`);
  };

  return [queryParams, updateQueryParams];
};

export default useQueryParams;
