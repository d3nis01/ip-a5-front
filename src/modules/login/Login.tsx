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
  LoginRememberWrrapper,
  ForgotPasswordLink,
  LoginWrapper,
} from '../login/styles';

import { createAccount } from '../../services/accountService';
import { ICreateAccount, ICreateAccountResponse } from '../../types/IServiceTypesRequests';
import { isMatricol } from '../../utils/forms/inputValidators';
import myImg from './assets/wallpaper.jpg';

const Login = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [email, setEmail] = useState<string>('');
  const [matricol, setMatricol] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [LoginResponse, setResponse] = useState<ICreateAccountResponse>();
  const [matricolError, setMatricolError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isMatricol(matricol) === false) {
      setMatricolError('Matricol is not valid');
      console.error('Matricol is not valid');
      return;
    }
    setMatricolError('');

    const requestObject: ICreateAccount = {
      username,
      password,
      email,
      matricol,
    };

    const response = await createAccount(requestObject);
    setResponse(response);
    setIsFormSubmitted(true);
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginImage src={myImg} alt="Login Image" />
        <LoginInnerContainer>
          <LoginTitle>Nice to see you again</LoginTitle>
          <LoginForm onSubmit={handleSubmit}>
            <LoginInputWrapper>
              <LoginLabel htmlFor="email">Email</LoginLabel>
              <LoginInput type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@example.com" required />
            </LoginInputWrapper>
            <LoginInputWrapper>
              <LoginLabel htmlFor="password">Password</LoginLabel>
              <LoginInput type={type} id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="************" required />
              <EyeButton onClick={handleToggle}>
                <EyeIcon icon={icon} size={24} />
              </EyeButton>
            </LoginInputWrapper>

            <LoginRememberWrrapper>
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </LoginRememberWrrapper>
            <ForgotPasswordLink>Forgot password?</ForgotPasswordLink>

            <LoginSubmitButton type="submit">SignIn</LoginSubmitButton>
          </LoginForm>
        </LoginInnerContainer>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
