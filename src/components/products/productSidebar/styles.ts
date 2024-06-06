import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 70%;

  @media ${device.md} {
    width: 100%;
  }
`;

export const ProductWrapper = styled.div<{ $primary: boolean }>`
  display: grid;
  grid-template-columns: ${({ $primary }) =>
    $primary ? 'repeat(3, 1fr)' : '1fr'};
  gap: 1rem;
  width: 100%;

  @media ${device.lg} {
    grid-template-columns: ${({ $primary }) =>
      $primary ? 'repeat(2, 1fr)' : '1fr'};
  }

  @media ${device.sm} {
    grid-template-columns: 1fr;
  }
`;
