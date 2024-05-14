import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding: 1rem;

  border: 1px solid hsl(var(--clr-light));
  border-radius: 8px;
  cursor: pointer;
`;

export const Title = styled.p`
  font-size: var(--fs-base);
  font-weight: 500;
`;

export const Img = styled.img`
  width: 20%;
  border-radius: 20px;
`;
