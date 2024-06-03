import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../modules/home/Home';
import { ROUTE_REGISTER, ROUTE__ACCOUNT_EMAIL_VARIANTS_GET, ROUTE__ACCOUNT_EMAIL_VARIANTS_UPDATE, ROUTE__CHECK_RECOVERY_CODE, ROUTE__RESET_PASSWORD, ROUTE__SEND_RECOVERY_CODE } from './constants';
import Login from '../modules/login/Login';
import { ROUTE_LOGIN } from './constants';
import GetAccount from '../modules/account-get/GetAccount';
import { ROUTE__ACCOUNTE_UPDATE, ROUTE__ACCOUNT_GET } from './constants';
import GetVpn from '../modules/vpn-get/GetVpn';
import { ROUTE__SAMBA_GET, ROUTE__SAMBA_GET_ALL, ROUTE__SAMBA_UPDATE, ROUTE__VPN_GET, ROUTE__VPN_GET_ALL, ROUTE__VPN_UPDATE } from './constants';
import GetSamba from '../modules/samba-get/GetSamba';
import PostAccount from '../modules/account-post/PostAccount';
import { ROUTE__ACCOUNT_POST } from './constants';
import { ROUTE__SAMBA_POST, ROUTE__VPN_POST } from './constants';
import PostSamba from '../modules/samba-post/PostSamba';
import PostVpn from '../modules/vpn-post/PostVpn';
import DeleteAccount from '../modules/account-delete/DeleteAccount';
import { ROUTE__ACCOUNT_DELETE } from './constants';
import DeleteVpn from '../modules/vpn-delete/DeleteVpn';
import { ROUTE__SAMBA_DELETE, ROUTE__VPN_DELETE } from './constants';
import DeleteSamba from '../modules/samba-delete/DeleteSamba';
import SambaGetAll from '../modules/samba-get-all/SambaGetAll';
import VpnGetAll from '../modules/vpn-get-all/VpnGetAll';
import UpdateSamba from '../modules/samba-update/SambaUpdate';
import UpdateVpn from '../modules/vpn-update/VpnUpdate';
import UpdateAccount from '../modules/account-update/UpdateAccount';
import useEventListeners from '../hooks/useEventListeners';
import Register from '../modules/register/Register';
import SendRecoveryCode from '../modules/forgot-password/SendRecoveryCode/SendRecoveryCode';
import CheckRecoveryCode from '../modules/forgot-password/CheckRecoveryCode/CheckRecoveryCode';
import ResetPassword from '../modules/forgot-password/ResetPassword/ResetPassword';
import loadServices from '../services/load-services';
import GetAccountEmailVariants from '../modules/account-email-variants-get/GetAccountEmailVariants';
import UpdateAccountEmailVariants from '../modules/account-email-variants-put/UpdateAccountEmailVariants';

const AppRouter = (): JSX.Element => {
  useEventListeners();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE_REGISTER} element={<Register />} />
          <Route path={ROUTE_LOGIN} element={<Login />} />
          <Route path={ROUTE__SEND_RECOVERY_CODE} element={<SendRecoveryCode />} />
          <Route path={ROUTE__CHECK_RECOVERY_CODE} element={<CheckRecoveryCode />} />
          <Route path={ROUTE__RESET_PASSWORD} element={<ResetPassword />} />
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
          <Route path={ROUTE__ACCOUNT_EMAIL_VARIANTS_GET} element={<GetAccountEmailVariants />} />
          <Route path={ROUTE__ACCOUNT_EMAIL_VARIANTS_UPDATE} element={<UpdateAccountEmailVariants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
