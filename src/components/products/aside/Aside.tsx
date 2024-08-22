import {
  getfilterAnimation,
  opacityAnimation,
} from '../../../utils/animations';
import { category } from '../../../data/data';
import { Button, DropDown } from '../..';
import { Checkbox, Close, Label, Section, Wrapper } from './styles';

const Aside = ({
  showFilter,
  toggleShowFilter,
  filters,
  onFilterChange,
  handleClearFilters,
}: {
  showFilter: boolean;
  toggleShowFilter: () => void;
  filters: {
    albumId: number | null;
    id: number | null;
  };
  onFilterChange: (filterName: string, value: number | null) => void;
  handleClearFilters: () => void;
}) => {
  const animate = getfilterAnimation(showFilter);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange(name, value ? parseInt(value, 10) : null);
  };

  return (
    <Wrapper {...animate}>
      <Close onClick={toggleShowFilter}>×</Close>

      <Section>
        <DropDown title='Album ID'>
          <input
            type='range'
            name='albumId'
            value={filters.albumId || ''}
            onChange={handleInputChange}
            {...opacityAnimation()}
          />
          <p>{filters.albumId}</p>
        </DropDown>

        <DropDown title='ID'>
          <input
            type='number'
            name='id'
            value={filters.id || ''}
            onChange={handleInputChange}
            placeholder='Enter ID'
          />
        </DropDown>

        <DropDown title='Category' open>
          {category.map((i, index) => (
            <Label
              key={i.title}
              htmlFor={i.title}
              {...opacityAnimation(index * 0.1)}
            >
              <Checkbox type='checkbox' name={i.title} id={i.title} />
              {i.title}
            </Label>
          ))}
        </DropDown>

        <DropDown title='Other Filters'>
          {/* Example filters, replace with your actual filters */}
          <Label htmlFor='direct' {...opacityAnimation()}>
            <Checkbox type='checkbox' name='direct' id='direct' />
            Direct
          </Label>
          <Label htmlFor='oneStop' {...opacityAnimation(0.1)}>
            <Checkbox type='checkbox' name='oneStop' id='oneStop' />
            One stop
          </Label>
          <Label htmlFor='twoStop' {...opacityAnimation(0.2)}>
            <Checkbox type='checkbox' name='twoStop' id='twoStop' />
            Two stops
          </Label>
        </DropDown>
        <Button onClick={handleClearFilters} content='Clear Filters' />
      </Section>
    </Wrapper>
  );
};

export default Aside;
