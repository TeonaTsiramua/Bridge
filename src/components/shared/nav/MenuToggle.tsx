import { SButton } from './styles';

export const MenuToggle = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg0: boolean) => void;
}) => (
  <SButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
    <svg width='23' height='23' viewBox='0 0 23 23'>
      {/* First Path */}
      <path
        fill='transparent'
        strokeWidth='3'
        stroke={isMenuOpen ? 'hsl(0, 0%, 95%)' : 'hsl(203, 78%, 27%)'}
        strokeLinecap='round'
        d={isMenuOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5'}
        style={{
          transition: 'stroke 0.5s ease-in-out, d 0.5s ease-in-out',
          WebkitTransition: 'stroke 0.5s ease-in-out, d 0.5s ease-in-out',
        }}
      />
      {/* Second Path */}
      <path
        fill='transparent'
        strokeWidth='3'
        stroke='hsl(203, 78%, 27%)'
        strokeLinecap='round'
        opacity={isMenuOpen ? 0 : 1}
        d='M 2 9.423 L 20 9.423'
        style={{
          transition: 'opacity 0.1s ease-in-out',
          WebkitTransition: 'opacity 0.1s ease-in-out',
        }}
      />
      {/* Third Path */}
      <path
        fill='transparent'
        strokeWidth='3'
        stroke={isMenuOpen ? 'hsl(0, 0%, 95%)' : 'hsl(203, 78%, 27%)'}
        strokeLinecap='round'
        d={isMenuOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346'}
        style={{
          transition: 'stroke 0.5s ease-in-out, d 0.5s ease-in-out',
          WebkitTransition: 'stroke 0.5s ease-in-out, d 0.5s ease-in-out',
        }}
      />
    </svg>
  </SButton>
);
