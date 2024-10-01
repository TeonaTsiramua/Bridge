import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  padding: 2em 5%;
  width: 100%;

  @media ${device.md} {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  width: 100%;

  @media ${device.md} {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const Collumn = styled(Wrapper)`
  flex-direction: column;
`;

export const H3 = styled.h3`
  font-weight: 500;
  color: hsl(var(--clr-red));
`;

export const Div = styled.div`
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
