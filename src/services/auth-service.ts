import { clearItem, getItem } from './storage-service';
import store from '../store';
import { setStateAuthAction, setTokenAuthAction, setUserDetailsAction } from '../store/actions/auth-actions';
import { ICurrentUserDetails } from '../types/ICurrentUserDetails';
import { ILoginCredentials, IRegisterCredentials } from '../types/auth/AuthTypes';
import api from '../api/api';
import { IResetPassword } from '../types/auth/IResetPassword';
import alertService from './alert-service';

export const TOKEN_AUTH = 'access-token';
export const REFRESH_TOKEN_AUTH = 'refresh-token';

export const loginRequest = async (userCredentials: ILoginCredentials) => {
  const response = await api.post('/auth/login', userCredentials);
  return response.data;
};

export const registerRequest = async (newUserCredentials: IRegisterCredentials) => {
  const response = await api.post('/auth/register', newUserCredentials);
  return response.data;
};

export const autoLogin = () => {
  const accessToken = getItem(TOKEN_AUTH);

  if (accessToken) {
    store.dispatch(setTokenAuthAction(accessToken));
    store.dispatch(setStateAuthAction(true));
  }
};

export const logout = () => {
  clearItem(TOKEN_AUTH);
  store.dispatch(setTokenAuthAction(''));
  store.dispatch(setStateAuthAction(false));
  store.dispatch(setUserDetailsAction(null));
};

export const fetchUserDetails = async (): Promise<ICurrentUserDetails> => {
  const response = await api.get('/auth/current-user-details');
  return response.data;
};

export const forgotPasswordRequest = async (email: string) => {
  const response = await api.post('/auth/forgot-password', { email });
  return response.data;
};

export const resetPasswordRequest = async (resetPasswordProps: IResetPassword) => {
  const response = await api.post('/auth/reset-password', resetPasswordProps);
  alertService.successAlert({ title: 'Success', message: 'Password reset successfully' });
  return response.data;
};
