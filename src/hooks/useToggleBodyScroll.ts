import { useEffect } from 'react';

export default function useToggleBodyScroll(isOpen: boolean) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);
}
