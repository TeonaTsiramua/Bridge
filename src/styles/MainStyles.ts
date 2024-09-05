import styled from 'styled-components';
import { device } from './breakpoints';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  width: 100%;

  @media ${device.md} {
    margin-top: 0;
  }
`;

export const CMain = styled(Main)`
  margin-top: 6rem;

  @media ${device.md} {
    margin-top: 5rem;
  }
`;
