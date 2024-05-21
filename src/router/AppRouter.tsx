import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../modules/home/Home';
import { ROUTE_REGISTER } from './constants';
import Login from '../modules/login/Login';
import { ROUTE_LOGIN } from './constants';
import GetAccount from '../modules/GetAccount/GetAccount';
import { ROUTE__ACCOUNTE_UPDATE, ROUTE__ACCOUNT_GET } from './constants';
import GetVpn from '../modules/GetVpn/GetVpn';
import { ROUTE__SAMBA_GET, ROUTE__SAMBA_GET_ALL, ROUTE__SAMBA_UPDATE, ROUTE__VPN_GET, ROUTE__VPN_GET_ALL, ROUTE__VPN_UPDATE } from './constants';
import GetSamba from '../modules/GetSamba/GetSamba';
import PostAccount from '../modules/post-account/PostAccount';
import { ROUTE__ACCOUNT_POST } from './constants';
import { ROUTE__SAMBA_POST, ROUTE__VPN_POST } from './constants';
import PostSamba from '../modules/post-samba/PostSamba';
import PostVpn from '../modules/post-vpn/PostVpn';
import DeleteAccount from '../modules/DeleteAccount/DeleteAccount';
import { ROUTE__ACCOUNT_DELETE } from './constants';
import DeleteVpn from '../modules/DeleteVPN/DeleteVpn';
import { ROUTE__SAMBA_DELETE, ROUTE__VPN_DELETE } from './constants';
import DeleteSamba from '../modules/DeleteSamba/DeleteSamba';
import SambaGetAll from '../modules/SambaGetAll/SambaGetAll';
import VpnGetAll from '../modules/VpnGetAll/VpnGetAll';
import UpdateSamba from '../modules/SambaUpdate/SambaUpdate';
import UpdateVpn from '../modules/vpnUpdate/VpnUpdate';
import UpdateAccount from '../modules/UpdateAccount/UpdateAccount';
import useEventListeners from '../hooks/useEventListeners';
import { AuthProvider } from '../api/auth/AuthProvider';
import Register from '../modules/register/Register';

const AppRouter = (): JSX.Element => {
  useEventListeners();

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={ROUTE_REGISTER} element={<Register />} />
            <Route path={ROUTE_LOGIN} element={<Login />} />
            <Route path={ROUTE__ACCOUNT_GET} element={<GetAccount />} />
            <Route path={ROUTE__VPN_GET} element={<GetVpn />} />
            <Route path={ROUTE__SAMBA_GET} element={<GetSamba />} />
            <Route path={ROUTE__ACCOUNT_POST} element={<PostAccount />} />
            <Route path={ROUTE__SAMBA_POST} element={<PostSamba />} />
            <Route path={ROUTE__VPN_POST} element={<PostVpn />} />
            <Route path={ROUTE__VPN_GET_ALL} element={<VpnGetAll />} />
            <Route path={ROUTE__ACCOUNT_DELETE} element={<DeleteAccount />} />
            <Route path={ROUTE__VPN_DELETE} element={<DeleteVpn />} />
            <Route path={ROUTE__SAMBA_DELETE} element={<DeleteSamba />} />
            <Route path={ROUTE__SAMBA_GET_ALL} element={<SambaGetAll />} />
            <Route path={ROUTE__SAMBA_UPDATE} element={<UpdateSamba />} />
            <Route path={ROUTE__VPN_UPDATE} element={<UpdateVpn />} />
            <Route path={ROUTE__ACCOUNTE_UPDATE} element={<UpdateAccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRouter;
