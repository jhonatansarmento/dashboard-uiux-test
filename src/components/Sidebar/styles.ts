// components/Sidebar/styles.ts
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 286px;
  height: 100vh;
  background-color: #0d0d0e;
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

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4rem;
  padding: 0.75rem;
  border-radius: 16px;
  transition: background 0.3s ease;
  cursor: pointer;

  svg {
    color: #016aa2;
  }

  &:hover {
    background: #1f1f22;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.75rem;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 16px;
  transition: background 0.3s ease;

  svg {
    color: #016aa2;
  }

  &:hover {
    background: #1f1f22;
  }
`;

export const ToggleButton = styled.div`
  padding: 0 0.75rem;
`;
