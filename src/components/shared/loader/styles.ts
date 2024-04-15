import styled from 'styled-components';

export const LoaderDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  background: linear-gradient(
    0deg,
    hsl(var(--clr-blue), 0.2) 33%,
    hsl(var(--clr-blue)) 100%
  );
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: hsl(var(--clr-white));
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
