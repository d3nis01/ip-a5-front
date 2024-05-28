import { ICurrentUserDetails } from './ICurrentUserDetails';

interface IAuthState {
  token: string;
  state: boolean;
  refreshToken: string;
  currentUserDetails: ICurrentUserDetails | null;
}

export default IAuthState;
