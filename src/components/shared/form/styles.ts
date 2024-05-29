import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  width: 90%;
`;

export const FormElement = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  position: relative;

  & > span {
    color: hsl(var(--clr-red));
    font-size: var(--fs-sm);
    position: absolute;
    bottom: -25px;
  }
`;

export const Label = styled.label`
  font-size: var(--fs-base);
  font-weight: 500;
`;

export const Input = styled.input`
  box-shadow: inset hsl(var(--clr-grey)) 0 0 0 1px;
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
  width: 100%;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 0 0 0 hsl(var(--clr-white)) inset,
      hsl(var(--clr-blue)) 0 0 0 1px;
  }
  &:focus {
    background: hsl(var(--clr-white));
    outline: 0;
    box-shadow: 0 0 0 0 hsl(var(--clr-white)) inset,
      hsl(var(--clr-blue)) 0 0 0 2px;
  }

  &::placeholder {
    font-size: var(--fs-base);
    font-weight: 300;
    color: hsl(var(--clr-grey));
  }
`;

export const TextArea = styled.textarea`
  box-shadow: inset hsl(var(--clr-grey)) 0 0 0 1px;
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
      hsl(var(--clr-blue)) 0 0 0 1px;
  }
  &:focus {
    background: hsl(var(--clr-white));
    outline: 0;
    box-shadow: 0 0 0 0 hsl(var(--clr-white)) inset,
      hsl(var(--clr-blue)) 0 0 0 2px;
  }

  &::placeholder {
    font-size: var(--fs-base);
    font-weight: 300;
    color: hsl(var(--clr-grey));
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
  opacity: 0.8;
`;

export const MessageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

export const SendingImg = styled(motion.img)`
  height: 5em;
  width: 5em;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

export const P = styled.p`
  font-weight: 500;
  font-size: var(--fs-md);
`;
