import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  padding: 2em 5%;

  @media ${device.md} {
    flex-direction: column-reverse;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  width: 50%;

  @media ${device.md} {
    width: 100%;
  }
`;

export const H3 = styled.h3`
  font-weight: 500;
  color: hsl(var(--clr-red));
`;
