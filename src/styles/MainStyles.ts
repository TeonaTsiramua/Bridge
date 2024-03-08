import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin-top: clamp(5rem, 13vw, 7rem);
  position: relative;
  width: 100%;
`;

export const HeroImg = styled.img`
  width: 90vw;
  border-radius: 8px;
  height: 80vh;
  object-fit: cover;
`;

export const HeroText = styled.div`
  color: white;
  text-align: center;
  position: absolute;
  top: 20%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);

  & h1 {
    font-size: var(--fs-800);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  padding: 0;

  & > li {
    list-style: none;
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
