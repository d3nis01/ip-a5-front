import { createReducer } from '@reduxjs/toolkit';
import IAuthState from '../../types/IAuthState';
import { setRefreshTokenAuthAction, setStateAuthAction, setTokenAuthAction, setUserDetailsAction } from '../actions/auth-actions';

const initialState: IAuthState = {
  token: '',
  state: false,
  refreshToken: '',
  currentUserDetails: null,
};

const authReducer = createReducer(initialState, builder =>
  builder
    .addCase(setStateAuthAction, (state, action) => ({ ...state, state: action.payload }))
    .addCase(setTokenAuthAction, (state, action) => ({ ...state, token: action.payload }))
    .addCase(setRefreshTokenAuthAction, (state, action) => ({ ...state, refreshToken: action.payload }))
    .addCase(setUserDetailsAction, (state, action) => ({ ...state, currentUserDetails: action.payload })),
);

export default authReducer;
