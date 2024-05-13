import { createAction } from '@reduxjs/toolkit';
import { APP__SET_APP_WIDTH, APP__SET_IS_MOBILE, APP__SET_LOADING, APP__SET_MODAL_OPEN, APP__SET_SCROLLED } from '../constants';

export const setAppIsModalOpenAction = createAction<boolean>(APP__SET_MODAL_OPEN);
export const setAppIsLoadingAction = createAction<boolean>(APP__SET_LOADING);
export const setIsMobileAction = createAction<boolean>(APP__SET_IS_MOBILE);
export const setAppIsScrolledAction = createAction<boolean>(APP__SET_SCROLLED);
export const setAppWidthAction = createAction<number>(APP__SET_APP_WIDTH);
