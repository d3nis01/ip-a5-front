import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../modules/home/Home';
import GetAccount from '../modules/GetAccount/GetAccount';
import {ROUTE__ACCOUNT_GET } from './constants';
import GetVpn from '../modules/GetVpn/GetVpn';
import { ROUTE__SAMBA_GET, ROUTE__VPN_GET } from './constants';
import GetSamba from '../modules/GetSamba/GetSamba';
import PostAccount from '../modules/post-account/PostAccount';
import {ROUTE__ACCOUNT_POST } from './constants';
import { ROUTE__SAMBA_POST, ROUTE__VPN_POST } from './constants';
import PostSamba from '../modules/post-samba/PostSamba';
import PostVpn from '../modules/post-vpn/PostVpn';
import DeleteAccount from '../modules/DeleteAccount/DeleteAccount';
import {ROUTE__ACCOUNT_DELETE } from './constants';
import DeleteVpn from '../modules/DeleteVPN/DeleteVpn';
import { ROUTE__SAMBA_DELETE, ROUTE__VPN_DELETE } from './constants';
import DeleteSamba from '../modules/DeleteSamba/DeleteSamba';

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE__ACCOUNT_GET} element={<GetAccount />} />
          <Route path={ROUTE__VPN_GET} element={<GetVpn />} />
          <Route path={ROUTE__SAMBA_GET} element={<GetSamba />} />
          <Route path={ROUTE__ACCOUNT_POST} element={<PostAccount />} />
          <Route path={ROUTE__SAMBA_POST} element={<PostSamba />} />
          <Route path={ROUTE__VPN_POST} element={<PostVpn />} />
          <Route path={ROUTE__ACCOUNT_DELETE} element={<DeleteAccount />} />
          <Route path={ROUTE__VPN_DELETE} element={<DeleteVpn />} />
          <Route path={ROUTE__SAMBA_DELETE} element={<DeleteSamba />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
