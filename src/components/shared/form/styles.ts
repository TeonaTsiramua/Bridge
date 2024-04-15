import styled from 'styled-components';

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
