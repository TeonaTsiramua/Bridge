import { motion } from 'framer-motion';

export const handleMarkerClick = () => {
  const destinationLat = 41.7851;
  const destinationLng = 44.8226;

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;

  // Open Google Maps in a new tab with directions to the destination
  window.open(googleMapsUrl, '_blank');
};

// Define a reusable animation configuration object
export const animationConfig = {
  as: motion.div,
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1 },
};
