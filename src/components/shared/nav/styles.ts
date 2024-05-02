import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Navigation = styled.nav`
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavUl = styled.ul`
  display: flex;
  place-content: center;
  gap: 1rem;
  margin: 0;

  @media ${device.md} {
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    z-index: 4;
    right: -7%;
    top: -32%;

    background: rgba(15, 82, 124, 0.95);
    border-radius: 16px 0 0 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    width: 60vw;
    height: 100vh;
  }
`;

export const NavLi = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(motion(Link))`
  color: hsl(var(--clr-blue));
  font-size: var(--fs-base);
  font-weight: 500;
  text-decoration: none;
  background-image: linear-gradient(
    to right,
    hsl(var(--clr-red)),
    hsl(var(--clr-red)) 50%,
    hsl(var(--clr-blue)) 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  background-clip: padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;

  &:before {
    content: '';
    background: hsl(var(--clr-red));
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-position: 0;
  }

  &:hover::before {
    width: 100%;
  }
  @media ${device.md} {
    color: hsl(var(--clr-blue));
    background-image: linear-gradient(
      to right,
      hsl(var(--clr-grey)),
      hsl(var(--clr-grey)) 50%,
      hsl(var(--clr-light)) 50%
    );

    &:before {
      content: '';
      background: hsl(var(--clr-light));
      width: 40vw;
    }

    &:hover {
      color: hsl(var(--clr-grey));
    }

    &:hover::before {
      background: hsl(var(--clr-grey));
      width: 40vw;
    }
  }
`;

export const LangButton = styled.button`
  height: 30px;
  width: 30px;
  padding: 0;
  background: transparent;
  border: none;
  margin-right: 5px;

  & > img {
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const MobileMenuIcon = styled.div<{ isOpen: boolean }>`
  display: none;
  cursor: pointer;
  color: hsl(var(--clr-blue));
  color: ${({ isOpen }) =>
    isOpen ? 'hsl(var(--clr-light))' : 'hsl(var(--clr-blue))'};

  @media ${device.md} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 4000;

    background: transparent;
    border: 0;
    width: 2rem;
    height: 2rem;
    aspect-ratio: 1;
    font-size: 30px;
  }
`;

export const StLink = styled(Link)`
  color: hsl(var(--clr-dark));
  font-weight: 300;
  text-decoration: none;
`;
