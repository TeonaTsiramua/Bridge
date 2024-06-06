import { motion } from 'framer-motion';
import { SButton } from './styles';
import { clickAnimation } from '../../../utils/animations';

// Path data for list view SVG
const listViewPath = ` M 6.4140 26.0664 L 21.5781 26.0664 C 24.5547 26.0664 26.0547 24.5664 26.0547 21.4727 L 26.0547 10.9961 C 26.0547 7.9023 24.5547 6.4258 21.5781 6.4258 L 6.4140 6.4258 C 3.4375 6.4258 1.9375 7.9023 1.9375 10.9961 L 1.9375 21.4727 C 1.9375 24.5664 3.4375 26.0664 6.4140 26.0664 Z 
  M 34.4219 26.0664 L 49.5860 26.0664 C 52.5625 26.0664 54.0625 24.5664 54.0625 21.4727 L 54.0625 10.9961 C 54.0625 7.9023 52.5625 6.4258 49.5860 6.4258 L 34.4219 6.4258 C 31.4453 6.4258 29.9453 7.9023 29.9453 10.9961 L 29.9453 21.4727 C 29.9453 24.5664 31.4453 26.0664 34.4219 26.0664 Z 
  M 6.4609 22.7617 C 5.6406 22.7617 5.2421 22.3398 5.2421 21.4727 L 5.2421 10.9961 C 5.2421 10.1523 5.6406 9.7305 6.4609 9.7305 L 21.5312 9.7305 C 22.3281 9.7305 22.7500 10.1523 22.7500 10.9961 L 22.7500 21.4727 C 22.7500 22.3398 22.3281 22.7617 21.5312 22.7617 Z 
  M 34.4921 22.7617 C 33.6484 22.7617 33.2500 22.3398 33.2500 21.4727 L 33.2500 10.9961 C 33.2500 10.1523 33.6484 9.7305 34.4921 9.7305 L 49.5625 9.7305 C 50.3593 9.7305 50.7577 10.1523 50.7577 10.9961 L 50.7577 21.4727 C 50.7577 22.3398 50.3593 22.7617 49.5625 22.7617 Z M 6.4140 49.5742 L 21.5781 49.5742 C 24.5547 49.5742 26.0547 48.0977 26.0547 45.0039 L 26.0547 34.5039 C 26.0547 31.4336 24.5547 29.9336 21.5781 29.9336 L 6.4140 29.9336 C 3.4375 29.9336 1.9375 31.4336 1.9375 34.5039 L 1.9375 45.0039 C 1.9375 48.0977 3.4375 49.5742 6.4140 49.5742 Z 
  M 34.4219 49.5742 L 49.5860 49.5742 C 52.5625 49.5742 54.0625 48.0977 54.0625 45.0039 L 54.0625 34.5039 C 54.0625 31.4336 52.5625 29.9336 49.5860 29.9336 L 34.4219 29.9336 C 31.4453 29.9336 29.9453 31.4336 29.9453 34.5039 L 29.9453 45.0039 C 29.9453 48.0977 31.4453 49.5742 34.4219 49.5742 Z 
  M 6.4609 46.2695 C 5.6406 46.2695 5.2421 45.8477 5.2421 45.0039 L 5.2421 34.5274 C 5.2421 33.6602 5.6406 33.2383 6.4609 33.2383 L 21.5312 33.2383 C 22.3281 33.2383 22.7500 33.6602 22.7500 34.5274 L 22.7500 45.0039 C 22.7500 45.8477 22.3281 46.2695 21.5312 46.2695 Z M 34.4921 46.2695 C 33.6484 46.2695 33.2500 45.8477 33.2500 45.0039 L 33.2500 34.5274 C 33.2500 33.6602 33.6484 33.2383 34.4921 33.2383 L 49.5625 33.2383 C 50.3593 33.2383 50.7577 33.6602 50.7577 34.5274 L 50.7577 45.0039 C 50.7577 45.8477 50.3593 46.2695 49.5625 46.2695 Z
`;

// Path data for grid view SVG
const gridViewPath = `M 8.0663 26.0664 L 47.9334 26.0664 C 51.5195 26.0664 53.3243 24.3086 53.3243 20.6992 L 53.3243 11.7461 C 53.3243 8.1602 51.5195 6.4258 47.9334 6.4258 L 8.0663 6.4258 C 4.4804 6.4258 2.6757 8.1602 2.6757 11.7461 L 2.6757 20.6992 C 2.6757 24.3086 4.4804 26.0664 8.0663 26.0664 Z 
M 8.3476 22.5274 C 6.9648 22.5274 6.2148 21.8008 6.2148 20.3477 L 6.2148 12.1445 C 6.2148 10.6680 6.9648 9.9649 8.3476 9.9649 L 47.6521 9.9649 C 49.0350 9.9649 49.7852 10.6680 49.7852 12.1445 L 49.7852 20.3477 C 49.7852 21.8008 49.0350 22.5274 47.6521 22.5274 Z 
M 8.0663 49.5742 L 47.9334 49.5742 C 51.5195 49.5742 53.3243 47.8399 53.3243 44.2305 L 53.3243 35.2539 C 53.3243 31.6914 51.5195 29.9336 47.9334 29.9336 L 8.0663 29.9336 C 4.4804 29.9336 2.6757 31.6914 2.6757 35.2539 L 2.6757 44.2305 C 2.6757 47.8399 4.4804 49.5742 8.0663 49.5742 Z 
M 8.3476 46.0352 C 6.9648 46.0352 6.2148 45.3086 6.2148 43.8555 L 6.2148 35.6523 C 6.2148 34.1758 6.9648 33.4727 8.3476 33.4727 L 47.6521 33.4727 C 49.0350 33.4727 49.7852 34.1758 49.7852 35.6523 L 49.7852 43.8555 C 49.7852 45.3086 49.0350 46.0352 47.6521 46.0352 Z
`;

const ToggleButton = ({
  isGridView,
  toggleView,
}: {
  isGridView: boolean;
  toggleView: () => void;
}) => {
  return (
    <SButton onClick={toggleView} {...clickAnimation}>
      <svg
        fill='hsl(203, 78%, 27%)'
        viewBox='0 0 56 56'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          <motion.path
            key='toggle'
            d={isGridView ? gridViewPath : listViewPath}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            exit={{ pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </g>
      </svg>
    </SButton>
  );
};

export default ToggleButton;
