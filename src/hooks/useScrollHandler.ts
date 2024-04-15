import { useEffect, useState } from 'react';

export default function useScrollHandler() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;
      const isTop = currentScrollPos === 0;
      const isBelowThreshold = currentScrollPos < 50;

      setVisible(isTop || isBelowThreshold || !isScrolledDown);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return visible;
}
