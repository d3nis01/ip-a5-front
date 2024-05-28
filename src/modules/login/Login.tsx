import React, { useState } from 'react';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import {
  LoginTitle,
  LoginForm,
  LoginLabel,
  LoginInput,
  LoginSubmitButton,
  LoginContainer,
  LoginInnerContainer,
  LoginInputWrapper,
  LoginImage,
  EyeButton,
  EyeIcon,
  ForgotPasswordLink,
  LoginWrapper,
  LoginInputError,
} from '../login/styles';
import { useAuth } from '../../api/auth/AuthProvider';
import myImg from './assets/wallpaper2.jpg';
import { ILoginCredentials } from '../../types/auth/AuthTypes';
import { LoginPageLink } from '../register/styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE_REGISTER, ROUTE__HOME } from '../../router/constants';

const Login = (): JSX.Element => {
  const { handleLogin } = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordType, setPasswordType] = useState<string>('password');
  const [loginError, setLoginError] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginCredentials: ILoginCredentials = {
      username,
      password,
    };

    try {
      await handleLogin(loginCredentials);
      setIsFormSubmitted(true);
      navigate(ROUTE__HOME);
    } catch (error: any) {
      if (error.response && error.response.data) {
        const { message } = error.response.data;
        setLoginError(message);
      } else {
        setLoginError('Login failed');
      }
      console.error('Login failed', error);
    }
  };

  const handleTogglePassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginImage src={myImg} alt="Login Image" />
        <LoginInnerContainer>
          <LoginTitle>Nice to see you again</LoginTitle>
          <LoginForm onSubmit={handleSubmit}>
            <LoginInputWrapper>
              <LoginLabel htmlFor="username">Username *</LoginLabel>
              <LoginInput type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
            </LoginInputWrapper>
            <LoginInputWrapper>
              <LoginLabel htmlFor="password">Password *</LoginLabel>
              <LoginInput type={passwordType} id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="************" required />
              <EyeButton type="button" onClick={handleTogglePassword}>
                <EyeIcon icon={passwordType === 'password' ? eyeOff : eye} size={24} />
              </EyeButton>
            </LoginInputWrapper>

            {/* <LoginRememberWrapper>
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </LoginRememberWrapper> */}
            <ForgotPasswordLink onClick={() => navigate(ROUTE_REGISTER)}>Don't have an account?</ForgotPasswordLink>

            {loginError && <LoginInputError>{loginError}</LoginInputError>}
            <LoginSubmitButton type="submit">Sign In</LoginSubmitButton>
          </LoginForm>
          {isFormSubmitted && <LoginPageLink>You have successfully logged in.</LoginPageLink>}
        </LoginInnerContainer>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
