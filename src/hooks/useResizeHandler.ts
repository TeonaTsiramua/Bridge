import { useEffect } from 'react';

const useResizeHandler = (
  isMenuOpen: boolean,
  setIsMenuOpen: (arg: boolean) => void
) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen, setIsMenuOpen]);
};

export default useResizeHandler;
