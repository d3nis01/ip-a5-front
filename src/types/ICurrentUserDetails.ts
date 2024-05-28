export interface ICurrentUserDetails {
  isAuthenticated: boolean;
  userName: string;
  claims: {
    [key: string]: string;
  };
}
