import { useTranslation } from 'react-i18next';
import { clickAnimation } from '../../../utils/animations';
import { SButton } from './styles';

const ClearFilterButton = ({ onClick }: { onClick: () => void }) => {
  const { t } = useTranslation();
  return (
    <SButton
      onClick={onClick}
      {...clickAnimation}
      aria-label={t('filter.clear')}
    >
      <img src='/assets/icons/clear.png' alt='reset filter' />
    </SButton>
  );
};
export default ClearFilterButton;
