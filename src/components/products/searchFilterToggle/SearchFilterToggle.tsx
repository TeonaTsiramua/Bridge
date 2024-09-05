import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useFilterContext } from '../../../hooks';
import SearchIcon from './SearchIcon';
import ToggleButton from './ToggleButton';
import { clickAnimation } from '../../../utils/animations';
import { FilterIcon, Input, Wrapper } from './styles';

const SearchFilterToggle = ({
  toggleView,
  isGridView,
  toggleShowFilter,
}: {
  toggleView: () => void;
  isGridView: boolean;
  toggleShowFilter: () => void;
}) => {
  const isTablet = useMediaQuery({ maxWidth: 900 });
  const { searchText, handleSearchChange } = useFilterContext();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder={t('filter.search') + '...'}
        value={searchText}
        onChange={handleSearchChange}
      />
      {isTablet && (
        <button onClick={toggleShowFilter}>
          <FilterIcon
            {...clickAnimation}
            src="/assets/icons/filter.png"
            alt="filter"
          />
        </button>
      )}
      <SearchIcon />
      <ToggleButton toggleView={toggleView} isGridView={isGridView} />
    </Wrapper>
  );
};
export default SearchFilterToggle;
