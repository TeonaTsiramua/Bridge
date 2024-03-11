import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import {
  MobileMenuIcon,
  NavLi,
  NavUl,
  Navigation,
  StyledLink,
} from '../styles/HeaderStyles';
import LanguageSwitcher from './LanguageSwitcher';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

function Nav() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const mobileMenuIconRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !mobileMenuIconRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

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
            to='Bridge/'
          >
            <NavLi>{t('nav.home')}</NavLi>
          </StyledLink>
          <StyledLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={closeMenu}
            to='Bridge/contact'
          >
            <NavLi>{t('nav.contact')}</NavLi>
          </StyledLink>
          <StyledLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={closeMenu}
            to='Bridge/products'
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
