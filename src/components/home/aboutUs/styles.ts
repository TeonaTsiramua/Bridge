import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const AboutContainer = styled.div`
  background-color: hsl(var(--clr-light));
  width: 100%;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ${device.md} {
    flex-direction: column;
    gap: 2rem;
    padding-top: 0;
  }
`;

export const Img = styled.img`
  width: 40%;
  object-fit: cover;
  border-radius: 24px;

  @media ${device.md} {
    width: 100%;
    max-height: 20rem;
    object-fit: cover;
    border-radius: 0;
  }
`;

export const Div = styled.div`
  max-width: 40%;
  text-align: center;

  @media ${device.md} {
    max-width: 80%;
    text-align: center;
  }
`;

export const H2 = styled.h2`
  color: hsl(var(--clr-red));
  font-size: var(--fs-lg);
  font-weight: 600;
`;

export const P = styled.p`
  font-size: var(--fs-base);
  text-align: justify;
  margin-top: 1rem;
`;
