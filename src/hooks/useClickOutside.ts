import { useEffect } from 'react';

export default function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
  mobileMenuIconRef?: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !mobileMenuIconRef?.current?.contains(event.target as Node)
      ) {
        handler();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, mobileMenuIconRef, handler]);
}
