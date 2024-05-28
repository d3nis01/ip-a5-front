import './theme/reset.css';
import AppRouter from './router/AppRouter';
import useAsyncOnMount from './hooks/useAsyncOnMount';
import loadServices from './services/load-services';

function App() {
  const isReady = useAsyncOnMount(loadServices);

  if (!isReady) {
    return null;
  }

  return <AppRouter />;
}

export default App;
