import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 90vw;
`;

export const H2 = styled.h2`
  font-size: var(--fs-lg);
  font-weight: 600;
`;

export const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const Ul = styled(motion.ul)`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0;
  padding: 0;
  gap: 1rem;
`;

export const Item = styled.li`
  flex: 0 0 auto;
  white-space: nowrap;
  list-style: none;
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 1rem;

  & > button {
    background: transparent;
    border-radius: 50%;
    aspect-ratio: 1;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    color: hsl(var(--clr-blue), 0.5);
    border: 1px solid hsl(var(--clr-blue), 0.5);
    padding: 5px;
    height: 35px;
    width: 35px;

    &:hover {
      color: hsl(var(--clr-blue), 1);
      border: 1px solid hsl(var(--clr-blue), 1);
    }
  }
`;
