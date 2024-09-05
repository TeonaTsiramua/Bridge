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

export const ProductWrapper = styled.div<{
  $primary: boolean;
  $onlyOne: boolean;
}>`
  display: grid;
  grid-template-columns: ${({ $primary, $onlyOne }) =>
    $primary
      ? $onlyOne
        ? '320px'
        : 'repeat(auto-fit, minmax(300px, 1fr))'
      : '1fr'};
  gap: 1rem;
  width: 100%;
`;
