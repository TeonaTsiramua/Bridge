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

export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
`;

export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  position: relative;

  & > span {
    color: hsl(var(--clr-red));
    font-size: smaller;
    position: absolute;
    bottom: -25px;
  }
`;

export const Input = styled.input`
  box-shadow: inset hsl(var(--clr-dark)) 0 0 0 2px;
  border: 0;
  background: transparent;
  appearance: none;
  position: relative;
  border-radius: 3px;
  padding: 0.5em 1em 0.5em 2em;
  line-height: 1.4;
  color: hsl(var(--clr-blue));
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  width: 60%;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 0 0 0 hsl(var(--clr-white)) inset,
      hsl(var(--clr-blue)) 0 0 0 2px;
  }
  &:focus {
    background: hsl(var(--clr-white));
    outline: 0;
    box-shadow: 0 0 0 0 hsl(var(--clr-white)) inset,
      hsl(var(--clr-blue)) 0 0 0 3px;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  box-shadow: inset hsl(var(--clr-dark)) 0 0 0 2px;
  border: 0;
  background: transparent;
  appearance: none;
  width: 100%;
  height: 6em;
  position: relative;
  border-radius: 3px;
  padding: 9px 12px;
  line-height: 1.4;
  color: hsl(var(--clr-blue));
  font-size: 16px;
  font-weight: 400;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 0 0 0 hsl(var(--clr-white)) inset,
      hsl(var(--clr-blue)) 0 0 0 2px;
  }
  &:focus {
    background: hsl(var(--clr-white));
    outline: 0;
    box-shadow: 0 0 0 0 hsl(var(--clr-white)) inset,
      hsl(var(--clr-blue)) 0 0 0 3px;
  }
`;

export const FormIcons = styled.span`
  position: absolute;
  top: 45px;
  left: 0.5em;
  z-index: 1;

  @media (max-width: 45em) {
    top: 42px;
  }

  @media (max-width: 35em) {
    top: 40px;
  }
`;

export const FormIcon = styled.img`
  width: 20px;
  height: 20px;
  filter: invert(22%) sepia(97%) saturate(905%) hue-rotate(173deg)
    brightness(90%) contrast(90%);
`;

export const SubmitButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: hsl(var(--clr-white));
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: hsl(var(--clr-blue));
  display: inline-flex;
  height: 48px;
  justify-content: center;
  line-height: 1;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  cursor: pointer;

  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

export const MessageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

export const SendingImg = styled.img`
  height: 5em;
  width: 5em;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
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
