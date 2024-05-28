import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  AUTH__FETCH_USER_DETAILS,
  AUTH__LOGIN,
  AUTH__LOGOUT,
  AUTH__REGISTER,
  AUTH__SET_LOADING_USER_DETAILS,
  AUTH__SET_REFRESH_TOKEN,
  AUTH__SET_STATE,
  AUTH__SET_TOKEN,
  AUTH__SET_USER_DETAILS,
  AUTH__SET_USER_DETAILS_ERROR,
} from '../constants';
import { ILoginCredentials, IRegisterCredentials } from '../../types/auth/AuthTypes';
import { AppDispatch, RootState } from '..';
import { TOKEN_AUTH, fetchUserDetails, loginRequest, registerRequest } from '../../api/auth/authService';
import { clearItem, setItem } from '../../services/storage-service';
import Swal from 'sweetalert2';
import { ICurrentUserDetails } from '../../types/ICurrentUserDetails';

export const setTokenAuthAction = createAction<string>(AUTH__SET_TOKEN);
export const setRefreshTokenAuthAction = createAction<string>(AUTH__SET_REFRESH_TOKEN);
export const setStateAuthAction = createAction<boolean>(AUTH__SET_STATE);
export const setUserDetailsAction = createAction<ICurrentUserDetails | null>(AUTH__SET_USER_DETAILS);

export const loginAuthActionAsync = createAsyncThunk<void, ILoginCredentials, { state: RootState }>(AUTH__LOGIN, async (data, thunkApi) => {
  // thunkApi.dispatch(setLoginErrorAuthAction(false));
  // thunkApi.dispatch(setLoadingAuthAction(true));
  try {
    const response = await loginRequest(data);
    if (response?.token) {
      thunkApi.dispatch(setTokenAuthAction(response.token));
      setItem(TOKEN_AUTH, response.token);
      thunkApi.dispatch(setStateAuthAction(true));
      // Swal.fire({ title: 'Login successfully', message: null });
      alert('Login successfully');
    } else {
      // Swal.fire({ title: 'Login Failed', message: 'Error from session, please reload!' });
      alert('Login Failed');
      // thunkApi.dispatch(setLoginErrorAuthAction(true));
    }
  } catch (err) {
    if (err) {
      // alertService.errorAlert({ title: 'Login Failed', message: err.data.detail });
      alert('Login Failed');
    }
    // thunkApi.dispatch(setLoginErrorAuthAction(true));
  } finally {
    // thunkApi.dispatch(setLoadingAuthAction(false));
  }
});

export const logoutActionAsync = createAsyncThunk<void, never, { state: RootState }>(AUTH__LOGOUT, async (_, thunkApi) => {
  // thunkApi.dispatch(resetDataAuthAction());
  clearItem(TOKEN_AUTH);
  thunkApi.dispatch(setStateAuthAction(false));
  // alertService.successAlert({ title: 'Logout successfully', message: null });
  alert('Logout successfully');
});

export const registerAuthActionAsync = createAsyncThunk<void, IRegisterCredentials, { state: RootState; dispatch: AppDispatch }>(AUTH__REGISTER, async (data, thunkApi) => {
  try {
    const response = await registerRequest(data);
    if (response?.token) {
      thunkApi.dispatch(setTokenAuthAction(response.token));
      setItem('access-token', response.token);
      thunkApi.dispatch(setStateAuthAction(true));
      alert('Registration successful');
    } else {
      alert('Registration Failed');
    }
  } catch (err) {
    if (err) {
      alert('Registration Failed');
    }
  } finally {
  }
});

export const fetchUserDetailsThunk = createAsyncThunk<void, void, { state: RootState; dispatch: AppDispatch }>(AUTH__FETCH_USER_DETAILS, async (_, thunkApi) => {
  try {
    const response = await fetchUserDetails();
    thunkApi.dispatch(setUserDetailsAction(response));
  } catch (err) {
    if (err) {
    }
  } finally {
  }
});
