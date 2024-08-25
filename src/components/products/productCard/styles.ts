import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Container = styled.div<{ $primary: boolean }>`
  display: flex;
  flex-direction: ${({ $primary }) => ($primary ? 'column' : 'row')};
  align-items: center;
  width: 100%;
  height: ${({ $primary }) => ($primary ? '35vi' : '20vi')};
  gap: 1rem;
  padding: 1rem;
  border: 1px solid hsl(var(--clr-light));
  border-radius: 8px;
  cursor: pointer;
  box-shadow: hsl(var(--clr-light)) 0px 2px 8px 0px;
  max-height: ${({ $primary }) => ($primary ? '500px' : '350px')};

  @media ${device.md} {
    height: ${({ $primary }) => ($primary ? '50vi' : '35vi')};
  }

  @media ${device.sm} {
    height: ${({ $primary }) => ($primary ? '90vi' : '50vi')};
  }

  @media ${device.xs} {
    flex-direction: column;
    height: 100vi;
    max-height: 100vi;
  }
`;

export const Title = styled.p`
  align-self: start;
  padding: 1rem 1rem 0 1rem;
  font-size: var(--fs-sm);
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${device.sm} {
    width: 100%;
  }
`;

export const Wrapper = styled.div<{ $primary: boolean }>`
  width: ${({ $primary }) => ($primary ? '100%' : '30%')};
  height: ${({ $primary }) => ($primary ? '50%' : '100%')};

  @media ${device.lg} {
    height: ${({ $primary }) => ($primary ? '60%' : '100%')};
  }

  @media ${device.sm} {
    width: 100%;
  }

  @media ${device.xs} {
    height: 60%;
  }
`;
