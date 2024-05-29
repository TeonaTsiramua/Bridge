import { motion } from 'framer-motion';

// main animation
export const animationConfig = {
  as: motion.div,
  initial: { opacity: 0, y: 100 }, //maybe 50
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1 },
};

//header animation
const headerVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  closed: { opacity: 0, y: -100, transition: { duration: 0.5 } },
};

export const headerAnimation = {
  as: motion.header,
  variants: headerVariants,
  initial: 'closed',
  exit: 'closed',
};

//navigation animation
export const mobileNavVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
  closed: {
    opacity: 0,
    x: 500,
    transition: { duration: 0.7 },
  },
};

export const desktopNavVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: 0 },
};

export const getNavAnimationConfig = (
  isTablet: boolean,
  isMenuOpen: boolean
) => ({
  as: motion.div,
  initial: 'closed',
  exit: 'closed',
  variants: isTablet ? mobileNavVariants : desktopNavVariants,
  animate: isMenuOpen ? 'open' : 'closed',
});

//overlay animation
const overlayVariants = {
  open: { opacity: 1, display: 'block', transition: { duration: 0.7 } },
  closed: { opacity: 0, display: 'none', transition: { duration: 0.7 } },
};

export const overlayAnimation = {
  as: motion.div,
  variants: overlayVariants,
  initial: 'closed',
  exit: 'closed',
};

//opacity animation
export const opacityAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};

//text animation
export const textAnimation = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

//click animation
export const clickAnimation = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

//form animations
export const recieveAnimation = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 20 },
  transition: { duration: 0.5 },
};

export const sendAnimation = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 80 },
  exit: { opacity: 0 },
  transition: { duration: 2 },
};

//dropdown menu icon animation
const iconVariants = {
  open: { rotate: 180, transition: { duration: 0.3 } },
  closed: { rotate: 0, transition: { duration: 0.3 } },
};

export const arrowAnimation = {
  as: motion.img,
  variants: iconVariants,
};

//img skeleton loading animation
export const loadingAnimation = {
  as: motion.img,
  initial: { opacity: 0 },
  transition: {
    height: { delay: 0, duration: 0.4 },
    opacity: { delay: 0.5, duration: 0.4 },
  },
};
