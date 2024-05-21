import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { login, register } from './authService';
import { ILoginCredentials, IRegisterCredentials, AuthContextType, IUser } from '../../types/auth/AuthTypes';

const defaultAuthContext: AuthContextType = {
  user: null,
  token: null,
  handleLogin: async () => {},
  handleRegister: async () => {},
  handleLogout: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(Cookies.get('token') || null);

  useEffect(() => {
    if (token) {
      try {
        const parsedToken = JSON.parse(atob(token.split('.')[1]));
        console.log('Parsed Token:', parsedToken);
        setUser({ username: parsedToken.unique_name, email: '' });
        Cookies.set('token', token, { expires: 7 });
      } catch (error) {
        console.error('Error parsing token:', error);
        handleLogout();
      }
    } else {
      Cookies.remove('token');
      setUser(null);
    }
  }, [token]);

  const handleLogin = async (loginCredentials: ILoginCredentials) => {
    try {
      const data = await login(loginCredentials);
      if (data.token) {
        setToken(data.token);
        Cookies.set('token', data.token, { expires: 7 });
        const parsedToken = JSON.parse(atob(data.token.split('.')[1]));
        console.log('Parsed Token after login:', parsedToken);
        setUser({ username: parsedToken.unique_name, email: '' });
      } else {
        throw new Error('Login did not return a token');
      }
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  };

  const handleRegister = async (registerCredentials: IRegisterCredentials) => {
    try {
      const data = await register(registerCredentials);
      if (data) {
      } else {
        throw new Error('Registration did not return a token');
      }
    } catch (error) {
      console.error('Register Error:', error);
      throw error;
    }
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    Cookies.remove('token');
    console.log('User logged out');
  };

  return <AuthContext.Provider value={{ user, token, handleLogin, handleRegister, handleLogout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);
