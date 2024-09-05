import styled from 'styled-components';
import { device } from '../../../../styles/breakpoints';

export const Container = styled.div<{ $primary: boolean }>`
  display: flex;
  flex-direction: ${({ $primary }) => ($primary ? 'column' : 'row')};
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid hsl(var(--clr-light));
  border-radius: 8px;

  box-shadow: hsl(var(--clr-light)) 0px 2px 8px 0px;

  @media ${device.sm} {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div<{ $primary: boolean }>`
  width: ${({ $primary }) => ($primary ? '100%' : '30%')};
  min-width: 200px;
  min-height: 200px;
  aspect-ratio: 20/16;
  cursor: pointer;

  @media ${device.lg} {
    aspect-ratio: ${({ $primary }) => ($primary ? '16/9' : '1')};
  }

  @media ${device.sm} {
    width: 100%;
    aspect-ratio: 4/3;
  }
`;

export const Title = styled.p`
  padding: 1rem 1rem 0 0;
  font-size: var(--fs-sm);
  min-height: 4rem;
  font-weight: 500;
  display: -webkit-box;
  /* -webkit-line-clamp: 1; */
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${device.sm} {
    width: 100%;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 0.5rem;
  cursor: pointer;
`;

export const P = styled.p`
  font-size: var(--fs-sm);
`;

export const SP = styled.p`
  font-size: var(--fs-sm);
  color: hsl(var(--clr-white));
  background-color: hsl(var(--clr-grey));
  padding: 0.3rem 0.5rem;
  border-radius: 8px;
  text-align: center;
`;

export const RowDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  min-height: 3.75rem;
`;

export const Price = styled.p<{ $primary: boolean }>`
  font-size: var(--fs-base);
  font-weight: 500;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: ${({ $primary }) => ($primary ? 'row' : 'column')};

  gap: 0.5rem;
`;
