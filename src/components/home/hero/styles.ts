import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../../styles/breakpoints';

export const HeroImg = styled(motion.img)`
  width: 90vw;
  border-radius: 8px;
  height: 80vh;
  object-fit: cover;
  position: relative;
  @media ${device.md} {
    width: 100vw;
    border-radius: 0px;
    height: 90vh;
  }
`;

export const HeroText = styled.div`
  color: white;
  text-align: center;
  position: absolute;
  top: 55%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
`;

export const H1 = styled(motion.h1)`
  font-size: var(--fs-xxxl);
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
  @media (max-height: 430px) {
    display: none;
  }
`;

export const H2 = styled(motion.h2)`
  font-size: var(--fs-lg);
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
`;

export const P = styled(motion.p)`
  font-size: var(--fs-md);
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
`;
