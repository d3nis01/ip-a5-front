import axios from 'axios';
import CustomError from '../utils/CustomError';
import api from '../api/api';
import { ICreateVpn, IVpnGetResponse, UpdateVpnParams } from '../types/IServiceTypesRequests';
import { mapVpnGetAllResponseToVpnArray, mapVpnResponseToVpn } from '../mappers/vpn-mappers';
import alertService from './alert-service';
import { AUTHORIZATION_ERROR_TITLE, DEFAULT_ERROR_TITLE, DEFAULT_ERROR_MESSAGE } from './alert-service/alert-service';
import { IVpn } from '../types/IServiceTypesObjects';

export const createVpnAccount = async (data: ICreateVpn): Promise<void> => {
  try {
    await api.post('/vpns', data);

    alertService.successAlert({ title: 'Success', message: 'New vpn account created' });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error with API request:', error.response);
      alertService.errorAlert({ title: 'Error', message: error.message || 'An unexpected error occurred' });
      throw new CustomError('Error with API request', error.response?.status || 500);
    } else {
      console.error('An unexpected error occurred:', error);
      throw new CustomError('An unexpected error occurred', 500);
    }
  }
};

export const getVpnAccount = async (id: string): Promise<IVpnGetResponse> => {
  try {
    const response = await api.get(`/vpns/${id}`);
    const data = mapVpnResponseToVpn(response.data);
    return { data: data, status: response.status, statusText: response.statusText };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alertService.errorAlert({ title: DEFAULT_ERROR_TITLE, message: error.response?.data.message });
      throw new CustomError('Failed to fetch account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const deleteVpnAccount = async (id: string): Promise<boolean> => {
  try {
    await api.delete(`/vpns/${id}`);
    alertService.successAlert({ title: 'Success', message: 'Vpn account deleted' });
    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        alertService.errorAlert({ title: AUTHORIZATION_ERROR_TITLE, message: '' });
      } else {
        alertService.errorAlert({ title: DEFAULT_ERROR_TITLE, message: error.response?.data.message });
      }
    } else {
      alertService.errorAlert({ title: DEFAULT_ERROR_TITLE, message: DEFAULT_ERROR_MESSAGE });
    }

    return false;
  }
};

export const updateVpnAccount = async (id: string, params: UpdateVpnParams): Promise<void> => {
  try {
    await api.put(`/vpns/${id}`, params);
    alertService.successAlert({ title: 'Success', message: 'Vpn account updated' });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        alertService.errorAlert({ title: AUTHORIZATION_ERROR_TITLE, message: '' });
      } else {
        alertService.errorAlert({ title: DEFAULT_ERROR_TITLE, message: error.response?.data.message });
      }
    } else {
      alertService.errorAlert({ title: DEFAULT_ERROR_TITLE, message: DEFAULT_ERROR_MESSAGE });
    }
  }
};

export const getAllVpnAccount = async (): Promise<IVpn[]> => {
  try {
    const response = await api.get(`/vpns`);
    const data = mapVpnGetAllResponseToVpnArray(response.data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        alertService.errorAlert({ title: AUTHORIZATION_ERROR_TITLE, message: '' });
      } else {
        alertService.errorAlert({ title: DEFAULT_ERROR_TITLE, message: error.response?.data.message });
      }
    } else {
      alertService.errorAlert({ title: DEFAULT_ERROR_TITLE, message: DEFAULT_ERROR_MESSAGE });
    }
    return [];
  }
};
