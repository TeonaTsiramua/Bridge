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

export const PMain = styled(Main)`
  flex-direction: row;
  margin-top: clamp(5rem, 13vw, 7rem);
  width: 90%;
  align-items: start;
  gap: 1rem;

  @media ${device.md} {
    flex-direction: column;
  }
`;

export const CMain = styled(Main)`
  margin-top: clamp(5rem, 13vw, 7rem);
`;
