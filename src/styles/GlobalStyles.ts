import { createGlobalStyle } from 'styled-components';

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
    --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
    --fs-800: 3rem;
    --fs-700: 2rem;
    --fs-600: 1.5rem;
    --fs-500: 1rem;
    --fs-400: 0.9375rem;
    --fs-300: 1rem;
    --fs-200: 0.875rem;
  }

  @media (min-width: 35em) {
    :root {
      --fs-800: 5rem;
      --fs-700: 2.5rem;
      --fs-600: 1.5rem;
      --fs-500: 1.25rem;
      --fs-400: 1rem;
    }
  }

  @media (min-width: 45em) {
    :root {
      /* font-sizes */
      --fs-800: 6.25rem;
      --fs-700: 3.5rem;
      --fs-600: 2rem;
      --fs-500: 1.75rem;
      --fs-400: 1.1rem;
    }
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
    font-family: 'FiraGO', sans-serif;
    line-height: 1.5;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
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

  @media (max-width: 768px) {
    .no-scroll {
      overflow: hidden;
    }
  }
`;
