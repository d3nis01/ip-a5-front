import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../modules/home/Home';
import DeleteVpn from '../modules/DeleteVPN/DeleteVpn';
import { ROUTE__HOME, ROUTE__VPN_DELETE } from './constants';

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} path={ROUTE__HOME} key={ROUTE__HOME} />
          <Route element={<DeleteVpn />} path={ROUTE__VPN_DELETE} key={ROUTE__VPN_DELETE} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
