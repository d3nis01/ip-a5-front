import axios from 'axios';
import CustomError from '../utils/CustomError';
import api from '../api/api';
import { ICreateSamba, ICreateSambaResponse, ISambaGetResponse, UpdateSambaParams } from '../types/IServiceTypesRequests';
import { mapSambaGetAllResponseToSambaArray, mapSambaResponseToSamba } from '../mappers/samba-mappers';
import alertService from './alert-service';
import { AUTHORIZATION_ERROR_TITLE, DEFAULT_ERROR_MESSAGE, DEFAULT_ERROR_TITLE } from './alert-service/alert-service';
import { ISamba } from '../types/IServiceTypesObjects';

export const createSambaAccount = async (data: ICreateSamba): Promise<void> => {
  try {
    await api.post('/sambas', data);

    alertService.successAlert({ title: 'Success', message: 'New samba account created' });
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

export const getSambaAccount = async (id: string): Promise<ISambaGetResponse> => {
  try {
    const response = await api.get(`/sambas/${id}`);
    const data = mapSambaResponseToSamba(response.data);
    return { data: data, status: response.status, statusText: response.statusText };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError('Failed to fetch account', error.response?.status || 500, error.response?.data);
    }
    throw error;
  }
};

export const deleteSambaAccount = async (id: string): Promise<boolean> => {
  try {
    await api.delete(`/sambas/${id}`);
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

export const updateSambaAccount = async (id: string, params: UpdateSambaParams): Promise<void> => {
  try {
    await api.put(`/sambas/${id}`, params);
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

export const getAllSambaAccount = async (): Promise<ISamba[]> => {
  try {
    const response = await api.get(`/sambas`);
    const data = mapSambaGetAllResponseToSambaArray(response.data);
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
