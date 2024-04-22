import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../modules/home/Home';
import GetVpn from '../modules/GetVpn/GetVpn';
import { ROUTE__SAMBA_GET, ROUTE__VPN_GET } from './constants';
import GetSamba from '../modules/GetSamba/GetSamba';
import { ROUTE__SAMBA_POST, ROUTE__VPN_POST } from './constants';
import PostSamba from '../modules/post-samba/PostSamba';
import PostVpn from '../modules/post-vpn/PostVpn';

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE__SAMBA_POST} element={<PostSamba />} />
          <Route path={ROUTE__VPN_POST} element={<PostVpn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
