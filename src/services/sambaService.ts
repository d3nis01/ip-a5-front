import axios from 'axios';
import { ISamba } from '../types/IServiceTypesObjects';
import CustomError from '../utils/CustomError';
import api from './api';
import { ICreateSamba, UpdateSambaParams } from '../types/IServiceTypesRequests';
import { mapSambaResponseToSamba } from '../mappers/samba-mappers';

export const createSambaAccount = async (data: ICreateSamba): Promise<string> => {
  try {
    const response = await api.post('/samba', data);
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

export const getSambaAccount = async (id: string): Promise<ISamba> => {
  try {
    const response = await api.get(`/samba/${id}`);
    const data = mapSambaResponseToSamba(response.data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to fetch account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const deleteSambaAccount = async (id: string): Promise<boolean> => {
  try {
    const response = await api.delete(`/samba/${id}`);
    return response.status == 200;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to delete Samba account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const updateSambaAccount = async (id: string, params: UpdateSambaParams): Promise<any> => {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append('newIpAddress', params.newIpAddress);
    if (params.newDescription) {
      queryParams.append('newDescription', params.newDescription);
    }
    const response = await api.put(`/samba/update/${id}?${queryParams}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to update Samba account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};
