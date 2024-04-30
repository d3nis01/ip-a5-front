import axios from 'axios';
import { IAccount } from '../types/IServiceTypesObjects';
import CustomError from '../utils/CustomError';
import api from './api';
import { IAccountDeleteResponse, ICreateAccount, ICreateAccountResponse, UpdateAccountParams } from '../types/IServiceTypesRequests';
import { mapAccountResponseToAccount } from '../mappers/account-mappers';

export const createAccount = async (accountData: ICreateAccount): Promise<ICreateAccountResponse> => {
  try {
    const response = await api.post('/accounts', accountData);
    const locationHeader = response.headers['location'];
    const segments = locationHeader.split('/');
    const uuid = segments[segments.length - 1];
    return { uuid: uuid, status: response.status, statusText: response.statusText };
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
    const data = mapAccountResponseToAccount(response.data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to fetch account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const deleteAccount = async (id: string): Promise<IAccountDeleteResponse> => {
  try {
    const response = await api.delete(`/accounts/${id}`);
    return { status: response.status, statusText: response.statusText };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to delete account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const updateAccount = async (id: string, params: UpdateAccountParams): Promise<boolean> => {
  try {
    const response = await api.put(`/accounts/${id}`, params);
    return response.status == 200;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to update Samba account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};
