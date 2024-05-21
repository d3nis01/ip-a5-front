import React, { useState } from 'react';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Link } from 'react-router-dom';

import {
  RegisterTitle,
  RegisterForm,
  RegisterLabel,
  RegisterInput,
  RegisterSubmitButton,
  RegisterContainer,
  RegisterInnerContainer,
  RegisterInputWrapper,
  RegisterInputError,
  RegisterImage,
  EyeButton,
  EyeIcon,
  LoginPageLink,
  RegisterWrapper,
} from '../register/styles';
import myImg from './assets/wallpaper.jpg';
import { createAccount } from '../../services/accountService';
import { ICreateAccount, ICreateAccountResponse } from '../../types/IServiceTypesRequests';
import { isMatricol } from '../../utils/forms/inputValidators';

const Register = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [type, setType] = useState('password');
  const [confirmpassword, setConfirmPassword] = useState<string>('');
  const [type2, setType2] = useState('confirmpassword');

  const [icon, setIcon] = useState(eyeOff);
  const [email, setEmail] = useState<string>('');
  const [matricol, setMatricol] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [registerResponse, setResponse] = useState<ICreateAccountResponse>();
  const [matricolError, setMatricolError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isMatricol(matricol) === false) {
      setMatricolError('Matricol is not valid');
      console.error('Matricol is not valid');
      return;
    }
    setMatricolError('');

    if (password !== confirmpassword) {
      setPasswordError('Passwords do not match');
      console.error('Passwords do not match');
      return;
    }
    setPasswordError('');

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

  const handleToggleConfirm = () => {
    if (type === 'password') {
      setIcon(eye);
      setType2('text');
    } else {
      setIcon(eyeOff);
      setType2('password');
    }
  };

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterImage src={myImg} alt="Register Image" />
        <RegisterInnerContainer>
          <RegisterTitle>Register</RegisterTitle>
          <RegisterForm onSubmit={handleSubmit}>
            <RegisterInputWrapper>
              <RegisterLabel htmlFor="email">Email</RegisterLabel>
              <RegisterInput type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@example.com" required />
            </RegisterInputWrapper>
            <RegisterInputWrapper>
              <RegisterLabel htmlFor="matricol">Registration number</RegisterLabel>
              <RegisterInput type="text" id="matricol" name="matricol" value={matricol} onChange={e => setMatricol(e.target.value)} placeholder="310RSL123123123123" required />
              {matricolError && <RegisterInputError>Matricol is not valid!</RegisterInputError>}
            </RegisterInputWrapper>
            <RegisterInputWrapper>
              <RegisterLabel htmlFor="password">Password</RegisterLabel>
              <RegisterInput type={type} id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="************" required />
              <EyeButton onClick={handleToggle}>
                <EyeIcon icon={icon} size={24} />
              </EyeButton>
            </RegisterInputWrapper>
            <RegisterInputWrapper>
              <RegisterLabel htmlFor="confirmpassword">Confirm Password</RegisterLabel>
              <RegisterInput
                type={type}
                id="confirmpassword"
                name="confirmpassword"
                value={confirmpassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="************"
                required
              />
              <EyeButton onClick={handleToggleConfirm}>
                <EyeIcon icon={icon} size={24} />
              </EyeButton>
            </RegisterInputWrapper>
            <LoginPageLink>
              <Link to="/login-page">Already have an account?</Link>
            </LoginPageLink>
            <RegisterSubmitButton type="submit">Register</RegisterSubmitButton>
          </RegisterForm>
          {isFormSubmitted && (
            <LoginPageLink>
              You have successfully registered. You can now <Link to="/login-page">login</Link>
            </LoginPageLink>
          )}
        </RegisterInnerContainer>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default Register;
