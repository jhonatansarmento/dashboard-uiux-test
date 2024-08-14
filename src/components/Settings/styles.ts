import styled from 'styled-components';

export const SettingsContainer = styled.div`
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

export const SettingsSection = styled.div`
  background-color: ${({ theme }) => theme.sidebarBackground};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color};
`;

export const SectionItem = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  padding: 0.5rem 0;
  &:hover {
    text-decoration: underline;
  }
`;
