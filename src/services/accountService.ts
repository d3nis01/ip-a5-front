import axios from 'axios';
import { IAccount } from '../types/IServiceTypesObjects';
import CustomError from '../utils/CustomError';
import api from './api';
import { ICreateAccount, UpdateAccountParams } from '../types/IServiceTypesRequests';
import { mapAccountResponseToAccount } from '../mappers/account-mappers';

export const createAccount = async (accountData: ICreateAccount): Promise<string> => {
  try {
    const response = await api.post('/v1/accounts', accountData);
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
    const response = await api.get(`/v1/accounts/${id}`);
    const data = mapAccountResponseToAccount(response.data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to fetch account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const deleteAccount = async (id: string): Promise<boolean> => {
  try {
    const response = await api.delete(`/v1/accounts/${id}`);
    return response.status == 200;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to delete account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const updateAccount = async (id: string, params: UpdateAccountParams): Promise<any> => {
  try {
    const queryParams = new URLSearchParams();
    if (params.Username) {
      queryParams.append('Username', params.Username);
    }
    if (params.Password) {
      queryParams.append('Password', params.Password);
    }
    if (params.Email) {
      queryParams.append('Email', params.Email);
    }
    const response = await api.put(`/v1/accounts/update/${id}?${queryParams}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to update Samba account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};
