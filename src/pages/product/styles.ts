import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-top: 6rem;
  width: 90%;

  @media ${device.md} {
    margin-top: 5rem;
  }
`;

export const Btn = styled.button`
  color: hsl(var(--clr-blue));
  font-size: var(--fs-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid hsl(var(--clr-blue));
  border-radius: 999px;
  cursor: pointer;
  padding: 0.2em;
  aspect-ratio: 1;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: hsl(var(--clr-blue));
    color: hsl(var(--clr-light));
  }
`;

export const Title = styled.h2`
  font-size: var(--fs-md);
  font-weight: 500;
  width: 100%;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: start;
`;

export const Container = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;

  @media ${device.md} {
    flex-direction: column;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 800px;

  @media ${device.md} {
    width: 100%;
  }
`;

export const MainImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 5/3;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    aspect-ratio: 5/3;
    object-fit: cover;
  }
`;

export const ArrowButton = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: 0;' : 'right: 0;')}
  transform: translateY(-50%);
  background: hsl(var(--clr-blue), 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: ${({ direction }) =>
    direction === 'left' ? '0 8px 8px 0' : '8px 0 0 8px'};
  transition: background 0.3s ease-in-out;

  &:hover {
    background: hsl(var(--clr-blue), 0.7);
  }
`;

export const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.3rem;

  img {
    width: 100%;
    aspect-ratio: 1;
    cursor: pointer;
    object-fit: cover;
    border: 2px solid transparent;
    border-radius: 4px;
    opacity: 0.5;
    transition: all 0.2s ease-in-out;

    &.active {
      border-color: #007bff;
      opacity: 1;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: hsl(var(--clr-light));
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  & > button {
    z-index: 1000;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: hsl(var(--clr-blue), 0.5);
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  transition: all 0.3s;

  &:hover {
    background: hsl(var(--clr-blue), 0.7);
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: auto;
    max-height: 80vh;
    object-fit: cover;
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 998;
`;
