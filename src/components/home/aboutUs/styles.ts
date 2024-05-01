import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const AboutContainer = styled.div`
  background-color: hsl(var(--clr-light));
  width: 100%;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & img {
    width: 40%;
    object-fit: cover;
    border-radius: 24px;
  }

  & div {
    max-width: 40%;
    text-align: center;
  }

  & h2 {
    color: hsl(var(--clr-red));
    font-size: var(--fs-700);
    font-weight: 600;
  }

  @media ${device.md} {
    flex-direction: column;
    gap: 2rem;
    padding-top: 0;

    & img {
      width: 100%;
      max-height: 20rem;
      object-fit: cover;
      border-radius: 0;
    }

    & div {
      max-width: 80%;
      text-align: center;
    }
  }
`;
