import { motion, SVGMotionProps } from 'framer-motion';
import { SButton } from './styles';

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(203, 78%, 27%)'
    strokeLinecap='round'
    transition={{
      stroke: { duration: 0.7 },
    }}
    {...props}
  />
);

export const MenuToggle = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg0: boolean) => void;
}) => {
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <SButton onClick={handleToggle}>
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <Path
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={{
            closed: {
              d: 'M 2 2.5 L 20 2.5',
            },
            open: {
              d: 'M 3 16.5 L 17 2.5',
              stroke: 'hsl(0, 0%, 95%)',
            },
          }}
          initial={{ d: 'M 2 2.5 L 20 2.5' }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          initial={{ opacity: 1 }}
        />
        <Path
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={{
            closed: {
              d: 'M 2 16.346 L 20 16.346',
            },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(0, 0%, 95%)' },
          }}
          initial={{ d: 'M 2 16.346 L 20 16.346' }}
        />
      </svg>
    </SButton>
  );
};