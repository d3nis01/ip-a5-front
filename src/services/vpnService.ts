import axios from 'axios';
import { IVpn } from '../types/IServiceTypesObjects';
import CustomError from '../utils/CustomError';
import api from './api';
import { ICreateVpn, UpdateVpnParams } from '../types/IServiceTypesRequests';
import { mapVpnResponseToVpn } from '../mappers/vpn-mappers';

export const createVpnAccount = async (data: ICreateVpn): Promise<string> => {
  try {
    const response = await api.post('/vpn', data);
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

export const getVpnAccount = async (id: string): Promise<IVpn> => {
  try {
    const response = await api.get(`/vpn/${id}`);
    const data = mapVpnResponseToVpn(response.data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to fetch account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const deleteVpnAccount = async (id: string): Promise<boolean> => {
  try {
    const response = await api.delete(`/vpn/${id}`);
    return response.status == 200;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to delete VPN account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const updateVpnAccount = async (id: string, params: UpdateVpnParams): Promise<any> => {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append('newIpAddress', params.newIpAddress);
    if (params.newDescription) {
      queryParams.append('newDescription', params.newDescription);
    }
    const response = await api.put(`/vpn/update/${id}?${queryParams}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to update Vpn account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};
