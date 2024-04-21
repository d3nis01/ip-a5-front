﻿import GetVpn from './modules/GetVpn/GetVpn';
﻿import GetSamba from './modules/GetSamba/GetSamba';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './theme/default-theme';
import AppRouter from './router/AppRouter';
function App() {
    return <AppRouter />;
    return (
        <ThemeProvider theme={defaultTheme}>
            {}
            <GetVpn/>
            {}
        </ThemeProvider>
    );
}

export default App;