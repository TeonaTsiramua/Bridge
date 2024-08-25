import styled from 'styled-components';

export const SSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid hsl(var(--clr-grey));
  border-radius: 0.25rem;
  font-size: 1rem;
  color: hsl(var(--clr-blue));
  background-color: hsl(var(--clr-white));
  transition: border-color 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: hsl(var(--clr-blue));
  }
`;

export const SOption = styled.option``;
