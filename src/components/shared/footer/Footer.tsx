import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { StyledFooter, StLink, Logo } from './styles';

import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <div>
        <Link to='/'>
          <Logo src='/assets/main/logo1.svg' alt='logo' />
        </Link>
        <ul>
          <span>{t('nav')}</span>
          <li>
            <StLink to='/'>{t('nav.home')}</StLink>
          </li>
          <li>
            <StLink to='contact'>{t('nav.contact')}</StLink>
          </li>
          <li>
            <StLink to='products'>{t('nav.products')}</StLink>
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
