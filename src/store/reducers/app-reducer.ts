import { createReducer } from '@reduxjs/toolkit';
import { IAppState } from '../../types/IAppState';
import { setAppIsLoadingAction, setAppIsModalOpenAction, setAppIsScrolledAction, setAppWidthAction, setIsMobileAction } from '../actions/app-actions';

const initialState: IAppState = {
  isAppModalOpen: false,
  isAppLoading: false,
  isMobile: window.innerWidth <= 992,
  isAppScrolled: false,
  appWidth: window.innerWidth,
};

const appReducer = createReducer(initialState, builder =>
  builder
    .addCase(setAppIsModalOpenAction, (state, action) => ({ ...state, isAppModalOpen: action.payload }))
    .addCase(setAppIsLoadingAction, (state, action) => ({ ...state, isAppLoading: action.payload }))
    .addCase(setIsMobileAction, (state, action) => ({ ...state, isMobile: action.payload }))
    .addCase(setAppIsScrolledAction, (state, action) => ({ ...state, isAppScrolled: action.payload }))
    .addCase(setAppWidthAction, (state, action) => ({ ...state, appWidth: action.payload })),
);

export default appReducer;
