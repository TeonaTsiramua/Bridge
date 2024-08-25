import { motion } from 'framer-motion';
import { Slider } from '@mui/material';
import { useFilterContext } from '../../../hooks';
import { opacityAnimation } from '../../../utils/animations';
import { SliderWrapper, Value, ValuesDiv } from './styles';

const RangeInput = ({
  name,
  index,
  min,
  max,
}: {
  name: string;
  index: string;
  min: number;
  max: number;
}) => {
  const { filters, handleFilterChange } = useFilterContext();

  const toValue = filters[name]?.min ?? min;
  const fromValue = filters[name]?.max ?? max;

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      handleFilterChange(name, { min: newValue[0], max: newValue[1] });
    }
  };

  return (
    <motion.div {...opacityAnimation()}>
      <ValuesDiv>
        <Value>
          {toValue} {index}
        </Value>
        <Value>
          {fromValue} {index}
        </Value>
      </ValuesDiv>
      <SliderWrapper>
        <Slider
          value={[toValue, fromValue]}
          min={min}
          max={max}
          onChange={handleSliderChange}
          step={1}
          sx={{
            color: 'blue',
            '& .MuiSlider-thumb': {
              backgroundColor: 'hsl(var(--clr-blue))',
            },
            '& .MuiSlider-track': {
              backgroundColor: 'hsl(var(--clr-grey),0.7)',
              borderColor: 'hsl(var(--clr-grey),0.7)',
            },
            '& .MuiSlider-rail': {
              backgroundColor: 'hsl(var(--clr-grey), 0.6)',
            },
          }}
        />
      </SliderWrapper>
    </motion.div>
  );
};

export default RangeInput;
