import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  gap: 2rem;
`;

export const H2 = styled.h2`
  font-size: var(--fs-lg);
  font-weight: 600;
`;

export const CategoryUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;
  gap: 1em;
  width: 100%;
  margin: 0;
  padding: 0;

  @media ${device.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.xs} {
    grid-template-columns: repeat(2, 1fr);
  }

  & > li {
    font-size: var(--fs-base);
    font-weight: 500;

    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  & img {
    height: 5em;
    filter: invert(25%) sepia(43%) saturate(1299%) hue-rotate(167deg)
      brightness(95%) contrast(96%);
  }

  & :hover {
    img {
      filter: invert(17%) sepia(30%) saturate(6137%) hue-rotate(340deg)
        brightness(94%) contrast(94%);
    }

    p {
      color: hsl(var(--clr-red));
    }
  }
`;

export const Li = styled.li`
  font-weight: 500;

  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const P = styled.p`
  font-size: var(--fs-base);
`;

export const Img = styled.img`
  height: 5em;
  filter: invert(25%) sepia(43%) saturate(1299%) hue-rotate(167deg)
    brightness(95%) contrast(96%);
`;
