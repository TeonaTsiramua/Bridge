import React from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface SelectProps {
  name: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: string[];
}

const MUISelect: React.FC<SelectProps> = ({
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <Select
      name={name}
      onChange={onChange}
      value={value || ''}
      displayEmpty
      inputProps={{ 'aria-label': 'Select' }}
      fullWidth
      disabled={options.length === 0}
      sx={{
        color: 'hsl(var(--clr-dark))',
        border: `1px solid hsl(var(--clr-dark))`,
        borderRadius: '0.25rem',
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
        value=""
        sx={{
          color: 'hsl(var(--clr-dark))',

          '&.Mui-selected': {
            color: 'hsl(var(--clr-blue))',
          },
        }}
      >
        All
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
  );
};

export default MUISelect;
