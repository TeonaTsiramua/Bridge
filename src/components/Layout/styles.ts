import styled from 'styled-components';

export const BottomOverlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    hsl(var(--clr-white), 0.6) 100%
  );

  z-index: 1;
`;

export const TopOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 2rem;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    hsl(var(--clr-blue), 0.5) 100%
  );

  z-index: 1;
`;
