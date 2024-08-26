import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ErrorContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const ErrorMessage = styled(motion.h1)`
  font-size: 2rem;
  color: hsl(0, 0%, 18%);
  margin-bottom: 1rem;
`;

export const ErrorDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: hsl(0, 0%, 46%);
  margin-bottom: 2rem;
`;

export const BackButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: hsl(203, 78%, 27%);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: hsl(203, 78%, 37%);
  }
`;
