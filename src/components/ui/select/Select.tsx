import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { opacityAnimation } from '../../../utils/animations';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface SelectProps {
  name: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: string[];
  disabled?: boolean;
}

const MUISelect: React.FC<SelectProps> = ({
  name,
  value,
  onChange,
  options,
  disabled,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div {...opacityAnimation()}>
      <Select
        name={name}
        onChange={onChange}
        value={value || ''}
        displayEmpty
        inputProps={{ 'aria-label': 'Select' }}
        fullWidth
        disabled={options.length === 0 || disabled}
        MenuProps={{
          disableScrollLock: true,
        }}
        sx={{
          color: 'hsl(var(--clr-dark),0.9)',
          border: `1px solid hsl(var(--clr-grey))`,
          borderRadius: '0.25rem',
          fontFamily: 'inherit',
          '&.Mui-focused': {
            borderColor: 'hsl(var(--clr-blue))',
            color: 'hsl(var(--clr-blue))',

            '& .MuiSelect-icon': {
              color: 'hsl(var(--clr-blue))',
            },
          },
          '& .MuiSelect-select': {
            padding: '8px 14px',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& .MuiSelect-icon': {
            color: 'hsl(var(--clr-dark))',
          },
        }}
      >
        <MenuItem
          value=''
          sx={{
            color: 'hsl(var(--clr-dark))',

            '&.Mui-selected': {
              color: 'hsl(var(--clr-blue))',
            },
          }}
        >
          {t('filter.all')}
        </MenuItem>
        {options.map((option) => (
          <MenuItem
            key={option}
            value={option}
            sx={{
              color: 'hsl(var(--clr-dark))',

              '&.Mui-selected': {
                color: 'hsl(var(--clr-blue))',
              },
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </motion.div>
  );
};

export default MUISelect;
