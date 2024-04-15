import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';

import { useClickOutside } from '../../../hooks/useClickOutside';
import { useToggleBodyScroll } from '../../../hooks/useToggleBodyScroll';

import { MobileMenuIcon, NavLi, NavUl, Navigation, StyledLink } from './styles';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLUListElement>(null);
  const mobileMenuIconRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { t } = useTranslation();

  // Custom hook to handle click outside event
  useClickOutside(menuRef, () => setIsMenuOpen(false));

  // Custom hook to toggle body scrolling
  useToggleBodyScroll(isMenuOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const variants = isMobile
    ? {
        open: { opacity: 1, x: 0, transition: { duration: 0.7 } },
        closed: { opacity: 0, x: 500, transition: { duration: 0.7 } },
      }
    : {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 1, x: 0 },
      };

  const iconVariants = {
    open: { scale: 0.9, rotate: 90, transition: { duration: 0.7 } },
    closed: { scale: 1, rotate: 0, transition: { duration: 0.7 } },
  };

  return (
    <Navigation>
      <MobileMenuIcon
        as={motion.div}
        isOpen={isMenuOpen}
        onClick={toggleMenu}
        ref={mobileMenuIconRef}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={iconVariants}
      >
        {isMenuOpen ? '×' : '☰'}
      </MobileMenuIcon>
      <>
        <NavUl
          as={motion.ul}
          ref={menuRef}
          variants={variants}
          initial='closed'
          animate={isMenuOpen ? 'open' : 'closed'}
          exit='closed'
        >
          <StyledLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={closeMenu}
            to='/'
          >
            <NavLi>{t('nav.home')}</NavLi>
          </StyledLink>
          <StyledLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={closeMenu}
            to='contact'
          >
            <NavLi>{t('nav.contact')}</NavLi>
          </StyledLink>
          <StyledLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={closeMenu}
            to='products'
          >
            <NavLi>{t('nav.products')}</NavLi>
          </StyledLink>

          <NavLi>
            <LanguageSwitcher />
          </NavLi>
        </NavUl>
      </>
    </Navigation>
  );
}

export default Nav;
