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
  {
    name: 'Dashboard',
    icon: <LuLayoutDashboard size={18} />,
    component: 'Dashboard',
  },
  { name: 'Calendário', icon: <LuCalendar size={18} />, component: 'Calendar' },
  {
    name: 'Notificações',
    icon: <LuBell size={18} />,
    component: 'Notifications',
  },
  {
    name: 'Configurações',
    icon: <LuSettings size={18} />,
    component: 'Settings',
  },
  { name: 'Contato', icon: <LuContact size={18} />, component: 'Contact' },
];

interface SidebarProps {
  onSelectComponent: (component: string) => void;
}

const Sidebar = ({ onSelectComponent }: SidebarProps) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleMenuItemClick = (component: string) => {
    onSelectComponent(component);
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
            <S.NavItem
              key={item.name}
              isDarkMode={isDarkMode}
              onClick={() => handleMenuItemClick(item.component)}
            >
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
