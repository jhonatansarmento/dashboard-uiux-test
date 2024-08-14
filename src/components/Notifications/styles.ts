import styled from 'styled-components';

export const NotificationsContainer = styled.div`
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

export const NotificationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const NotificationItem = styled.li`
  background-color: ${({ theme }) => theme.sidebarBackground};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NotificationTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color};
`;

export const NotificationText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color};
`;
