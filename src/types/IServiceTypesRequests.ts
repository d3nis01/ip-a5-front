import { ISamba, IVpn } from './IServiceTypesObjects';

export interface ICreateAccount {
  username: string;
  password: string;
  email: string;
  matricol: string;
}

export interface ICreateAccountResponse {
  uuid: string;
  status: number;
  statusText: string;
}

export interface IAccountDeleteResponse {
  status: number;
  statusText: string;
}

export interface IAccountUpdateResponse {
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

export interface UpdateAccountParams {
  Username: string;
  Password: string;
  Email: string;
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

export interface IVpnUpdateResponse {
  status: number;
  statusText: string;
}

export interface IVpnGetResponse {
  data: IVpn;
  status: number;
  statusText: string;
}

export interface IVpnGetAllResponse {
  data: IVpn[];
  status: number;
  statusText: string;
}

export interface ISambaGetResponse {
  data: ISamba;
  status: number;
  statusText: string;
}

export interface ISambaUpdateResponse {
  status: number;
  statusText: string;
}

export interface ISambaGetAllResponse {
  data: ISamba[];
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
