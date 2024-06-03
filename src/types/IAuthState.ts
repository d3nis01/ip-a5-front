import { ICurrentUserDetails } from './ICurrentUserDetails';

interface IAuthState {
  token: string;
  state: boolean;
  isLoading: boolean;
  loginError: boolean | string;
  currentUserDetails: ICurrentUserDetails | null;
}

export default IAuthState;
