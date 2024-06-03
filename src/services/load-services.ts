import { autoLogin } from './auth-service';

const loadServices = async (): Promise<void> => {
  autoLogin();
};

export default loadServices;
