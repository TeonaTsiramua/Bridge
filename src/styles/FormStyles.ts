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
  align-items: center;
  width: 80%;
  gap: 0.5rem;
`;

export const Input = styled.input`
  box-shadow: inset #abacaf 0 0 0 2px;
  border: 0;
  background: rgba(0, 0, 0, 0);
  appearance: none;
  width: 50%;
  position: relative;
  border-radius: 3px;
  padding: 9px 12px;
  line-height: 1.4;
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 0 0 0 #fff inset, hsl(var(--clr-blue)) 0 0 0 2px;
  }
  &:focus {
    background: #fff;
    outline: 0;
    box-shadow: 0 0 0 0 #fff inset, hsl(var(--clr-blue)) 0 0 0 3px;
  }
`;

export const TextArea = styled.textarea`
  box-shadow: inset #abacaf 0 0 0 2px;
  border: 0;
  background: rgba(0, 0, 0, 0);
  appearance: none;
  width: 50%;
  position: relative;
  border-radius: 3px;
  padding: 9px 12px;
  line-height: 1.4;
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 0 0 0 #fff inset, hsl(var(--clr-blue)) 0 0 0 2px;
  }
  &:focus {
    background: #fff;
    outline: 0;
    box-shadow: 0 0 0 0 #fff inset, hsl(var(--clr-blue)) 0 0 0 3px;
  }
`;
