import axios from 'axios';
import CustomError from '../utils/CustomError';
import api from './api';
import { ICreateVpn, ICreateVpnResponse, ISambaGetAllResponse, IVpnDeleteResponse, IVpnGetAllResponse, IVpnGetResponse, UpdateVpnParams } from '../types/IServiceTypesRequests';
import { mapVpnGetAllResponseToVpnArray, mapVpnResponseToVpn } from '../mappers/vpn-mappers';

export const createVpnAccount = async (data: ICreateVpn): Promise<ICreateVpnResponse> => {
  try {
    const response = await api.post('/vpns', data);
    return { uuid: response.data, status: response.status, statusText: response.statusText };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Error with API request', error.response?.status || 500, error.response?.data);
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
      throw new CustomError('Failed to fetch account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const deleteVpnAccount = async (id: string): Promise<IVpnDeleteResponse> => {
  try {
    const response = await api.delete(`/vpns/${id}`);
    return { status: response.status, statusText: response.statusText };
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

export const getAllVpnAccount = async (): Promise<IVpnGetAllResponse> => {
  try {
    const response = await api.get(`/vpns`);
    const data = mapVpnGetAllResponseToVpnArray(response.data);
    return { data, status: response.status, statusText: response.statusText };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to fetch account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};
