import styled from 'styled-components';
import { device } from './breakpoints';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin-top: clamp(5rem, 13vw, 7rem);
  width: 100%;

  @media ${device.md} {
    margin-top: 0;
  }
`;

export const PMain = styled.main`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  margin-top: clamp(5rem, 13vw, 7rem);
  width: 90%;

  @media ${device.md} {
    flex-direction: column;
  }
`;
