import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../assets/logo2.svg';
import { Logo, StLink, StyledLink } from '../styles/HeaderStyles';
import LanguageSwitcher from './LanguageSwitcher';

function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBar
        position='fixed'
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar
            variant='regular'
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                ml: '-18px',
                px: 0,
              }}
            >
              <Logo src={logo} alt='logo of bridge' />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <StyledLink to='/'>{t('nav.home')}</StyledLink>
                </MenuItem>

                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <StyledLink to='/contact'>{t('nav.contact')}</StyledLink>
                </MenuItem>
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <StyledLink to='/products'>{t('nav.products')}</StyledLink>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                p: 1,
                alignItems: 'center',
              }}
            >
              <LanguageSwitcher />
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant='text'
                color='primary'
                aria-label='menu'
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '55dvw',
                    backgroundColor: 'background.paper',
                    p: 5,
                    flexGrow: 1,
                  }}
                >
                  <StLink to='/'>
                    <MenuItem>{t('nav.home')}</MenuItem>
                  </StLink>
                  <StLink to='/contact'>
                    <MenuItem>{t('nav.contact')}</MenuItem>
                  </StLink>
                  <StLink to='/products'>
                    <MenuItem>{t('nav.products')}</MenuItem>
                  </StLink>
                  <Divider />
                  <Box
                    sx={{
                      p: 1,
                    }}
                  >
                    <LanguageSwitcher />
                  </Box>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
