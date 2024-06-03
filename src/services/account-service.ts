import axios from 'axios';

import CustomError from '../utils/CustomError';
import api from '../api/api';
import {
  IAccountDeleteResponse,
  IAccountEmailVariantsGetResponse,
  IAccountEmailVariantsUpdateResponse,
  IAccountGetResponse,
  IAccountUpdateResponse,
  ICreateAccount,
  ICreateAccountResponse,
  UpdateAccountParams,
  UpdateAccountEmailVariantsParams,
} from '../types/IServiceTypesRequests';
import { mapAccountEmailVariantsResponseToAccountEmailVariants, mapAccountResponseToAccount } from '../mappers/account-mappers';

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

export const getAccount = async (id: string): Promise<IAccountGetResponse> => {
  try {
    const response = await api.get(`/accounts/${id}`);
    const data = mapAccountResponseToAccount(response.data);
    return { data: data, status: response.status, statusText: response.statusText };
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

export const updateAccount = async (id: string, params: UpdateAccountParams): Promise<IAccountUpdateResponse> => {
  try {
    const response = await api.put(`/accounts/${id}`, params);
    return { status: response.status, statusText: response.statusText };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to update Samba account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const getAccountEmailVariants = async (matricol: string): Promise<IAccountEmailVariantsGetResponse> => {
  try {
    const response = await api.get(`/accounts/mail/${matricol}`);
    const data = mapAccountEmailVariantsResponseToAccountEmailVariants(response.data);
    return { data: data, status: response.status, statusText: response.statusText };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to fetch account email variants', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const updateAccountEmailVariants = async (uuid: string, params: UpdateAccountEmailVariantsParams): Promise<IAccountEmailVariantsUpdateResponse> => {
  try {
    const response = await api.put(`/accounts/mail/${uuid}`, params);
    return { status: response.status, statusText: response.statusText };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to update account email variants', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};
