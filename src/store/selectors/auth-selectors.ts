import { RootState } from '..';

export const isLoggedInAuthSelector = (state: RootState): boolean => Boolean(state.auth.state);
export const tokenAuthSelector = (state: RootState): string => state.auth.token;
export const refreshTokenAuthSelector = (state: RootState): string => state.auth.refreshToken;
