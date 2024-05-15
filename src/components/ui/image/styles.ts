import styled, { css, keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
`;

export const ImgWrapper = styled.div<{ $pulsing: boolean }>`
  width: 100%;
  height: 100%;
  background: #ccc;

  ${({ $pulsing }) =>
    $pulsing &&
    css`
      animation: ${pulseAnimation} 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    `}

  border-radius: 20px;

  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`;
