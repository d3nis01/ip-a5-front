import { RootState } from '..';

export const isLoggedInAuthSelector = (state: RootState): boolean => Boolean(state.auth.state);
export const tokenAuthSelector = (state: RootState): string => state.auth.token;
export const currentUserDetailsSelector = (state: RootState) => state.auth.currentUserDetails;
export const isLoadingAuthSelector = (state: RootState) => state.auth.isLoading;
export const loginErrorAuthSelector = (state: RootState) => state.auth.loginError;
