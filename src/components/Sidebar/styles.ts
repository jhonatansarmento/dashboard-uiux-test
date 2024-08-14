import styled from 'styled-components';

interface ThemeProps {
  isDarkMode: boolean;
  isLoggedIn?: boolean;
  isSelected?: boolean;
  isClickable?: boolean;
}

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

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.color};

  h1 {
    font-size: 2.1rem;
    font-weight: bold;
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

  @media (max-width: 768px) {
    align-items: center;
  }
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

export const SidebarContainer = styled.div<ThemeProps>`
  width: 286px;
  height: 100vh;
  background-color: ${({ theme }) => theme.sidebarBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  transition: width 0.3s ease;

  svg {
    color: ${({ theme, isSelected }) => (isSelected ? theme.color : '')};
  }

  p {
    margin: 0;
    font-size: ${({ isLoggedIn }) => (isLoggedIn ? '0.9rem' : '1rem')};
    color: ${({ theme }) => theme.color};
  }

  @media (max-width: 768px) {
    width: 80px;
    padding: 1rem;

    ${Logo} {
      justify-content: center;

      h1 {
        display: none;
      }
    }

    ${LoginContainer} {
      justify-content: center;
      flex-direction: column;
      align-items: center;

      div,
      p {
        display: none;
      }
    }

    ${NavItems} {
      align-items: center;
    }

    ${NavItem} {
      justify-content: center;
      gap: 0.5rem;

      span {
        display: none;
      }
    }

    ${BottomContainer} {
      align-items: center;
    }

    ${LogoutButton} {
      justify-content: center;
      gap: 0.5rem;

      p {
        display: none;
      }
    }
  }
`;
