import axios, { AxiosResponse } from 'axios';
import { ISamba } from '../types/IServiceTypesObjects';
import CustomError from '../utils/CustomError';
import api from './api';
import { ICreateSamba, ICreateSambaResponse, ISambaDeleteResponse, ISambaGetAllResponse, ISambaGetResponse, UpdateSambaParams } from '../types/IServiceTypesRequests';
import { mapSambaGetAllResponseToSambaArray, mapSambaResponseToSamba } from '../mappers/samba-mappers';

export const createSambaAccount = async (data: ICreateSamba): Promise<ICreateSambaResponse> => {
  try {
    const response = await api.post<ICreateSambaResponse>('/sambas', data);
    const locationHeader = response.headers['location'];
    const id = locationHeader?.split('/').pop(); // If `location` is undefined, `id` will be undefined too.
    console.log('Response:', response);
    console.log('UUID:', id);
    return { uuid: id, status: response.status, statusText: response.statusText };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error with API request:', error.response);
      throw new CustomError('Error with API request', error.response?.status || 500);
    } else {
      console.error('An unexpected error occurred:', error);
      throw new CustomError('An unexpected error occurred', 500);
    }
  }
};

export const getSambaAccount = async (id: string): Promise<ISambaGetResponse> => {
  try {
    const response = await api.get(`/sambas/${id}`);
    const data = mapSambaResponseToSamba(response.data);
    return { data, status: response.status, statusText: response.statusText };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to fetch account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const deleteSambaAccount = async (id: string): Promise<ISambaDeleteResponse> => {
  try {
    const response = await api.delete(`/sambas/${id}`);
    return { status: response.status, statusText: response.statusText };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to delete Samba account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const updateSambaAccount = async (id: string, params: UpdateSambaParams): Promise<any> => {
  try {
    const response = await api.put(`/sambas/${id}`, params);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to update Samba account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const getAllSambaAccount = async (): Promise<ISambaGetAllResponse> => {
  try {
    const response = await api.get(`/sambas`);
    const data = mapSambaGetAllResponseToSambaArray(response.data);
    return { data, status: response.status, statusText: response.statusText };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to fetch account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};
