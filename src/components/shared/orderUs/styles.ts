import styled from 'styled-components';

export const OrderDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: hsl(var(--clr-light));
  gap: 1em;
  padding: 2em;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2em;
    padding: 2em 1em;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;

  height: 100%;
  color: hsl(var(--clr-red));
  width: 100%;
  border-radius: 20px 0 0 20px;

  & > p {
    color: hsl(var(--clr-blue));
  }
`;

export const Icons = styled.div`
  position: relative;
  align-self: center;
`;

export const MainIcon = styled.img`
  height: 5em;
  width: 5em;
`;
export const FindIcon = styled.img`
  height: 5em;
  width: 5em;
  position: absolute;
  top: 1em;
  left: -1em;
`;

export const SendIcon = styled.img`
  height: 1em;
  width: 1em;
  filter: invert(100%) sepia(1%) saturate(365%) hue-rotate(356deg)
    brightness(117%) contrast(90%);
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: 0 20px 20px 0;
  height: 100%;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    144deg,
    hsl(var(--clr-red)),
    hsl(var(--clr-grey)) 50%,
    hsl(var(--clr-red))
  );
  border: 0;
  border-radius: 8px;
  box-shadow: hsl(var(--clr-blue), 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: hsl(var(--clr-white));

  font-size: 20px;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  &:active,
  &:hover {
    outline: 0;
  }

  & > span {
    display: flex;
    gap: 0.5em;
    background-color: hsl(var(--clr-blue));
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }

  &:hover > span {
    background: none;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    min-width: 196px;
  }
`;

export const BackButton = styled.button`
  background: transparent;
  border-radius: 50%;
  aspect-ratio: 1;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  color: hsl(var(--clr-blue), 0.5);
  border: none;
  padding: 5px;
  height: 35px;
  width: 35px;

  &:hover {
    color: hsl(var(--clr-blue), 1);
    border: 1px solid hsl(var(--clr-blue), 1);
  }
`;
