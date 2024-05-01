import { useMediaQuery } from 'react-responsive';

import { Checkbox, Label, Section, Wrapper } from './style';
import { category } from '../../../data/data';
import { DropDown } from '../..';

const Aside = ({ toggleShowFilter }: { toggleShowFilter: () => void }) => {
  const isTablet = useMediaQuery({ maxWidth: 800 });

  return (
    <Wrapper>
      {isTablet && <button onClick={toggleShowFilter}>⇦ Filter</button>}

      <Section>
        <DropDown title='Category'>
          <Label htmlFor='direct'>
            <Checkbox type='checkbox' name='direct' id='direct' />
            Direct
          </Label>
          <Label htmlFor='oneStop'>
            <Checkbox type='checkbox' name='oneStop' id='oneStop' />
            One stop
          </Label>
          <Label htmlFor='twoStop'>
            <Checkbox type='checkbox' name='twoStop' id='twoStop' />
            Two stops
          </Label>
        </DropDown>

        <DropDown title='Category'>
          {category.map((i) => (
            <Label key={i.title} htmlFor={i.title}>
              <Checkbox type='checkbox' name={i.title} id={i.title} />
              {i.title}
            </Label>
          ))}
        </DropDown>

        <DropDown title='Category'>
          {category.map((i) => (
            <Label key={i.title} htmlFor={i.title}>
              <Checkbox type='checkbox' name={i.title} id={i.title} />
              {i.title}
            </Label>
          ))}
        </DropDown>

        <DropDown title='კატეგორია' open>
          {category.map((i) => (
            <Label key={i.title} htmlFor={i.title}>
              <Checkbox type='checkbox' name={i.title} id={i.title} />
              {i.title}
            </Label>
          ))}
        </DropDown>
      </Section>
    </Wrapper>
  );
};
export default Aside;
