'use client';

import { profile } from '@/constants/profile';
import { ThemeContext } from '@/providers';
import Image from 'next/image';
import { useContext, useState } from 'react';
import {
  LuBell,
  LuCalendar,
  LuContact,
  LuLayoutDashboard,
  LuLogOut,
  LuSettings,
} from 'react-icons/lu';
import ThemeToggle from '../StyledToggle';
import * as S from './styles';

const menuItems = [
  { name: 'Dashboard', icon: <LuLayoutDashboard size={18} /> },
  { name: 'Calendário', icon: <LuCalendar size={18} /> },
  { name: 'Notificações', icon: <LuBell size={18} /> },
  { name: 'Configurações', icon: <LuSettings size={18} /> },
  { name: 'Contato', icon: <LuContact size={18} /> },
];

const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <S.SidebarContainer isDarkMode={isDarkMode}>
      <div>
        <S.Logo>
          <Image width={42} height={42} src='/logo.svg' alt='TradeSee' />
          TradeSee
        </S.Logo>
        <S.LoginContainer
          isDarkMode={isDarkMode}
          onClick={handleLoginClick}
          isLoggedIn={isLoggedIn}
        >
          {isLoggedIn ? (
            <>
              <Image
                src={profile.image}
                width={42}
                height={42}
                alt={profile.name}
                style={{ borderRadius: '50%' }}
              />
              <div>
                <p>{profile.name}</p>
                <p>{profile.email}</p>
              </div>
            </>
          ) : (
            <p>Olá, faça seu login</p>
          )}
          <LuLogOut size={18} />
        </S.LoginContainer>
        <S.NavItems>
          {menuItems.map((item) => (
            <S.NavItem key={item.name} isDarkMode={isDarkMode}>
              {item.icon} {item.name}
            </S.NavItem>
          ))}
        </S.NavItems>
      </div>
      <S.ToggleButton>
        <ThemeToggle isDarkMode={isDarkMode} handleToggle={toggleTheme} />
      </S.ToggleButton>
    </S.SidebarContainer>
  );
};

export default Sidebar;
