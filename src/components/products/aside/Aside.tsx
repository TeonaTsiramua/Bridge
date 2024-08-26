import { useFilterContext } from '../../../hooks';
import {
  getfilterAnimation,
  opacityAnimation,
} from '../../../utils/animations';
import { category } from '../../../data';
import { Product } from '../../../interfaces';
import { DropDown, RangeInput, Select } from '../..';
import ClearFilterButton from './ClearFilterButton';
import { Checkbox, Close, Label, Section, Wrapper } from './styles';

const Aside = ({
  showFilter,
  toggleShowFilter,
  products,
}: {
  showFilter: boolean;
  toggleShowFilter: () => void;
  products: Product[];
}) => {
  const { filters, handleFilterChange, handleClearFilters } =
    useFilterContext();

  const animate = getfilterAnimation(showFilter);

  const brands = products.map((product) => product.brand);
  const models = products.map((product) => product.model);
  const years = products.map((product) => product.year);
  const displacements = products.map((product) => product.displacement);
  const engineOutputs = products.map((product) => product.engine_output);
  const cylinders = products.map((product) => product.cylinders);
  const wheelDiameters = products.map((product) => product.wheel_diameter);
  const gross = products.map((product) => product.gross);
  const loadCapacities = products.map((product) => product.load_capacity);
  const prices = products.map((product) => product.price);
  const mileages = products.map((product) => product.mileage);
  const fuelTypes = products.map((product) => product.fuel_type);
  const transmissions = products.map((product) => product.transmission);
  const emissionClasses = products.map((product) => product.emission_class);
  const axleConfigurations = products.map(
    (product) => product.axle_configuration
  );

  return (
    <Wrapper {...animate}>
      <Close onClick={toggleShowFilter}>×</Close>

      <Section>
        <ClearFilterButton onClick={handleClearFilters} />

        <DropDown title="Category" open>
          {category.map((item, index) => (
            <Label
              key={item.title}
              htmlFor={item.title}
              {...opacityAnimation(index * 0.1)}
            >
              <Checkbox
                type="checkbox"
                name={item.title}
                id={item.title}
                onChange={(e) =>
                  handleFilterChange(
                    'category',
                    e.target.checked ? item.title : item.title
                  )
                }
                checked={filters.category?.includes(item.title)}
              />
              {item.title}
            </Label>
          ))}
        </DropDown>

        <DropDown title="Brand">
          <Select
            name="brands"
            value={filters.brand || ''}
            onChange={(e) => handleFilterChange('brand', e.target.value)}
            options={[...new Set(brands)]}
          />
        </DropDown>

        <DropDown title="Model">
          <Select
            name="models"
            value={filters.model || ''}
            onChange={(e) => handleFilterChange('model', e.target.value)}
            options={[...new Set(models)]}
          />
        </DropDown>

        <DropDown title="Year">
          <RangeInput
            name="year"
            min={Math.min(...years)}
            max={Math.max(...years)}
            index="year"
          />
        </DropDown>

        <DropDown title="Mileage">
          <RangeInput
            name="mileage"
            min={Math.min(...mileages)}
            max={Math.max(...mileages)}
            index="km"
          />
        </DropDown>

        <DropDown title="Price">
          <RangeInput
            name="price"
            min={Math.min(...prices)}
            max={Math.max(...prices)}
            index="$"
          />
        </DropDown>

        <DropDown title="Fuel Type">
          {fuelTypes.map((item, index) => (
            <Label key={item} htmlFor={item} {...opacityAnimation(index * 0.1)}>
              <Checkbox
                type="checkbox"
                name={item}
                id={item}
                onChange={(e) =>
                  handleFilterChange(
                    'fuel_type',
                    e.target.checked ? item : item
                  )
                }
                checked={filters.fuel_type?.includes(item)}
              />
              {item}
            </Label>
          ))}
        </DropDown>

        <DropDown title="Displacement">
          <RangeInput
            name="displacement"
            min={Math.min(...displacements)}
            max={Math.max(...displacements)}
            index="cm3"
          />
        </DropDown>

        <DropDown title="Engine Output">
          <RangeInput
            name="engine_output"
            min={Math.min(...engineOutputs)}
            max={Math.max(...engineOutputs)}
            index="hp"
          />
        </DropDown>

        <DropDown title="Cylinders">
          <RangeInput
            name="cylinders"
            min={Math.min(...cylinders)}
            max={Math.max(...cylinders)}
            index="cylinders"
          />
        </DropDown>

        <DropDown title="Transmission">
          {transmissions.map((item, index) => (
            <Label key={item} htmlFor={item} {...opacityAnimation(index * 0.1)}>
              <Checkbox
                type="checkbox"
                name={item}
                id={item}
                onChange={(e) =>
                  handleFilterChange(
                    'transmission',
                    e.target.checked ? item : item
                  )
                }
                checked={filters.transmission?.includes(item)}
              />
              {item}
            </Label>
          ))}
        </DropDown>

        <DropDown title="Wheel Diameter">
          <RangeInput
            name="wheel_diameter"
            min={Math.min(...wheelDiameters)}
            max={Math.max(...wheelDiameters)}
            index="inch"
          />
        </DropDown>

        <DropDown title="Gross">
          <RangeInput
            name="gross"
            min={Math.min(...gross)}
            max={Math.max(...gross)}
            index="kg"
          />
        </DropDown>

        <DropDown title="Load Capacity">
          <RangeInput
            name="load_capacity"
            min={Math.min(...loadCapacities)}
            max={Math.max(...loadCapacities)}
            index="kg"
          />
        </DropDown>

        <DropDown title="Emission Class">
          {emissionClasses.map((item, index) => (
            <Label key={item} htmlFor={item} {...opacityAnimation(index * 0.1)}>
              <Checkbox
                type="checkbox"
                name={item}
                id={item}
                onChange={(e) =>
                  handleFilterChange(
                    'emission_class',
                    e.target.checked ? item : item
                  )
                }
                checked={filters.emission_class?.includes(item)}
              />
              {item}
            </Label>
          ))}
        </DropDown>

        <DropDown title="Axle Configuration">
          {axleConfigurations.map((item, index) => (
            <Label key={item} htmlFor={item} {...opacityAnimation(index * 0.1)}>
              <Checkbox
                type="checkbox"
                name={item}
                id={item}
                onChange={(e) =>
                  handleFilterChange(
                    'axle_configuration',
                    e.target.checked ? item : item
                  )
                }
                checked={filters.axle_configuration?.includes(item)}
              />
              {item}
            </Label>
          ))}
        </DropDown>
      </Section>
    </Wrapper>
  );
};

export default Aside;
