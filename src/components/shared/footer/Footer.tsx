import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { StyledFooter, StLink, Logo, Wrapper, Hr, Ul, P, H3 } from './styles';

import { navData } from '../../../data/data';
import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <Wrapper>
        <Link to='/'>
          <Logo src='/assets/main/logo1.svg' alt='logo' />
        </Link>
        <Ul>
          <H3>{t('nav')}</H3>
          {navData.map((item, index) => (
            <li key={index}>
              <StLink to={item.path}>{t(`nav.${item.text}`)}</StLink>
            </li>
          ))}
        </Ul>
      </Wrapper>

      <Hr />

      <Wrapper>
        <P>
          {'Copyright © '}
          <StLink to='/'>Bridge </StLink>
          {new Date().getFullYear()}
        </P>
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
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
