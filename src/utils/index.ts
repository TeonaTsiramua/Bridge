export const handleMarkerClick = () => {
  const destinationLat = 41.7851;
  const destinationLng = 44.8226;

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;

  // Open Google Maps in a new tab with directions to the destination
  window.open(googleMapsUrl, '_blank');
};

export const initialFilters = {
  category: [] as string[],
  brand: '',
  model: '',
  year: { min: null as number | null, max: null as number | null },
  mileage: { min: null as number | null, max: null as number | null },
  price: { min: null as number | null, max: null as number | null },
  fuel_type: [] as string[],
  displacement: { min: null as number | null, max: null as number | null },
  engine_output: { min: null as number | null, max: null as number | null },
  cylinders: { min: null as number | null, max: null as number | null },
  transmission: [] as string[],
  wheel_diameter: { min: null as number | null, max: null as number | null },
  gross: { min: null as number | null, max: null as number | null },
  load_capacity: { min: null as number | null, max: null as number | null },
  emission_class: [] as string[],
  axle_configuration: [] as string[],
};
