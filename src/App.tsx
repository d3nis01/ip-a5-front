import DeleteVpn from './modules/DeleteVPN/DeleteVpn';
import DeleteSamba from './modules/DeleteSamba/DeleteSamba';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './theme/default-theme';
import AppRouter from './router/AppRouter';
function App() {
  return <AppRouter />;
}

export default App;
