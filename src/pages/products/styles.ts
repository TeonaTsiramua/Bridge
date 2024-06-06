import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-top: 6rem;
  width: 90%;

  @media ${device.md} {
    flex-direction: column;
    margin-top: 5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: start;
  justify-content: center;
  width: 100%;
`;
