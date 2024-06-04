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
} from '../login/styles';
import uaicImage from './assets/uaic-image.jpg';
import { ILoginCredentials } from '../../types/auth/AuthTypes';
import { LoginPageLink } from '../register/styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE_REGISTER, ROUTE__AUTH_FORGOT_PASSWORD_FORM, ROUTE__HOME } from '../../router/constants';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { loginAuthActionAsync } from '../../store/actions/auth-actions';

const Login = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordType, setPasswordType] = useState<string>('password');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginCredentials: ILoginCredentials = {
      username,
      password,
    };

    try {
      const response = await dispatch(loginAuthActionAsync(loginCredentials));
      if (response.payload) {
        setIsFormSubmitted(true);
        navigate(ROUTE__HOME);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleTogglePassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginImage src={uaicImage} alt="Login Image" />
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
            <ForgotPasswordLink to={ROUTE__AUTH_FORGOT_PASSWORD_FORM}>Forgot password?</ForgotPasswordLink>
            <ForgotPasswordLink to={ROUTE_REGISTER}>Don't have an account?</ForgotPasswordLink>
            <LoginSubmitButton type="submit">Sign In</LoginSubmitButton>
          </LoginForm>
          {isFormSubmitted && <LoginPageLink>You have successfully logged in.</LoginPageLink>}
        </LoginInnerContainer>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
