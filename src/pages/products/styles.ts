import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 6rem;
  width: 90%;
  min-height: 80vh;

  @media ${device.md} {
    flex-direction: column;
    margin-top: 5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: start;
  justify-content: start;
  width: 100%;
`;
