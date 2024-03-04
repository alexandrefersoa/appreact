import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes'; 
import { ThemeProvider } from '@emotion/react';
import { DarkTheme, LightTheme } from './themes';
import { AppThemeProvider } from './contexts/ThemeContext';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}
