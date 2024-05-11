import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Container = styled.div`
  height: 700px;
  width: 50%;
  @media ${device.md} {
    width: 90%;
    height: 250px;
  }
`;
