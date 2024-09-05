import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const MaterialUISwitch = styled(Switch)(() => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      color: '#fff',
      '& .MuiSwitch-thumb:before': {
        content: "''",
        backgroundColor: 'hsl(var(--clr-red))',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 20 20'><text x='50%' y='53%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='14'>₾</text></svg>")`,
        borderRadius: '999px',
      },
      '& + .MuiSwitch-track': {
        opacity: 0.5,
        backgroundColor: 'hsl(var(--clr-grey))',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: 'hsl(var(--clr-blue))',
    width: 32,
    height: 32,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 20 20'><text x='50%' y='53%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='14'>$</text></svg>")`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: 'hsl(var(--clr-grey))',
    borderRadius: 20 / 2,
  },
}));

export default MaterialUISwitch;
