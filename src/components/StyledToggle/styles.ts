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
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1f1f22' : '#016aa2')};
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
`;

export const ToggleCircle = styled.div<ToggleProps>`
  width: 24px;
  height: 24px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#016aa2' : '#1f1f22')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3px;
  left: ${({ isDarkMode }) => (isDarkMode ? '3px' : '24px')};
  transition: left 0.3s ease, background-color 0.3s ease;

  svg {
    color: ${({ isDarkMode }) => (isDarkMode ? '#1f1f22' : '#016aa2')};
  }
`;
