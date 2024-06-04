import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH__FETCH_USER_DETAILS, AUTH__LOGIN, AUTH__LOGOUT, AUTH__REGISTER, AUTH__SET_LOADING, AUTH__SET_LOGIN_ERROR, AUTH__SET_STATE, AUTH__SET_TOKEN, AUTH__SET_USER_DETAILS } from '../constants';
import { ILoginCredentials, IRegisterCredentials } from '../../types/auth/AuthTypes';
import { AppDispatch, RootState } from '..';
import { TOKEN_AUTH, fetchUserDetails, loginRequest, registerRequest } from '../../services/auth-service';
import { clearItem, setItem } from '../../services/storage-service';
import { ICurrentUserDetails } from '../../types/ICurrentUserDetails';
import Swal from 'sweetalert2';
import { IRegisterReturnType } from '../../types/auth/IRegisterReturnType';
import alertService from '../../services/alert-service';

export const setTokenAuthAction = createAction<string>(AUTH__SET_TOKEN);
export const setStateAuthAction = createAction<boolean>(AUTH__SET_STATE);
export const setUserDetailsAction = createAction<ICurrentUserDetails | null>(AUTH__SET_USER_DETAILS);
export const setLoginErrorAuthAction = createAction<boolean>(AUTH__SET_LOGIN_ERROR);
export const setLoadingAuthAction = createAction<boolean>(AUTH__SET_LOADING);

export const loginAuthActionAsync = createAsyncThunk<boolean, ILoginCredentials, { state: RootState }>(AUTH__LOGIN, async (data, thunkApi) => {
  thunkApi.dispatch(setLoginErrorAuthAction(false));
  thunkApi.dispatch(setLoadingAuthAction(true));
  try {
    const response = await loginRequest(data);
    if (response?.token) {
      thunkApi.dispatch(setTokenAuthAction(response.token));
      setItem(TOKEN_AUTH, response.token);
      thunkApi.dispatch(setStateAuthAction(true));
      Swal.fire({
        title: 'Login successfully',
        icon: 'success',
        timer: 2000,
      });
      thunkApi.dispatch(setLoadingAuthAction(false));
      return true;
    } else {
      Swal.fire({
        title: 'Login Failed',
        text: response.message,
        icon: 'error',
        confirmButtonColor: '#3085d6',
      });
      thunkApi.dispatch(setLoginErrorAuthAction(response.message));
      return false;
    }
  } catch (err: any) {
    if (err) {
      Swal.fire({
        title: 'Login Failed',
        text: err.response?.data?.message || 'An error occurred',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      });
      thunkApi.dispatch(setLoginErrorAuthAction(err.response?.data?.message || 'An error occurred'));
    }
    return false;
  } finally {
    thunkApi.dispatch(setLoadingAuthAction(false));
  }
});

export const logoutActionAsync = createAsyncThunk<void, never, { state: RootState }>(AUTH__LOGOUT, async (_, thunkApi) => {
  clearItem(TOKEN_AUTH);
  thunkApi.dispatch(setStateAuthAction(false));

  alertService.successAlert({ title: 'Logout', message: 'You have been logged out' });
});

export const registerAuthActionAsync = createAsyncThunk<IRegisterReturnType, IRegisterCredentials, { state: RootState; dispatch: AppDispatch }>(AUTH__REGISTER, async (data, thunkApi) => {
  thunkApi.dispatch(setLoginErrorAuthAction(false));
  thunkApi.dispatch(setLoadingAuthAction(true));
  try {
    const response = await registerRequest(data);
    thunkApi.dispatch(setTokenAuthAction(response.token));
    setItem(TOKEN_AUTH, response.token);
    thunkApi.dispatch(setStateAuthAction(true));
    Swal.fire({
      title: 'Registration successful',
      icon: 'success',
      timer: 2000,
    });
    thunkApi.dispatch(setLoadingAuthAction(false));
    return response;
  } catch (err: any) {
    if (err) {
      Swal.fire({
        title: 'Registration Failed',
        text: err.response?.data?.message || 'An error occurred',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      });
      thunkApi.dispatch(setLoginErrorAuthAction(err.response?.data?.message || 'An error occurred'));
      return false;
    }
  } finally {
    thunkApi.dispatch(setLoadingAuthAction(false));
  }
});

export const fetchUserDetailsThunk = createAsyncThunk<void, void, { state: RootState; dispatch: AppDispatch }>(AUTH__FETCH_USER_DETAILS, async (_, thunkApi) => {
  try {
    const response = await fetchUserDetails();
    thunkApi.dispatch(setUserDetailsAction(response));
  } catch (err) {
    throw err;
  }
});
