import api from '../api';
import { ILoginCredentials, IRegisterCredentials } from '../../types/auth/AuthTypes';

export const login = async (userCredentials: ILoginCredentials) => {
  try {
    const response = await api.post(`/auth/login`, userCredentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (newUserCredentials: IRegisterCredentials) => {
  try {
    const response = await api.post(`/auth/register`, newUserCredentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
