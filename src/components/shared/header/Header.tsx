import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useResizeHandler, useScrollHandler } from '../../../hooks';
import { headerAnimation } from '../../../utils/animations';

import { Nav } from '../..';
import { Logo, StyledHeader } from './styles';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const visible = useScrollHandler(isMenuOpen);
  useResizeHandler(isMenuOpen, setIsMenuOpen);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <StyledHeader {...headerAnimation} animate={visible ? 'open' : 'closed'}>
      <Link to='/'>
        <Logo src='/assets/main/logo2.svg' alt='logo' />
      </Link>
      <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </StyledHeader>
  );
}

export default Header;
