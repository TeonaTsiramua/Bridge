import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 70%;

  @media ${device.md} {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1em;
  position: relative;
`;

export const ProductWrapper = styled.div<{ $primary: boolean }>`
  display: grid;
  grid-template-columns: ${({ $primary }) =>
    $primary ? 'repeat(3, 1fr)' : '1fr'};
  gap: 1rem;
  width: 100%;

  @media ${device.lg} {
    grid-template-columns: ${({ $primary }) =>
      $primary ? 'repeat(2, 1fr)' : '1fr'};
  }

  @media ${device.sm} {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  box-shadow: inset hsl(var(--clr-light)) 0 0 0 1px;
  border: 0;
  background: transparent;
  appearance: none;
  position: relative;
  border-radius: 8px;
  padding: 0.5em 1em 0.5em 2.5em;
  line-height: 1.4;
  color: hsl(var(--clr-blue));
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  width: 60%;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 0 0 0 hsl(var(--clr-white)) inset,
      hsl(var(--clr-blue)) 0 0 0 1px;

    & ~ svg path {
      stroke: hsl(var(--clr-blue));
      stroke-width: 1.7;
      transition: all 0.2s ease-in-out;
    }
  }
  &:focus {
    background: hsl(var(--clr-white));
    outline: 0;
    box-shadow: 0 0 0 0 hsl(var(--clr-white)) inset,
      hsl(var(--clr-blue)) 0 0 0 2px;

    & ~ svg path {
      stroke: hsl(var(--clr-blue));
      stroke-width: 2;
    }
  }

  @media ${device.md} {
    width: 100%;
  }

  &::placeholder {
    color: hsl(var(--clr-grey));
    font-weight: 300;
  }
`;

export const SButton = styled(motion.div)`
  cursor: pointer;
  min-height: 30px;
  min-width: 30px;
  display: flex;
  justify-content: center;

  @media ${device.sm} {
    display: none;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 0.25em;
  top: 0.25em;
`;
