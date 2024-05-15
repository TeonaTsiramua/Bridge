import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20vw;
  gap: 1rem;
  padding: 1rem;

  border: 1px solid hsl(var(--clr-light));
  border-radius: 8px;
  cursor: pointer;

  @media ${device.md} {
    height: 30vi;
  }

  @media ${device.sm} {
    flex-direction: column;
    height: 100vi;
  }
`;

export const Title = styled.p`
  font-size: var(--fs-base);
  font-weight: 500;
  width: 70%;

  @media ${device.sm} {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 30%;
  height: 100%;

  @media ${device.sm} {
    height: 60%;
    width: 100%;
  }
`;
