import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { ThemeProvider } from '@emotion/react';
import { DarkTheme, LightTheme } from './themes';
import { AppThemeProvider } from './contexts/ThemeContext';
import { Drawer, Menu } from '@mui/material';
import { MenuLateral } from './components';


export const App = () => {
  return (
    <AppThemeProvider>

      <BrowserRouter>

        <MenuLateral>
          <AppRoutes />
        </MenuLateral>

      </BrowserRouter>

    </AppThemeProvider>
  );
}
