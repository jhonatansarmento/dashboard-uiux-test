import styled from 'styled-components';

interface ThemeProps {
  isDarkMode: boolean;
  isLoggedIn?: boolean;
  isSelected?: boolean;
  isClickable?: boolean;
}

export const SidebarContainer = styled.div<ThemeProps>`
  width: 286px;
  height: 100vh;
  background-color: ${({ theme }) => theme.sidebarBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;

  svg {
    color: ${({ theme, isSelected }) => (isSelected ? theme.color : '')};
  }

  p {
    margin: 0;
    font-size: ${({ isLoggedIn }) => (isLoggedIn ? '0.9rem' : '1rem')};
    color: ${({ theme }) => theme.color};
  }
`;

export const Logo = styled.div`
  font-size: 2.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.color};
`;

export const LoginContainer = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  gap: ${({ isLoggedIn }) => (isLoggedIn ? '10px' : '10px')};
  margin-bottom: 4rem;
  padding: 0.75rem;
  border-radius: 16px;
  transition: background 0.3s ease;
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};

  p:nth-child(2) {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.color};
  }

  &:hover {
    background: ${({ theme, isClickable }) =>
      isClickable && theme.sidebarHover};
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

  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.sidebarSelected : 'transparent'};

  svg {
    color: ${({ theme, isSelected }) =>
      isSelected ? theme.color : theme.iconColor};
  }

  &:hover {
    background-color: ${({ theme, isSelected }) =>
      !isSelected && theme.sidebarHover};
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0.75rem;
  gap: 1rem;
`;

export const LogoutButton = styled.button<ThemeProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.3s ease;
  color: ${({ theme }) => theme.ToggleIconColor};

  &:hover {
    color: ${({ theme }) => theme.color};
  }
`;
