import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.sidebarBackground};
  color: ${({ theme }) => theme.color};
  border-radius: 16px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  font-size: 1rem;
  line-height: 1.5;
`;
