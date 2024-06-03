import './theme/reset.css';
import AppRouter from './router/AppRouter';
import useAsyncOnMount from './hooks/useAsyncOnMount';
import loadServices from './services/load-services';
import { useEffect } from 'react';
import { fetchUserDetailsThunk } from './store/actions/auth-actions';
import { useAppDispatch, useAppSelector } from './hooks/store-hooks';
import { tokenAuthSelector } from './store/selectors/auth-selectors';

function App() {
  const isReady = useAsyncOnMount(loadServices);
  const token = useAppSelector(tokenAuthSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserDetailsThunk());
  }, [token]);

  if (!isReady) {
    return null;
  }

  return <AppRouter />;
}

export default App;
