/* eslint-disable @typescript-eslint/no-explicit-any */

interface ContactInformation {
  email: string;
  phone: string;
  fb: string;
  instagram: string;
  whatsApp: string;
  address: string;
  destinationLat: number;
  destinationLng: number;
}

export interface Props {
  info: ContactInformation;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  fuel_type: string;
  displacement: number;
  engine_output: number;
  cylinders: number;
  transmission: string;
  wheel_diameter: number;
  gross: number;
  load_capacity: number;
  emission_class: string;
  axle_configuration: string;
  description: string;
  images: string[];
}

export interface FilterState {
  category: string[];
  brand: string | null;
  model: string | null;
  year: [number, number];
  mileage: [number, number];
  price: [number, number];
  fuel_type: string[];
  displacement: [number, number];
  engine_output: [number, number];
  cylinders: [number, number];
  transmission: string[];
  wheel_diameter: [number, number];
  gross: [number, number];
  load_capacity: [number, number];
  emission_class: string[];
  axle_configuration: string[];
}

export type Filters = {
  category: string[];
  brand: string;
  model: string;
  year: { min: number | null; max: number | null };
  mileage: { min: number | null; max: number | null };
  price: { min: number | null; max: number | null };
  displacement: { min: number | null; max: number | null };
  engine_output: { min: number | null; max: number | null };
  cylinders: { min: number | null; max: number | null };
  wheel_diameter: { min: number | null; max: number | null };
  gross: { min: number | null; max: number | null };
  load_capacity: { min: number | null; max: number | null };
  fuel_type: string[];
  transmission: string[];
  emission_class: string[];
  axle_configuration: string[];
};

export const initialFilters: Filters = {
  category: [],
  brand: '',
  model: '',
  year: { min: null, max: null },
  mileage: { min: null, max: null },
  price: { min: null, max: null },
  displacement: { min: null, max: null },
  engine_output: { min: null, max: null },
  cylinders: { min: null, max: null },
  wheel_diameter: { min: null, max: null },
  gross: { min: null, max: null },
  load_capacity: { min: null, max: null },
  fuel_type: [],
  transmission: [],
  emission_class: [],
  axle_configuration: [],
};

export interface FilterContextType {
  filters: any;
  setFilters: (filters: any) => void;
  filteredProducts: Product[];
  handleFilterChange: (filterName: any, value: any) => void;
  handleClearFilters: () => void;
  searchText: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
