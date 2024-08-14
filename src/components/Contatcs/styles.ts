import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.sidebarBackground};
  color: ${({ theme }) => theme.color};
  border-radius: 16px;
`;

export const ProfileImage = styled.div`
  margin-bottom: 1rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Position = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.iconColor};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color};
  }
`;
