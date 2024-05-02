import { useEffect } from 'react';

const useBodyScrollLock = (isOpen: boolean, isTablet = true) => {
  useEffect(() => {
    // Add or remove body-scroll-lock class based on the isOpen prop
    if (isOpen && isTablet) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen, isTablet]);
};

export default useBodyScrollLock;
