import styled from 'styled-components';

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
