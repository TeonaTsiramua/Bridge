import { useMediaQuery } from 'react-responsive';
import { Button } from '../..';
import SearchIcon from './SearchIcon';
import ToggleButton from './ToggleButton';
import { Input, Wrapper } from './styles';

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
      {isTablet && <Button onClick={toggleShowFilter} content='Filter' />}
      <SearchIcon />
      <ToggleButton toggleView={toggleView} isGridView={isGridView} />
    </Wrapper>
  );
};
export default SearchFilterToggle;
