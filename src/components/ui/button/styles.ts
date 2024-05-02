import styled from 'styled-components';

export const SendBtn = styled.button`
  font-family: inherit;
  font-size: 20px;
  background: hsl(var(--clr-blue));
  color: hsl(var(--clr-light));
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;

  & span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  & svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  &:hover svg {
    transform: translateX(2em) rotate(45deg) scale(1.2);
  }

  &:hover span {
    transform: translateX(5em);
  }

  &:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }
`;
