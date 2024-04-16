import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollHandler } from '../../../hooks';

import { Nav } from '../..';
import { Logo, StyledHeader } from './styles';

function Header() {
  const visible = useScrollHandler();

  const variants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, y: -100, transition: { duration: 0.5 } },
  };

  return (
    <StyledHeader
      as={motion.header}
      variants={variants}
      initial='closed'
      animate={visible ? 'open' : 'closed'}
      exit='closed'
    >
      <Link to='/'>
        <Logo src='/assets/main/logo2.svg' alt='logo' />
      </Link>
      <Nav />
    </StyledHeader>
  );
}

export default Header;
