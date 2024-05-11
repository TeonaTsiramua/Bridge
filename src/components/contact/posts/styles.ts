import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Container = styled.div`
  padding: 0 5%;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 1em;

  @media ${device.md} {
    grid-template-columns: 1fr;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;
