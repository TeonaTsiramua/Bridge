import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import { useBodyScrollLock, useClickOutside } from '../../../hooks';
import { LanguageSwitcher } from '../..';

import { navData } from '../../../data/data';
import { MobileMenuIcon, NavLi, NavUl, Navigation, StyledLink } from './styles';
import { MenuToggle } from './MenuToggle';

function Nav({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg0: boolean) => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuIconRef = useRef<HTMLDivElement>(null);

  const isTablet = useMediaQuery({ maxWidth: 900 });
  const { t } = useTranslation();

  // Custom hook to handle click outside event
  useClickOutside(menuRef, () => setIsMenuOpen(false), mobileMenuIconRef);

  // Custom hook to toggle body scrolling
  useBodyScrollLock(isMenuOpen);

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

  return (
    <Navigation>
      <MobileMenuIcon ref={mobileMenuIconRef}>
        <MenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </MobileMenuIcon>
      <>
        <NavUl
          as={motion.div}
          ref={menuRef}
          variants={variants}
          initial='closed'
          animate={isMenuOpen ? 'open' : 'closed'}
          exit='closed'
        >
          {navData.map((item, index) => (
            <StyledLink key={index} onClick={closeMenu} to={item.path}>
              {t(`nav.${item.text}`)}
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
