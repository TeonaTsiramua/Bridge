import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import { useBodyScrollLock, useClickOutside } from '../../../hooks';
import { LanguageSwitcher } from '../..';

import { navData } from '../../../data/data';
import { MobileMenuIcon, NavLi, NavUl, Navigation, StyledLink } from './styles';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLUListElement>(null);
  const mobileMenuIconRef = useRef<HTMLDivElement>(null);

  const isTablet = useMediaQuery({ maxWidth: 900 });
  const { t } = useTranslation();

  // Custom hook to handle click outside event
  useClickOutside(menuRef, () => setIsMenuOpen(false), mobileMenuIconRef);

  // Custom hook to toggle body scrolling
  useBodyScrollLock(isMenuOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const variants = isTablet
    ? {
        open: { opacity: 1, x: 0, transition: { duration: 0.7 } },
        closed: { opacity: 0, x: 500, transition: { duration: 0.7 } },
      }
    : {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 1, x: 0 },
      };

  const iconVariants = {
    open: { scale: 1.3, transition: { duration: 0.7 } },
    closed: { scale: 1, transition: { duration: 0.7 } },
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
          {navData.map((item, index) => (
            <StyledLink
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeMenu}
              to={item.path}
            >
              <NavLi>{t(`nav.${item.text}`)}</NavLi>
            </StyledLink>
          ))}

          <NavLi>
            <LanguageSwitcher />
          </NavLi>
        </NavUl>
      </>
    </Navigation>
  );
}

export default Nav;
