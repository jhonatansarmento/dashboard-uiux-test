'use client';

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
  return (
    <S.SidebarContainer>
      <div>
        <S.Logo>
          <img src='/logo.svg' alt='TradeSee' />
          TradeSee
        </S.Logo>
        <S.LoginContainer>
          <p>Olá, faça seu login</p>
          <LuLogOut size={18} />
        </S.LoginContainer>
        <S.NavItems>
          {menuItems.map((item) => (
            <S.NavItem key={item.name}>
              {item.icon} {item.name}
            </S.NavItem>
          ))}
        </S.NavItems>
      </div>
      <S.ToggleButton>
        <ThemeToggle />
      </S.ToggleButton>
    </S.SidebarContainer>
  );
};

export default Sidebar;
