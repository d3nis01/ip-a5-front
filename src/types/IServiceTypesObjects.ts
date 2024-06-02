export interface IAccount {
  id: string;
  username: string;
  password: string;
  email: string;
  matricol: string;
  createdOnUtc: string;
  lastUpdatedOnUtc: string;
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

export interface IAccountEmailVariants {
  uuid: string;
  firstName: string;
  lastName: string;
  mailVariant1: string;
  mailVariant2: string;
  mailVariant3: string;
}
