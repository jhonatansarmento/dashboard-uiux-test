'use client';

import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

import Calendar from '@/components/Calendar';
import Contacts from '@/components/Contatcs';
import Dashboard from '@/components/Dashboard';
import Notifications from '@/components/Notifications';
import Settings from '@/components/Settings';

const AppLayout = () => {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Calendar':
        return <Calendar />;
      case 'Notifications':
        return <Notifications />;
      case 'Settings':
        return <Settings />;
      case 'Contacts':
        return <Contacts />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar onSelectComponent={setSelectedComponent} />
      <div style={{ flexGrow: 1, padding: '2rem' }}>
        {renderSelectedComponent()}
      </div>
    </div>
  );
};

export default AppLayout;
