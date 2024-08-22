import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 1.5rem 5%;

  @media ${device.lg} {
    gap: 1rem;
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: hsl(var(--clr-red));
  font-size: var(--fs-lg);
  font-weight: 600;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media ${device.md} {
    font-size: var(--fs-sm);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem 0;
  max-width: 800px;

  @media ${device.lg} {
    max-width: 100%;
  }
`;

export const Img = styled.img`
  width: 550px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  @media ${device.lg} {
    display: none;
  }
`;
