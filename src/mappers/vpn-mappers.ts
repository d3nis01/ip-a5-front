import { IVpn } from '../types/IServiceTypesObjects';

export const mapVpnResponseToVpn = (data: Partial<IVpn>): IVpn => {
  const vpn: IVpn = {
    id: typeof data?.id === 'string' ? data.id : '',
    description: typeof data?.description === 'string' ? data.description : '',
    iPv4Address: typeof data?.iPv4Address === 'string' ? data.iPv4Address : '',
  };
  return vpn;
};

export const mapVpnGetAllResponseToVpnArray = (data: Partial<IVpn>[]): IVpn[] => {
  return data.map(item => mapVpnResponseToVpn(item));
};
