import { ROUTE__SAMBA_DELETE, ROUTE__SAMBA_GET, ROUTE__SAMBA_POST, ROUTE__VPN_DELETE, ROUTE__VPN_GET, ROUTE__VPN_POST, ROUTE__ACCOUNT_GET, ROUTE__ACCOUNT_POST, ROUTE__ACCOUNT_DELETE } from '../../router/constants';

export interface IMenuOption {
  title: string;
  route: string;
}

export const MENU_OPTIONS: IMenuOption[] = [
  {
    title: 'Accoount GET',
    route: ROUTE__ACCOUNT_GET,
  },
  {
    title: 'Accoount POST',
    route: ROUTE__ACCOUNT_POST,
  },
  {
    title: 'Accoount DELETE',
    route: ROUTE__ACCOUNT_DELETE,
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
];
