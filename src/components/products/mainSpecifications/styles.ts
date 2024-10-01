import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 45%;

  @media ${device.md} {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  text-align: center;

  /* & > :first-child {
    grid-column: 1/3;
  } */
`;

export const Title = styled.h2`
  font-size: var(--fs-base);
  font-weight: 500;
  text-align: center;
  color: hsl(var(--clr-red));
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  align-items: center;
  background-color: hsl(var(--clr-light));
  color: hsl(var(--clr-blue));
  padding: 0.8rem;
  border-radius: 1rem;
  box-shadow: hsl(var(--clr-grey), 0.7) 0px 2px 8px 0px;
`;

export const P = styled.p`
  font-size: var(--fs-sm);
  font-weight: 500;
  color: hsl(var(--clr-dark));
`;

export const Btn = styled(motion.button)`
  color: hsl(var(--clr-blue));
  font-size: var(--fs-sm);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: transparent;
  cursor: pointer;
`;
