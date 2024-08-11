'use client';

import { LuSun } from 'react-icons/lu';
import * as S from './styles';

export default function ThemeToggle() {
  return (
    <S.ToggleContainer>
      <S.ToggleCircle>
        <LuSun size={18} />
      </S.ToggleCircle>
    </S.ToggleContainer>
  );
}
