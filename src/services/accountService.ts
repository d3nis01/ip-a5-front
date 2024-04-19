import axios from 'axios';
import { IAccount, ICreateAccount } from '../types/IServiceTypesObjects';
import CustomError from '../utils/CustomError';
import api from './api';

export const createAccount = async (accountData: ICreateAccount): Promise<string> => {
  try {
    const response = await api.post('/accounts', accountData);
    const urlPath = response.data;
    const id = urlPath.split('/').pop();
    return id;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Error with API request', error.response?.status || 500, error.response?.data);
    } else {
      console.error('An unexpected error occurred:', error);
      throw new CustomError('An unexpected error occurred', 500);
    }
  }
};

export const getAccount = async (id: string): Promise<IAccount> => {
  try {
    const response = await api.get(`/accounts/${id}`);
    return response.data as IAccount;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to fetch account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};
