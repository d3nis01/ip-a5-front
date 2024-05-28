import { createReducer } from '@reduxjs/toolkit';
import IAuthState from '../../types/IAuthState';
import { setRefreshTokenAuthAction, setStateAuthAction, setTokenAuthAction } from '../actions/auth-actions';

const initialState: IAuthState = {
  token: '',
  state: false,
  refreshToken: '',
};

const authReducer = createReducer(initialState, builder =>
  builder
    .addCase(setStateAuthAction, (state, action) => ({ ...state, state: action.payload }))
    .addCase(setTokenAuthAction, (state, action) => ({ ...state, token: action.payload }))
    .addCase(setRefreshTokenAuthAction, (state, action) => ({ ...state, refreshToken: action.payload })),
);

export default authReducer;
