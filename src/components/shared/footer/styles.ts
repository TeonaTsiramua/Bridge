import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: hsl(var(--clr-red));
  align-self: flex-end;
  width: 100%;
  border-top: 1px solid hsl(var(--clr-light), 0.5);
  padding: 1em 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  @media ${device.sm} {
    flex-direction: column;
  }
`;

export const Hr = styled.hr`
  border: 1px solid hsl(var(--clr-light), 0.5);
  width: 90%;
`;

export const Ul = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  gap: 0.2em;
`;

export const H3 = styled.h3`
  font-size: var(--fs-base);
  font-weight: 500;
`;

export const P = styled.p`
  color: hsl(var(--clr-blue));
`;

export const StLink = styled(Link)`
  color: hsl(var(--clr-dark));
  line-height: 2;
  font-weight: 300;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: hsl(var(--clr-blue));
  }
`;

export const Logo = styled.img`
  width: 9rem;
  @media ${device.md} {
    width: 6rem;
  }
`;
