import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 1rem 0 0.5rem;
`;

export const LangButton = styled(motion.img)`
  height: 23px;
  width: 30px;
  border-radius: 3px;
  object-fit: cover;
  cursor: pointer;
  box-shadow: hsl(var(--clr-dark), 0.3) 0px 2px 8px 0px;
`;
