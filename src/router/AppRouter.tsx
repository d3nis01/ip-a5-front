import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../modules/home/Home';
import GetVpn from '../modules/GetVpn/GetVpn';
import { ROUTE__SAMBA_GET, ROUTE__SAMBA_GET_ALL, ROUTE__SAMBA_UPDATE, ROUTE__VPN_GET, ROUTE__VPN_GET_ALL, ROUTE__VPN_UPDATE } from './constants';
import GetSamba from '../modules/GetSamba/GetSamba';
import { ROUTE__SAMBA_POST, ROUTE__VPN_POST } from './constants';
import PostSamba from '../modules/post-samba/PostSamba';
import PostVpn from '../modules/post-vpn/PostVpn';
import DeleteVpn from '../modules/DeleteVPN/DeleteVpn';
import { ROUTE__SAMBA_DELETE, ROUTE__VPN_DELETE } from './constants';
import DeleteSamba from '../modules/DeleteSamba/DeleteSamba';
import SambaGetAll from '../modules/SambaGetAll/SambaGetAll';
import VpnGetAll from '../modules/VpnGetAll/VpnGetAll';
import UpdateSamba from '../modules/SambaUpdate/SambaUpdate';
import UpdateVpn from '../modules/vpnUpdate/VpnUpdate';

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE__VPN_GET} element={<GetVpn />} />
          <Route path={ROUTE__SAMBA_GET} element={<GetSamba />} />
          <Route path={ROUTE__SAMBA_POST} element={<PostSamba />} />
          <Route path={ROUTE__VPN_POST} element={<PostVpn />} />
          <Route path={ROUTE__VPN_GET_ALL} element={<VpnGetAll />} />
          <Route path={ROUTE__VPN_DELETE} element={<DeleteVpn />} />
          <Route path={ROUTE__SAMBA_DELETE} element={<DeleteSamba />} />
          <Route path={ROUTE__SAMBA_GET_ALL} element={<SambaGetAll />} />
          <Route path={ROUTE__SAMBA_UPDATE} element={<UpdateSamba />} />
          <Route path={ROUTE__VPN_UPDATE} element={<UpdateVpn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
