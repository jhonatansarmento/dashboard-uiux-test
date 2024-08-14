'use client';

import { profile } from '@/constants/profile';
import { ThemeContext } from '@/providers';
import Image from 'next/image';
import { useContext, useState } from 'react';
import {
  LuBell,
  LuContact,
  LuLayoutDashboard,
  LuLogIn,
  LuLogOut,
  LuMessageSquare,
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
  {
    name: 'Messages',
    icon: <LuMessageSquare size={18} />,
    component: 'Messages',
  },
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
  { name: 'Contato', icon: <LuContact size={18} />, component: 'Contacts' },
];

interface SidebarProps {
  onSelectComponent: (component: string) => void;
}

const Sidebar = ({ onSelectComponent }: SidebarProps) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<string>('Dashboard');

  const handleLoginClick = () => {
    if (!isLoggedIn) {
      setIsLoggedIn(true);
    }
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const handleMenuItemClick = (component: string) => {
    setSelectedMenu(component);
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
          isClickable={!isLoggedIn}
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
            <>
              <p>Olá, faça seu login</p>
              <LuLogIn size={18} />
            </>
          )}
        </S.LoginContainer>
        <S.NavItems>
          {menuItems.map((item) => (
            <S.NavItem
              key={item.name}
              isDarkMode={isDarkMode}
              isSelected={item.component === selectedMenu}
              isLoggedIn={isLoggedIn}
              onClick={() => handleMenuItemClick(item.component)}
            >
              {item.icon} {item.name}
            </S.NavItem>
          ))}
        </S.NavItems>
      </div>
      <S.BottomContainer>
        {isLoggedIn && (
          <S.LogoutButton onClick={handleLogoutClick} isDarkMode={isDarkMode}>
            <LuLogOut size={18} />
            <p>Sair</p>
          </S.LogoutButton>
        )}
        <ThemeToggle isDarkMode={isDarkMode} handleToggle={toggleTheme} />
      </S.BottomContainer>
    </S.SidebarContainer>
  );
};

export default Sidebar;
