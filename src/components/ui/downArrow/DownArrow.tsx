import { motion } from 'framer-motion';
import { Icon } from './styles';

const DownArrow = ({ showSection }: { showSection: boolean }) => {
  const iconVariants = {
    open: { rotate: 180, transition: { duration: 0.3 } },
    closed: { rotate: 0, transition: { duration: 0.3 } },
  };

  return (
    <Icon
      as={motion.img}
      src='/assets/arrow/down.png'
      alt='open'
      animate={showSection ? 'open' : 'closed'}
      variants={iconVariants}
    />
  );
};
export default DownArrow;
