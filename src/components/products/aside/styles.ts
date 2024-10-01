import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.aside)`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 6rem;
  max-height: 75vh;
  gap: 1.5rem;
  width: 30%;
  overflow-y: auto;
  margin-bottom: 2rem;
  box-shadow: inset 0px 9px 9px -11px hsl(var(--clr-grey), 0.5),
    inset 0px -9px 9px -11px hsl(var(--clr-grey), 0.5);

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

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid hsl(var(--clr-light));
  padding: 1rem 0;
`;

export const P = styled.p`
  font-size: var(--fs-sm);
  font-weight: 500;
  color: hsl(var(--clr-red));
`;

export const Section = styled.div`
  padding-right: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  overflow-y: auto;
  padding-bottom: 3rem;

  @media ${device.md} {
    padding: 1em;
    margin-bottom: 2rem;
    box-shadow: inset 0px 9px 9px -11px hsl(var(--clr-grey)),
      inset 0px -9px 9px -11px hsl(var(--clr-grey));
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
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  position: relative;

  &::before {
    content: attr(aria-label);
    position: absolute;
    background: hsl(var(--clr-red));
    color: hsl(var(--clr-light));
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.65rem;
    top: 2px;
    right: 35px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }

  & > img {
    width: 30px;
    filter: brightness(0) saturate(100%) invert(13%) sepia(36%) saturate(7081%)
      hue-rotate(346deg) brightness(101%) contrast(89%);
  }
`;
