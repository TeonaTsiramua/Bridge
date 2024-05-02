import { Checkbox, Close, Div, Label, Section, Wrapper } from './styles';
import { category } from '../../../data/data';
import { DropDown } from '../..';

const Aside = ({ toggleShowFilter }: { toggleShowFilter: () => void }) => {
  return (
    <Wrapper>
      <Close onClick={toggleShowFilter}>×</Close>

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
            <Div key={i.title}>
              <Checkbox type='checkbox' name={i.title} id={i.title} />
              <Label htmlFor={i.title}>{i.title}</Label>
            </Div>
          ))}
        </DropDown>
      </Section>
    </Wrapper>
  );
};
export default Aside;
