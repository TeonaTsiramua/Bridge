import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: hsl(var(--clr-red));
  align-self: flex-end;
  width: 100%;
  border-top: 1px solid hsl(var(--clr-light), 0.5);
  padding: 0 0 3rem 0;

  & > div {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }

  & hr {
    border: 1px solid hsl(var(--clr-light), 0.5);
    width: 90%;
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & p {
    color: hsl(var(--clr-blue));
  }
`;

export const StLink = styled(Link)`
  color: hsl(var(--clr-dark));
  font-weight: 300;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
