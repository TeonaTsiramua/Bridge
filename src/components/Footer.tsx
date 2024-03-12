import { useTranslation } from 'react-i18next';
import { StyledFooter, StLink } from '../styles/FooterStyles';
import logo from '../assets/logo1.svg';
import { Logo } from '../styles/HeaderStyles';
import { IconButton, Stack } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <div>
        <Logo src={logo} alt='' />
        <ul>
          <span>{t('nav')}</span>
          <li>
            <StLink to='/Bridge/'>{t('nav.home')}</StLink>
          </li>
          <li>
            <StLink to='Bridge/contact'>{t('nav.contact')}</StLink>
          </li>
          <li>
            <StLink to='Bridge/products'>{t('nav.products')}</StLink>
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <p>
          {'Copyright © '}
          <StLink to='/'>Bridge </StLink>
          {new Date().getFullYear()}
        </p>
        <Stack
          direction='row'
          justifyContent='left'
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color='primary'
            href=''
            aria-label='Facebook'
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color='secondary'
            href=''
            aria-label='Instagram'
            sx={{ alignSelf: 'center' }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color='error'
            href=''
            aria-label='Youtube'
            sx={{ alignSelf: 'center' }}
          >
            <YoutubeIcon />
          </IconButton>
        </Stack>
      </div>
    </StyledFooter>
  );
}

export default Footer;
