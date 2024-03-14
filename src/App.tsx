import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider, DrawerProvider } from './contexts';
import { MenuLateral } from './components';
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes/>
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};