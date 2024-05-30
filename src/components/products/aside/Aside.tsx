import {
  getfilterAnimation,
  opacityAnimation,
} from '../../../utils/animations';
import { category } from '../../../data/data';
import { DropDown } from '../..';
import { Checkbox, Close, Label, Section, Wrapper } from './styles';

const Aside = ({
  showFilter,
  toggleShowFilter,
}: {
  showFilter: boolean;
  toggleShowFilter: () => void;
}) => {
  const animate = getfilterAnimation(showFilter);

  return (
    <Wrapper {...animate}>
      <Close onClick={toggleShowFilter}>×</Close>

      <Section>
        <DropDown title='Category'>
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

        <DropDown title='Category'>
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

        <DropDown title='Category'>
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

        <DropDown title='კატეგორია' open>
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
      </Section>
    </Wrapper>
  );
};
export default Aside;
