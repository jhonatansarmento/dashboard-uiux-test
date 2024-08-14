'use client';

import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/GlobalStyles';
import { darkTheme, lightTheme } from '@/styles/themes';
import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const handleToggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <StyledComponentsRegistry>
      <ThemeContext.Provider
        value={{ isDarkMode, toggleTheme: handleToggleTheme }}
      >
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </StyledComponentsRegistry>
  );
}
