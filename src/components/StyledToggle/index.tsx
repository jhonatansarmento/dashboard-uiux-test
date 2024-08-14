'use client';

import { LuMoon, LuSun } from 'react-icons/lu';
import * as S from './styles';

interface ThemeToggleProps {
  isDarkMode: boolean;
  handleToggle: () => void;
}

export default function ThemeToggle({
  isDarkMode,
  handleToggle,
}: ThemeToggleProps) {
  return (
    <S.ToggleContainer onClick={handleToggle} isDarkMode={isDarkMode}>
      <S.ToggleCircle isDarkMode={isDarkMode}>
        {isDarkMode ? <LuSun size={18} /> : <LuMoon size={18} />}
      </S.ToggleCircle>
    </S.ToggleContainer>
  );
}
