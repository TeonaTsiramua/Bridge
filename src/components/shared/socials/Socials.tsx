import { Props } from '../../../interfaces';

import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Socials = ({ info }: Props) => {
  return (
    <Stack
      direction='row'
      justifyContent='left'
      useFlexGap
      sx={{
        color: 'text.secondary',
      }}
    >
      <IconButton
        href={info.fb}
        aria-label='Facebook'
        sx={{ alignSelf: 'center', color: '#1877F2' }}
      >
        <FacebookIcon sx={{ fontSize: '32px' }} />
      </IconButton>
      <IconButton
        href={info.instagram}
        aria-label='Instagram'
        sx={{ alignSelf: 'center', color: '#833AB4' }}
      >
        <InstagramIcon sx={{ fontSize: '32px' }} />
      </IconButton>
      <IconButton
        href={info.whatsApp}
        aria-label='WhatsApp'
        sx={{ alignSelf: 'center', color: '#25D366' }}
      >
        <WhatsAppIcon sx={{ fontSize: '32px' }} />
      </IconButton>
    </Stack>
  );
};
export default Socials;
