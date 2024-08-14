'use client';

import Calendar from '@/components/Calendar';
import Dashboard from '@/components/Dashboard';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

const AppLayout = () => {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Calendar':
        return <Calendar />;

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
