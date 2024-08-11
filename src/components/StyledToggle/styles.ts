import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  background-color: #016aa2;
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
`;

export const ToggleCircle = styled.div`
  width: 24px;
  height: 24px;
  background-color: #0d0d0e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: left 0.3s ease, background-color 0.3s ease;

  svg {
    color: #016aa2;
  }
`;
