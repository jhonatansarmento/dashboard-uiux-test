import styled from 'styled-components';

interface ThemeProps {
  isDarkMode: boolean;
  isLoggedIn?: boolean;
}

export const SidebarContainer = styled.div<ThemeProps>`
  width: 286px;
  height: 100vh;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#0d0d0e' : '#fff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
`;

export const Logo = styled.div`
  font-size: 2.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const LoginContainer = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  gap: ${({ isLoggedIn }) => (isLoggedIn ? '10px' : '10px')};
  margin-bottom: 4rem;
  padding: 0.75rem;
  border-radius: 16px;
  transition: background 0.3s ease;
  cursor: pointer;

  p {
    margin: 0;
    font-size: ${({ isLoggedIn }) => (isLoggedIn ? '0.9rem' : '1rem')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
  }

  p:nth-child(2) {
    font-size: 0.75rem;
    color: ${({ isDarkMode }) => (isDarkMode ? '#a0a0a0' : '#666')};
  }

  svg {
    color: ${({ isDarkMode }) => (isDarkMode ? '#016aa2' : '#000')};
    margin-left: auto;
  }

  &:hover {
    background: ${({ isDarkMode }) => (isDarkMode ? '#1f1f22' : '#f5f5f5')};
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NavItem = styled.li<ThemeProps>`
  display: flex;
  align-items: center;
  gap: 1.75rem;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 16px;
  transition: background 0.3s ease;

  svg {
    color: ${({ isDarkMode }) => (isDarkMode ? '#016aa2' : '#000')};
  }

  &:hover {
    background: ${({ isDarkMode }) => (isDarkMode ? '#1f1f22' : '#f5f5f5')};
  }
`;

export const ToggleButton = styled.div`
  padding: 0 0.75rem;
`;
