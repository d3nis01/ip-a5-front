export interface ICreateAccount {
  username: string;
  email: string;
  matricol: string;
}

export interface ICreateSamba {
  description: string;
  iPv4Address: string;
}

export interface UpdateSambaParams {
  newIpAddress: string;
  newDescription?: string;
}

export interface ICreateVpn {
  description: string;
  iPv4Address: string;
}

export interface UpdateVpnParams {
  newIpAddress: string;
  newDescription?: string;
}
