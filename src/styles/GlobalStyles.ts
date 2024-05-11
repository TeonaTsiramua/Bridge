import { createGlobalStyle } from 'styled-components';
import { device } from './breakpoints';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    /* colors */
    --clr-dark: 0, 0%, 20%;
    --clr-light: 0, 0%, 88%;
    --clr-white: 0 0% 95%;

    --clr-grey: 0, 0%, 64%;
    --clr-red: 359, 66%, 37%;
    --clr-blue: 203, 78%, 27%;

    /* font-sizes */
    --fs-sm: clamp(0.8rem, 0.17vi + 0.76rem, 0.89rem);
    --fs-base: clamp(1rem, 0.34vi + 0.91rem, 1.19rem);
    --fs-md: clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem);
    --fs-lg: clamp(1.56rem, 1vi + 1.31rem, 2.11rem);
    --fs-xl: clamp(1.95rem, 1.56vi + 1.56rem, 2.81rem);
    --fs-xxl: clamp(2.44rem, 2.38vi + 1.85rem, 3.75rem);
    --fs-xxxl: clamp(3.05rem, 3.54vi + 2.17rem, 5rem);
  }

  /* ------------------- */
  /* Reset               */
  /* ------------------- */

  /* Box sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Reset margins */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  figure,
  picture {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: 400;
  }

  /* set up the body */
  body {
    font-size: var(--fs-400);
    color: hsl(var(--clr-blue));
    background-color: hsl(var(--clr-white));
    font-size: var(--fs-base);
    font-family: 'FiraGO', sans-serif;
    line-height: 1.5;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    justify-content: space-between;
    gap: 2rem;
  }

  /* make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* make form elements easier to work with */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* remove animations for people who've turned them off */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  @media ${device.md} {
    .no-scroll {
      overflow: hidden;
    }
  }
`;
