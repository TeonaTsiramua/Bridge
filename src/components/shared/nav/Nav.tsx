import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import { useBodyScrollLock } from '../../../hooks';
import {
  getNavAnimationConfig,
  overlayAnimation,
} from '../../../utils/animations';
import { navData } from '../../../data';

import { LanguageSwitcher } from '../..';
import { MenuToggle } from './MenuToggle';

import {
  MobileMenuIcon,
  Wrapper,
  Navigation,
  SOverlay,
  StyledLink,
} from './styles';

function Nav({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) {
  const isTablet = useMediaQuery({ maxWidth: 900 });
  const { t } = useTranslation();
  useBodyScrollLock(isMenuOpen);

  const navAnimation = getNavAnimationConfig(isTablet, isMenuOpen);

  return (
    <Navigation>
      <MobileMenuIcon>
        <MenuToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </MobileMenuIcon>

      <Wrapper {...navAnimation}>
        {navData.map((item, index) => (
          <StyledLink key={index} onClick={toggleMenu} to={item.path}>
            {t(`nav.${item.text}`)}
          </StyledLink>
        ))}

        <LanguageSwitcher />
      </Wrapper>
      <SOverlay
        {...overlayAnimation}
        animate={isMenuOpen ? 'open' : 'closed'}
        onClick={isMenuOpen ? toggleMenu : undefined}
      />
    </Navigation>
  );
}

export default Nav;
