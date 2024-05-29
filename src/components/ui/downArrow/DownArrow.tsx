import { arrowAnimation } from '../../../utils/animations';
import { Icon } from './styles';

const DownArrow = ({ showSection }: { showSection: boolean }) => {
  return (
    <Icon
      {...arrowAnimation}
      animate={showSection ? 'open' : 'closed'}
      src='/assets/arrow/down.png'
      alt={showSection ? 'open' : 'close'}
    />
  );
};
export default DownArrow;
