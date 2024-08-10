'use client';

import GlobalStyles from '@/styles/GlobalStyles';
import { darkTheme, lightTheme } from '@/styles/themes';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export default function ThemeToggle({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      {children}
    </ThemeProvider>
  );
}
