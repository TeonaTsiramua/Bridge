import { useTranslation } from 'react-i18next';
import { useFilterContext } from '../../../hooks';
import {
  getfilterAnimation,
  opacityAnimation,
} from '../../../utils/animations';
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
  const { t } = useTranslation();
  const animate = getfilterAnimation(showFilter);

  const getUniqueStringValues = (key: keyof Product) => [
    ...new Set(products.map((product) => String(product[key]))),
  ];

  // Derive filter values
  const brands = getUniqueStringValues('brand');
  const models = getUniqueStringValues('model').filter((model) =>
    filters.brand
      ? products.some(
          (product) =>
            product.brand === filters.brand && product.model === model
        )
      : true
  );
  const category = getUniqueStringValues('category');
  const years = getUniqueStringValues('year').map(Number);
  const displacements = getUniqueStringValues('displacement').map(Number);
  const engineOutputs = getUniqueStringValues('engine_output').map(Number);
  const cylinders = getUniqueStringValues('cylinders').map(Number);
  const wheelDiameters = getUniqueStringValues('wheel_diameter').map(Number);
  const gross = getUniqueStringValues('gross').map(Number);
  const loadCapacities = getUniqueStringValues('load_capacity').map(Number);
  const prices = getUniqueStringValues('price').map(Number);
  const mileages = getUniqueStringValues('mileage').map(Number);
  const fuelTypes = getUniqueStringValues('fuel_type');
  const transmissions = getUniqueStringValues('transmission');
  const emissionClasses = getUniqueStringValues('emission_class');
  const axleConfigurations = getUniqueStringValues('axle_configuration');

  return (
    <Wrapper {...animate}>
      <Close onClick={toggleShowFilter}>×</Close>

      <Section>
        <ClearFilterButton onClick={handleClearFilters} />

        <DropDown title={t('filter.category')} open>
          {category.map((item, index) => (
            <Label key={item} htmlFor={item} {...opacityAnimation(index * 0.1)}>
              <Checkbox
                type="checkbox"
                name={item}
                id={item}
                onChange={(e) =>
                  handleFilterChange('category', e.target.checked ? item : item)
                }
                checked={filters.category?.includes(item)}
              />
              {t(`category.${item}`)}
            </Label>
          ))}
        </DropDown>

        <DropDown title={t('filter.brand')}>
          <Select
            name="brands"
            value={filters.brand || ''}
            onChange={(e) => {
              const selectedBrand = e.target.value;
              handleFilterChange('brand', selectedBrand);
              // Reset model filter only when brand changes
              handleFilterChange('model', '');
            }}
            options={brands}
          />
        </DropDown>

        <DropDown title={t('filter.model')}>
          <Select
            name="models"
            value={filters.model || ''}
            onChange={(e) => handleFilterChange('model', e.target.value)}
            options={models}
            disabled={!filters.brand}
          />
        </DropDown>

        <DropDown title={t('filter.year')}>
          <RangeInput
            name="year"
            min={Math.min(...years)}
            max={Math.max(...years)}
            index="year"
          />
        </DropDown>

        <DropDown title={t('filter.mileage')}>
          <RangeInput
            name="mileage"
            min={Math.min(...mileages)}
            max={Math.max(...mileages)}
            index="km"
          />
        </DropDown>

        <DropDown title={t('filter.price')}>
          <RangeInput
            name="price"
            min={Math.min(...prices)}
            max={Math.max(...prices)}
            index="$"
          />
        </DropDown>

        <DropDown title={t('filter.fuel')}>
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
              {t(`${item}`)}
            </Label>
          ))}
        </DropDown>

        <DropDown title={t('filter.displacement')}>
          <RangeInput
            name="displacement"
            min={Math.min(...displacements)}
            max={Math.max(...displacements)}
            index="cm3"
          />
        </DropDown>

        <DropDown title={t('filter.engineOutput')}>
          <RangeInput
            name="engine_output"
            min={Math.min(...engineOutputs)}
            max={Math.max(...engineOutputs)}
            index="hp"
          />
        </DropDown>

        <DropDown title={t('filter.cylinders')}>
          <RangeInput
            name="cylinders"
            min={Math.min(...cylinders)}
            max={Math.max(...cylinders)}
            index=""
          />
        </DropDown>

        <DropDown title={t('filter.transmission')}>
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
              {item === 'სხვა' ? t(`${item}`) : item}
            </Label>
          ))}
        </DropDown>

        <DropDown title={t('filter.wheel')}>
          <RangeInput
            name="wheel_diameter"
            min={Math.min(...wheelDiameters)}
            max={Math.max(...wheelDiameters)}
            index=""
          />
        </DropDown>

        <DropDown title={t('filter.gross')}>
          <RangeInput
            name="gross"
            min={Math.min(...gross)}
            max={Math.max(...gross)}
            index="kg"
          />
        </DropDown>

        <DropDown title={t('filter.load')}>
          <RangeInput
            name="load_capacity"
            min={Math.min(...loadCapacities)}
            max={Math.max(...loadCapacities)}
            index="kg"
          />
        </DropDown>

        <DropDown title={t('filter.emission')}>
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

        <DropDown title={t('filter.axle')}>
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
              {item === 'სხვა' ? t(`${item}`) : item}
            </Label>
          ))}
        </DropDown>
      </Section>
    </Wrapper>
  );
};

export default Aside;
