/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { useQueryParams, useSearch } from '.';
import { Filters, Product } from '../interfaces';
import { initialFilters } from '../utils';

const useProductFilter = (products: Product[]) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const { searchText, debouncedSearchText, handleSearchChange } = useSearch();
  const [queryParams, updateQueryParams] = useQueryParams();

  // Sync filters with URL query parameters
  useEffect(() => {
    const newFilters: Filters = { ...initialFilters };

    (Object.keys(initialFilters) as Array<keyof Filters>).forEach(
      (filterName) => {
        const paramValue = queryParams.get(filterName as string);
        if (paramValue) {
          if (Array.isArray(initialFilters[filterName])) {
            newFilters[filterName] = paramValue.split(',') as any;
          } else if (typeof initialFilters[filterName] === 'object') {
            const [min, max] = paramValue.split(',').map(Number);
            newFilters[filterName] = {
              min: min || null,
              max: max || null,
            } as any;
          } else {
            newFilters[filterName] = paramValue as any;
          }
        }
      }
    );

    setFilters(newFilters);
  }, [queryParams]);

  useEffect(() => {
    let filtered = products;

    // Apply search filter using Fuse.js
    if (debouncedSearchText) {
      const fuse = new Fuse(filtered, {
        keys: ['title', 'category', 'brand', 'model', 'description'],
        threshold: 0.3,
      });
      filtered = fuse.search(debouncedSearchText).map((result) => result.item);
    }

    const categories = filters.category || [];
    if (categories.length > 0) {
      filtered = filtered.filter((product) =>
        categories.includes(product.category)
      );
    }

    // Apply brand filter
    if (filters.brand) {
      filtered = filtered.filter((product) => product.brand === filters.brand);
    }

    // Apply model filter
    if (filters.model) {
      filtered = filtered.filter((product) => product.model === filters.model);
    }

    // Apply range filters (year, mileage, price, etc.)
    const applyRangeFilter = (
      productValue: number,
      filter: { min: number | null; max: number | null }
    ) =>
      (filter.min === null || productValue >= filter.min) &&
      (filter.max === null || productValue <= filter.max);

    if (filters.year.min !== null || filters.year.max !== null) {
      filtered = filtered.filter((product) =>
        applyRangeFilter(product.year, filters.year)
      );
    }

    if (filters.mileage.min !== null || filters.mileage.max !== null) {
      filtered = filtered.filter((product) =>
        applyRangeFilter(product.mileage, filters.mileage)
      );
    }

    if (filters.price.min !== null || filters.price.max !== null) {
      filtered = filtered.filter((product) =>
        applyRangeFilter(product.price, filters.price)
      );
    }

    if (
      filters.displacement.min !== null ||
      filters.displacement.max !== null
    ) {
      filtered = filtered.filter((product) =>
        applyRangeFilter(product.displacement, filters.displacement)
      );
    }

    if (
      filters.engine_output.min !== null ||
      filters.engine_output.max !== null
    ) {
      filtered = filtered.filter((product) =>
        applyRangeFilter(product.engine_output, filters.engine_output)
      );
    }

    if (filters.cylinders.min !== null || filters.cylinders.max !== null) {
      filtered = filtered.filter((product) =>
        applyRangeFilter(product.cylinders, filters.cylinders)
      );
    }

    if (
      filters.wheel_diameter.min !== null ||
      filters.wheel_diameter.max !== null
    ) {
      filtered = filtered.filter((product) =>
        applyRangeFilter(product.wheel_diameter, filters.wheel_diameter)
      );
    }

    if (filters.gross.min !== null || filters.gross.max !== null) {
      filtered = filtered.filter((product) =>
        applyRangeFilter(product.gross, filters.gross)
      );
    }

    if (
      filters.load_capacity.min !== null ||
      filters.load_capacity.max !== null
    ) {
      filtered = filtered.filter((product) =>
        applyRangeFilter(product.load_capacity, filters.load_capacity)
      );
    }

    // Apply checkbox filters (fuel_type, transmission, emission_class, axle_configuration)
    if (filters.fuel_type.length > 0) {
      filtered = filtered.filter((product) =>
        filters.fuel_type.includes(product.fuel_type)
      );
    }

    if (filters.transmission.length > 0) {
      filtered = filtered.filter((product) =>
        filters.transmission.includes(product.transmission)
      );
    }

    if (filters.emission_class.length > 0) {
      filtered = filtered.filter((product) =>
        filters.emission_class.includes(product.emission_class)
      );
    }

    if (filters.axle_configuration.length > 0) {
      filtered = filtered.filter((product) =>
        filters.axle_configuration.includes(product.axle_configuration)
      );
    }

    setTimeout(() => {
      setFilteredProducts(filtered);
    }, 100);
  }, [products, debouncedSearchText, filters]);

  const handleFilterChange = (
    filterName: keyof typeof initialFilters,
    value: any
  ) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (filterName === 'brand') {
        updatedFilters.brand = value;
        // Reset model when brand changes
        updatedFilters.model = '';
      } else if (
        filterName === 'category' ||
        filterName === 'transmission' ||
        filterName === 'fuel_type' ||
        filterName === 'emission_class' ||
        filterName === 'axle_configuration'
      ) {
        updatedFilters[filterName] = Array.isArray(value)
          ? value
          : prevFilters[filterName].includes(value)
          ? prevFilters[filterName].filter((item) => item !== value)
          : [...prevFilters[filterName], value];
      } else {
        updatedFilters[filterName] = value;
      }
      // Delay URL update to avoid rendering issues
      setTimeout(() => {
        const filterParams: { [key: string]: string } = {};
        Object.keys(updatedFilters).forEach((key) => {
          const filterValue = updatedFilters[key as keyof Filters];
          let queryParamValue: string;

          if (Array.isArray(filterValue)) {
            queryParamValue = filterValue.join(',');
          } else if (typeof filterValue === 'object' && filterValue !== null) {
            queryParamValue = `${filterValue.min || ''},${
              filterValue.max || ''
            }`;
          } else {
            queryParamValue = filterValue as string;
          }

          filterParams[key] = queryParamValue;
        });

        updateQueryParams(filterParams);
      }, 0);
      return updatedFilters;
    });
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
    updateQueryParams(
      Object.keys(initialFilters).reduce(
        (acc, key) => {
          acc[key] = '';
          return acc;
        },
        {} as {
          [key: string]: string;
        }
      )
    );
  };

  return {
    filteredProducts,
    filters,
    setFilters,
    handleFilterChange,
    handleClearFilters,
    searchText,
    handleSearchChange,
  };
};

export default useProductFilter;
