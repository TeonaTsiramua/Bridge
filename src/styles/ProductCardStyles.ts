import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(var(--clr-white));
  border: 1px solid hsl(var(--clr-grey), 0.3);
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & hr {
    border: 1px solid hsl(var(--clr-grey), 0.2);
    width: 100%;
  }
`;

export const CardImg = styled.img`
  border-radius: 8px 8px 0 0;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
