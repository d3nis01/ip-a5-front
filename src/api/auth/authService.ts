import { clearItem, getItem } from '../../services/storage-service';
import store from '../../store';
import { setRefreshTokenAuthAction, setStateAuthAction, setTokenAuthAction, setUserDetailsAction } from '../../store/actions/auth-actions';
import { ICurrentUserDetails } from '../../types/ICurrentUserDetails';
import { ILoginCredentials, IRegisterCredentials } from '../../types/auth/AuthTypes';
import api from '../api';

export const TOKEN_AUTH = 'access-token';
export const REFRESH_TOKEN_AUTH = 'refresh-token';

// export const login = async (userCredentials: ILoginCredentials) => {
//   try {
//     const response = await api.post('/auth/login', userCredentials);
//     const { token, refreshToken } = response.data;
//     setItem(TOKEN_AUTH, token);
//     setItem(REFRESH_TOKEN_AUTH, refreshToken);
//     store.dispatch(setTokenAuthAction(token));
//     store.dispatch(setRefreshTokenAuthAction(refreshToken));
//     store.dispatch(setStateAuthAction(true));
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const register = async (newUserCredentials: IRegisterCredentials) => {
//   try {
//     const response = await api.post('/auth/register', newUserCredentials);
//     const { token, refreshToken } = response.data;
//     setItem(TOKEN_AUTH, token);
//     setItem(REFRESH_TOKEN_AUTH, refreshToken);
//     store.dispatch(setTokenAuthAction(token));
//     store.dispatch(setRefreshTokenAuthAction(refreshToken));
//     store.dispatch(setStateAuthAction(true));
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

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
  const refreshToken = getItem(REFRESH_TOKEN_AUTH);

  if (accessToken && refreshToken) {
    store.dispatch(setTokenAuthAction(accessToken));
    store.dispatch(setRefreshTokenAuthAction(refreshToken));
    store.dispatch(setStateAuthAction(true));
  }
};

export const logout = () => {
  clearItem(TOKEN_AUTH);
  clearItem(REFRESH_TOKEN_AUTH);
  store.dispatch(setTokenAuthAction(''));
  store.dispatch(setStateAuthAction(false));
  store.dispatch(setUserDetailsAction(null));
};

export const fetchUserDetails = async (): Promise<ICurrentUserDetails> => {
  const response = await api.get('/auth/currentUserDetails');
  return response.data;
};
