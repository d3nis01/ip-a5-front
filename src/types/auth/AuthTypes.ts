export interface ILoginCredentials {
  username: string;
  password: string;
}

export interface IRegisterCredentials {
  username: string;
  email: string;
  password: string;
}

export interface IUser {
  username: string;
  email: string;
}

export interface AuthContextType {
  user: IUser | null;
  token: string | null;
  handleLogin: (loginCredentials: ILoginCredentials) => Promise<void>;
  handleRegister: (registerCredentials: IRegisterCredentials) => Promise<void>;
  handleLogout: () => void;
}
