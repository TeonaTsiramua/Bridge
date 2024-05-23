import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Navigation = styled.nav`
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavUl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0;

  @media ${device.md} {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    position: absolute;
    z-index: 4;
    right: -7%;
    top: -32%;

    background: hsl(var(--clr-blue));
    border-radius: 16px 0 0 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    width: 60vi;
    height: 100vh;
    padding: 50px;
  }
`;

export const NavLi = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: hsl(var(--clr-blue));
  font-size: var(--fs-base);
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &.active {
    color: hsl(var(--clr-white));
    background-color: hsl(var(--clr-blue));
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media ${device.md} {
    color: hsl(var(--clr-white));
    padding: 0.5rem 2rem;

    &.active {
      color: hsl(var(--clr-blue));
      background-color: hsl(var(--clr-white));
      padding: 0.5rem 2rem;
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

export const MobileMenuIcon = styled.div`
  display: none;

  @media ${device.md} {
    display: flex;
  }
`;

export const StLink = styled(Link)`
  color: hsl(var(--clr-dark));
  font-weight: 300;
  text-decoration: none;
`;

export const SButton = styled.button`
  display: none;
  background: transparent;
  cursor: pointer;
  border: 0;

  @media ${device.md} {
    display: flex;
    z-index: 6;
  }
`;
