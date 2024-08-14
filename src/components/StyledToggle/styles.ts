import styled from 'styled-components';

interface ToggleProps {
  isDarkMode: boolean;
}

export const ToggleContainer = styled.div<ToggleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 30px;
  background-color: ${({ theme }) => theme.sidebarHover};
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
`;

export const ToggleCircle = styled.div<ToggleProps>`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.backgroundIcon};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3px;
  left: ${({ isDarkMode }) => (isDarkMode ? '3px' : '24px')};
  transition: left 0.3s ease, background-color 0.3s ease;

  svg {
    color: ${({ theme }) => theme.ToggleIconColor || theme.iconColor};
  }
`;
