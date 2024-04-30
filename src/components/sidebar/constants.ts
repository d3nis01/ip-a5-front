import { ROUTE__SAMBA_DELETE, ROUTE__SAMBA_GET, ROUTE__SAMBA_GET_ALL, ROUTE__SAMBA_POST, ROUTE__VPN_DELETE, ROUTE__VPN_GET, ROUTE__VPN_GET_ALL, ROUTE__VPN_POST } from '../../router/constants';

export interface IMenuOption {
  title: string;
  route: string;
}

export const MENU_OPTIONS: IMenuOption[] = [
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
];
