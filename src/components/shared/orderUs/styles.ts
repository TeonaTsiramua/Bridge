import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../../styles/breakpoints';

export const OrderDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: hsl(var(--clr-light));
  gap: 1em;
  padding: 2em;

  @media ${device.md} {
    flex-direction: column;
    gap: 2em;
    padding: 2em 1em;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;

  height: 100%;
  width: 50%;
  border-radius: 20px 0 0 20px;

  @media ${device.md} {
    width: 100%;
  }
`;

export const H2 = styled.h2`
  font-size: var(--fs-md);
  color: hsl(var(--clr-red));
  font-weight: 500;
`;

export const Icons = styled.div`
  position: relative;
  align-self: center;
`;

export const MainIcon = styled.img`
  height: 5em;
  width: 5em;
`;
export const FindIcon = styled(motion.img)`
  height: 5em;
  width: 5em;
  position: absolute;
  top: 1em;
  left: -1em;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: 0 20px 20px 0;
  height: 100%;
  width: 50%;

  @media ${device.md} {
    width: 100%;
  }
`;

export const BackButton = styled.button`
  background: transparent;
  border-radius: 50%;
  aspect-ratio: 1;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  color: hsl(var(--clr-blue), 0.5);
  border: none;
  padding: 5px;
  height: 35px;
  width: 35px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: hsl(var(--clr-blue), 1);
    border: 1px solid hsl(var(--clr-blue), 1);
  }
`;
