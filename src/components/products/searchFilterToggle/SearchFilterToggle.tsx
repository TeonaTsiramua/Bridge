import { useMediaQuery } from 'react-responsive';
import SearchIcon from './SearchIcon';
import ToggleButton from './ToggleButton';
import { FilterIcon, Input, Wrapper } from './styles';
import { clickAnimation } from '../../../utils/animations';

const SearchFilterToggle = ({
  searchText,
  handleSearchChange,
  toggleView,
  isGridView,
  toggleShowFilter,
}: {
  searchText: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleView: () => void;
  isGridView: boolean;
  toggleShowFilter: () => void;
}) => {
  const isTablet = useMediaQuery({ maxWidth: 900 });

  return (
    <Wrapper>
      <Input
        type='text'
        placeholder='Search...'
        value={searchText}
        onChange={handleSearchChange}
      />
      {isTablet && (
        <button onClick={toggleShowFilter}>
          <FilterIcon
            {...clickAnimation}
            src='/assets/icons/filter.png'
            alt='filter'
          />
        </button>
      )}
      <SearchIcon />
      <ToggleButton toggleView={toggleView} isGridView={isGridView} />
    </Wrapper>
  );
};
export default SearchFilterToggle;
