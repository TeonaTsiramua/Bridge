import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin-top: clamp(5rem, 13vw, 7rem);

  width: 100%;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const HeroImg = styled.img`
  width: 90vw;
  border-radius: 8px;
  height: 80vh;
  object-fit: cover;
  position: relative;
  @media (max-width: 768px) {
    width: 100vw;
    border-radius: 0px;
    height: 90vh;
  }
`;

export const HeroText = styled.div`
  color: white;
  text-align: center;
  position: absolute;
  top: 55%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);

  & h1 {
    font-size: var(--fs-800);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
    @media (max-height: 430px) {
      display: none;
    }
  }

  & h2 {
    font-size: var(--fs-600);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
  }
  & p {
    font-size: var(--fs-500);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  gap: 2rem;
`;

export const CategoryUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;
  gap: 1em;
  width: 100%;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
  }

  & > li {
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

  @media (max-width: 768px) {
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
