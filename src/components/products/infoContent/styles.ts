import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const InfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  width: 60%;
  border: 1px solid hsl(var(--clr-blue), 0.5);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: hsl(var(--clr-light)) 0px 2px 8px 0px;

  @media ${device.md} {
    width: 100%;
  }
`;

export const H3 = styled.h3`
  font-size: var(--fs-base);
  font-weight: 500;
  width: 100%;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid hsl(var(--clr-blue), 0.5);
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--fs-sm);
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: hsl(var(--clr-blue), 0.1);
    cursor: default;
  }

  & > p {
    font-weight: 500;
    width: 50%;
  }
`;
