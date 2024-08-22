import { createGlobalStyle } from 'styled-components';
import { device } from './breakpoints';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    /* colors */
    --clr-dark: 0, 0%, 20%;
    --clr-light: 0, 0%, 88%;
    --clr-white: 0, 0%, 95%;

    --clr-grey: 0, 0%, 64%;
    --clr-red: 359, 66%, 37%;
    --clr-blue: 203, 78%, 27%;

    /* font-sizes */
    --fs-sm: clamp(0.8rem, 0.3vw + 0.76rem, 1rem);
    --fs-base: clamp(1rem, 0.34vw + 0.91rem, 1.3rem);
    --fs-md: clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);
    --fs-lg: clamp(1.56rem, 1vw + 1.31rem, 2.11rem);
    --fs-xl: clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem);
    --fs-xxl: clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);
    --fs-xxxl: clamp(3.05rem, 3.54vw + 2.17rem, 5rem);
  }

  @font-face {
    font-family: 'FiraGO';
    src: url('/assets/fonts/FiraGO-Light.woff2') format('woff2'),
      url('/assets/fonts/FiraGO-Light.woff') format('woff');
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'FiraGO';
    src: url('/assets/fonts/FiraGO-Regular.woff2') format('woff2'),
      url('/assets/fonts/FiraGO-Regular.woff') format('woff');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'FiraGO';
    src: url('/assets/fonts/FiraGO-Medium.woff2') format('woff2'),
      url('/assets/fonts/FiraGO-Medium.woff') format('woff');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'FiraGO';
    src: url('/assets/fonts/FiraGO-SemiBold.woff2') format('woff2'),
      url('/assets/fonts/FiraGO-SemiBold.woff') format('woff');
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'FiraGO';
    src: url('/assets/fonts/FiraGO-Bold.woff2') format('woff2'),
      url('/assets/fonts/FiraGO-Bold.woff') format('woff');
    font-weight: 700;
    font-display: swap;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: hsl(var(--clr-blue));
    background-color: hsl(var(--clr-white));
    font-size: var(--fs-base);
    font-family: 'FiraGO', sans-serif;
    line-height: 1.5;
    overflow-x: hidden;
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    max-width: 1600px;
  }

  /* ------------------- */
  /* Reset               */
  /* ------------------- */

  /* Box sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
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

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Make form elements easier to work with */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove animations for people who've turned them off */
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

  /* Add specific media queries for responsiveness */

  @media ${device.md} {
    .no-scroll {
      overflow: hidden;
    }
  }
`;
