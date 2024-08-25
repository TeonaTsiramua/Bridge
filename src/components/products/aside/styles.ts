import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.aside)`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 6rem;
  max-height: 80vh;
  gap: 1.5rem;
  width: 30%;
  overflow-y: auto;
  padding-bottom: 2rem;

  @media ${device.md} {
    background-color: hsl(var(--clr-light));
    position: fixed;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    top: 0;
    left: 0;
    gap: 1rem;
    z-index: 3;
    padding: 1em 2em 4em 2em;
    margin: 0;
  }
`;

export const Section = styled.div`
  padding-right: 1em;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  padding-bottom: 3rem;

  @media ${device.md} {
    padding: 1em;
  }

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
    min-height: 70px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: hsl(var(--clr-light), 0.4);
    border-radius: 8px;
    margin: 15px 0;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: hsl(var(--clr-light));
    border-radius: 12px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--clr-grey));
    cursor: pointer;
  }
`;

export const Label = styled(motion.label)`
  font-size: var(--fs-sm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  font-size: var(--fs-sm);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1em;
  height: 1em;
  border: 1px solid hsl(var(--clr-blue));
  margin: 0;
  border-radius: 5px;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.3s ease-in-out;

  &:checked {
    border-color: transparent;
    background: hsl(var(--clr-blue));
  }
  &:not(:checked):hover {
    border-color: hsl(var(--clr-blue));
  }
`;

export const Close = styled.button`
  display: none;
  cursor: pointer;
  color: hsl(var(--clr-blue));
  color: hsl(var(--clr-blue));

  @media ${device.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: end;

    background: transparent;
    border: 0;
    width: 2rem;
    height: 2rem;
    aspect-ratio: 1;
    font-size: var(--fs-xxl);
    padding: 0 1.5rem;
  }
`;

export const SButton = styled(motion.div)`
  cursor: pointer;
  min-height: 30px;
  min-width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
`;
