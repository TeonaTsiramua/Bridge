export const handleMarkerClick = () => {
  const destinationLat = 41.7851;
  const destinationLng = 44.8226;

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;

  // Open Google Maps in a new tab with directions to the destination
  window.open(googleMapsUrl, '_blank');
};
