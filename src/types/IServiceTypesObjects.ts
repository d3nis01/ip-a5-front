export interface IAccount {
  id: string;
  username: string;
  password: string;
  email: string;
  matricol: string;
}

export interface ISamba {
  id: string;
  description: string;
  iPv4Address: string;
}

export interface IVpn {
  id: string;
  description: string;
  iPv4Address: string;
}
