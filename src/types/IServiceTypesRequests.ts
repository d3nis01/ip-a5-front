import { ISamba, IVpn, IAccount, IAccountEmailVariants } from './IServiceTypesObjects';

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

export interface IAccountGetResponse {
  data: IAccount;
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

export interface IAccountEmailVariantsGetResponse {
  data: IAccountEmailVariants;
  status: number;
  statusText: string;
}

export interface IAccountEmailVariantsUpdateResponse {
  status: number;
  statusText: string;
}

export interface UpdateAccountEmailVariantsParams {
  mail: string;
  mailAlternateAddress: string;
  userPassword: string;
  telephoneNumber: string;
}

export interface IAccountSendRecoveryCodeResponse {
  status: number;
  statusText: string;
}

export interface IAccountCheckRecoveryCodeResponse {
  status: number;
  statusText: string;
}

export interface AccountSendRecoveryCodeParams {
  email: string;
}

export interface AccountCheckRecoveryCodeParams {
  code: string;
}

export interface UpdateAccountParams {
  newUsername: string;
  newPassword: string;
  newEmail: string;
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
}

export interface ISambaDeleteResponse {
  status: number;
}

export interface IVpnDeleteResponse {
  status: number;
  statusText: string;
}
