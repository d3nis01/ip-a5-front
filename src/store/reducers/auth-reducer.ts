import { createReducer } from '@reduxjs/toolkit';
import IAuthState from '../../types/IAuthState';
import { setLoadingAuthAction, setLoginErrorAuthAction, setStateAuthAction, setTokenAuthAction, setUserDetailsAction } from '../actions/auth-actions';

const initialState: IAuthState = {
  token: '',
  state: false,
  currentUserDetails: null,
  isLoading: false,
  loginError: false,
};

const authReducer = createReducer(initialState, builder =>
  builder
    .addCase(setStateAuthAction, (state, action) => ({ ...state, state: action.payload }))
    .addCase(setTokenAuthAction, (state, action) => ({ ...state, token: action.payload }))
    .addCase(setLoadingAuthAction, (state, action) => ({ ...state, isLoading: action.payload }))
    .addCase(setLoginErrorAuthAction, (state, action) => ({ ...state, loginError: action.payload }))
    .addCase(setUserDetailsAction, (state, action) => ({ ...state, currentUserDetails: action.payload })),
);

export default authReducer;
