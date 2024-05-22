import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const StyledHeader = styled.header`
  font-size: var(--fs-400);
  display: flex;
  position: fixed;
  z-index: 3;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 90vw;

  background-color: hsl(var(--clr-white));

  box-shadow: 0 0 1px rgba(85, 166, 246, 0.1),
    1px 1.5px 2px -1px rgba(85, 166, 246, 0.15),
    4px 4px 12px -2.5px rgba(85, 166, 246, 0.15);
  border-radius: 999px;
  border: 1px solid hsl(var(--clr-blue), 0.3);

  @supports (backdrop-filter: blur(24px)) {
    background-color: hsl(var(--clr-light), 0.4);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
  }

  @supports (-webkit-backdrop-filter: blur(24px)) {
    background-color: hsl(var(--clr-light), 0.4);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
  }
`;

export const Logo = styled.img`
  width: 9rem;
  @media ${device.md} {
    width: 6rem;
  }
`;
