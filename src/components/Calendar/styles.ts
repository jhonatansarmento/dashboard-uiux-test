import styled from 'styled-components';

export const CalendarContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.color};
`;

export const CalendarPlaceholder = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.sidebarBackground};
  border-radius: 8px;
  color: ${({ theme }) => theme.color};
  font-size: 1.2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
