'use client';

import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

import Calendar from '@/components/Calendar';
import Dashboard from '@/components/Dashboard';
import Notifications from '@/components/Notifications';
import Settings from '@/components/Settings';
// import Contact from '@/components/Contact';

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
      // case 'Contact':
      //   return <Contact />;
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
