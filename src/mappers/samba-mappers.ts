import { ISamba } from '../types/IServiceTypesObjects';

export const mapSambaResponseToSamba = (data: Partial<ISamba>): ISamba => {
  const samba: ISamba = {
    id: typeof data?.id === 'string' ? data.id : '',
    description: typeof data?.description === 'string' ? data.description : '',
    iPv4Address: typeof data?.iPv4Address === 'string' ? data.iPv4Address : '',
  };
  return samba;
};

export const mapSambaGetAllResponseToSambaArray = (data: Partial<ISamba>[]): ISamba[] => {
  return data.map(item => mapSambaResponseToSamba(item));
};
