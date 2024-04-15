import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Nav from '../nav/Nav';
import { Logo, StyledHeader } from './styles';

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;
      const isTop = currentScrollPos === 0;
      const isBelowThreshold = currentScrollPos < 50;

      setVisible(isTop || isBelowThreshold || !isScrolledDown);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

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
      <Logo src='/assets/main/logo2.svg' alt='logo' />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
