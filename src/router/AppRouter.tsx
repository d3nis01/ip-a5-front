import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../modules/home/Home';
import DeleteVpn from '../modules/DeleteVPN/DeleteVpn';
import { ROUTE__SAMBA_DELETE, ROUTE__VPN_DELETE } from './constants';
import DeleteSamba from '../modules/DeleteSamba/DeleteSamba';

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE__VPN_DELETE} element={<DeleteVpn />} />
          <Route path={ROUTE__SAMBA_DELETE} element={<DeleteSamba />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
