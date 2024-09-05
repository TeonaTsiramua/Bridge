import { clickAnimation } from '../../../utils/animations';
import { SButton } from './styles';

const ClearFilterButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <SButton onClick={onClick} {...clickAnimation}>
      <img src="/assets/icons/clear.png" alt="reset filter" />
    </SButton>
  );
};
export default ClearFilterButton;
