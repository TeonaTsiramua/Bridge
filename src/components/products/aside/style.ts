import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Wrapper = styled.aside`
  background-color: hsl(var(--clr-white));
  display: flex;
  flex-direction: column;
  position: relative;

  gap: 2rem;
  z-index: 2;

  width: 30%;
  min-height: 90vh;
  padding-bottom: 2rem;

  @media ${device.md} {
    position: fixed;
    width: 90%;
    top: 80px;
    gap: 1rem;
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
  /* font-size: clamp(16px, 1.5vw, 18px); */
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

  &:checked {
    border-color: transparent;
    background: hsl(var(--clr-blue));
  }
  &:not(:checked):hover {
    border-color: hsl(var(--clr-blue));
  }
`;
