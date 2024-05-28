import { autoLogin } from '../api/auth/authService';

const loadServices = async (): Promise<void> => {
  autoLogin();
};

export default loadServices;
