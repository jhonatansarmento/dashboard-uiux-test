import styled from 'styled-components';

export const DashboardContainer = styled.div`
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

export const CardsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.sidebarBackground};
  padding: 1rem;
  border-radius: 8px;
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color};
`;

export const CardValue = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.iconColor};
`;
