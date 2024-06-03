import {
  ROUTE__ACCOUNTE_UPDATE,
  ROUTE__ACCOUNT_DELETE,
  ROUTE__ACCOUNT_GET,
  ROUTE__ACCOUNT_POST,
  ROUTE__SAMBA_DELETE,
  ROUTE__SAMBA_GET,
  ROUTE__SAMBA_GET_ALL,
  ROUTE__SAMBA_POST,
  ROUTE__SAMBA_UPDATE,
  ROUTE__VPN_DELETE,
  ROUTE__VPN_GET,
  ROUTE__VPN_GET_ALL,
  ROUTE__VPN_POST,
  ROUTE__VPN_UPDATE,
  ROUTE_REGISTER,
  ROUTE_LOGIN,
  ROUTE__ACCOUNT_EMAIL_VARIANTS_GET,
  ROUTE__ACCOUNT_EMAIL_VARIANTS_UPDATE,
} from '../../router/constants';

export interface IMenuOption {
  title: string;
  route: string;
}

export const MENU_OPTIONS: IMenuOption[] = [
  {
    title: 'Register',
    route: ROUTE_REGISTER,
  },
  {
    title: 'Login',
    route: ROUTE_LOGIN,
  },
  {
    title: 'Account GET',
    route: ROUTE__ACCOUNT_GET,
  },
  {
    title: 'Account POST',
    route: ROUTE__ACCOUNT_POST,
  },
  {
    title: 'Account DELETE',
    route: ROUTE__ACCOUNT_DELETE,
  },
  {
    title: 'Account UPDATE',
    route: ROUTE__ACCOUNTE_UPDATE,
  },
  {
    title: 'Account Email Variants GET',
    route: ROUTE__ACCOUNT_EMAIL_VARIANTS_GET,
  },
  {
    title: 'Account Email Variants UPDATE',
    route: ROUTE__ACCOUNT_EMAIL_VARIANTS_UPDATE,
  },
  {
    title: 'Samba GET',
    route: ROUTE__SAMBA_GET,
  },
  {
    title: 'Samba POST',
    route: ROUTE__SAMBA_POST,
  },
  {
    title: 'Samba DELETE',
    route: ROUTE__SAMBA_DELETE,
  },
  {
    title: 'Samba GET ALL',
    route: ROUTE__SAMBA_GET_ALL,
  },
  {
    title: 'Samba UPDATE',
    route: ROUTE__SAMBA_UPDATE,
  },
  {
    title: 'VPN GET',
    route: ROUTE__VPN_GET,
  },
  {
    title: 'VPN POST',
    route: ROUTE__VPN_POST,
  },
  {
    title: 'VPN DELETE',
    route: ROUTE__VPN_DELETE,
  },
  {
    title: 'VPN GET ALL',
    route: ROUTE__VPN_GET_ALL,
  },
  {
    title: 'VPN UPDATE',
    route: ROUTE__VPN_UPDATE,
  },
];
