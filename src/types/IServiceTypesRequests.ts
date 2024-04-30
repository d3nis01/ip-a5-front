import { ISamba, IVpn, IAccount } from './IServiceTypesObjects';

export interface ICreateAccount {
  username: string;
  password: string;
  email: string;
  matricol: string;
}

export interface UpdateAccountParams {
  Username: string;
  Password: string;
  Email: string;
}

export interface ICreateAccountResponse {
  uuid: string;
  status: number;
  statusText: string;
}
export interface IAccountGetResponse {
  data: IAccount;
  status: number;
  statusText: string;
}

export interface IAccountDeleteResponse {
  status: number;
  statusText: string;
}

export interface ICreateSamba {
  description: string;
  iPv4Address: string;
}

export interface ICreateSambaResponse {
  uuid: string;
  status: number;
  statusText: string;
}

export interface UpdateSambaParams {
  newIpAddress: string;
  newDescription?: string;
}


export interface ICreateVpn {
  description: string;
  iPv4Address: string;
}

export interface ICreateVpnResponse {
  uuid: string;
  status: number;
  statusText: string;
}

export interface UpdateVpnParams {
  newIpAddress: string;
  newDescription?: string;
}

export interface IVpnGetResponse {
  data: IVpn;
  status: number;
  statusText: string;
}

export interface ISambaGetResponse {
  data: ISamba;
  status: number;
  statusText: string;
}

export interface ISambaDeleteResponse {
  status: number;
  statusText: string;
}

export interface IVpnDeleteResponse {
  status: number;
  statusText: string;
}