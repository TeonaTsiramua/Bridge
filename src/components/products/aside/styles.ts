import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Wrapper = styled.aside`
  background-color: hsl(var(--clr-white));
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 16px;

  gap: 2rem;
  z-index: 2;

  width: 30%;
  padding: 2rem;

  @media ${device.md} {
    position: fixed;
    width: 100%;
    height: 100vh;

    top: 0;
    left: 0;
    gap: 1rem;
    z-index: 3;
  }
`;

export const Section = styled.div`
  background-color: hsl(var(--clr-white));
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;

  /* width */
  &::-webkit-scrollbar {
    width: 8px;
    min-height: 70px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: hsl(var(--clr-light), 0.5);
    border-radius: 8px;
    margin: 12px 0;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: hsl(var(--clr-light));
    border-radius: 12px;
    outline: 1px solid white;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--clr-grey));
    cursor: pointer;
  }
`;

export const Label = styled.label`
  font-size: var(--fs-sm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Checkbox = styled.input`
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

  &:checked {
    border-color: transparent;
    background: hsl(var(--clr-blue));
  }
  &:not(:checked):hover {
    border-color: hsl(var(--clr-blue));
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
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
    font-size: var(--fs-xl);
    padding: 0 2rem;
  }
`;
