import React, { useState } from 'react';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Link, useNavigate } from 'react-router-dom';
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
import uaicImage from './assets/uaic-image.jpg';
import { IRegisterCredentials } from '../../types/auth/AuthTypes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { registerAuthActionAsync } from '../../store/actions/auth-actions';
import { ROUTE_LOGIN } from '../../router/constants';

const Register = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordType, setPasswordType] = useState<string>('password');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [confirmPasswordType, setConfirmPasswordType] = useState<string>('password');
  const [email, setEmail] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>('');
  const [registerError, setRegisterError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      console.error('Passwords do not match');
      return;
    }
    setPasswordError('');

    const registerCredentials: IRegisterCredentials = {
      username,
      email,
      password,
    };

    try {
      const reponse = await dispatch(registerAuthActionAsync(registerCredentials)).unwrap();
      if (reponse) {
        setIsFormSubmitted(true);
        navigate(ROUTE_LOGIN);
      }
    } catch (error) {
      console.error('Registration failed', error);
      setRegisterError('Registration failed');
    }
  };

  const handleTogglePassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const handleToggleConfirmPassword = () => {
    setConfirmPasswordType(confirmPasswordType === 'password' ? 'text' : 'password');
  };

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterImage src={uaicImage} alt="Register Image" />
        <RegisterInnerContainer>
          <RegisterTitle>Register</RegisterTitle>
          <RegisterForm onSubmit={handleSubmit}>
            <RegisterInputWrapper>
              <RegisterLabel htmlFor="email">Email *</RegisterLabel>
              <RegisterInput type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@example.com" required />
            </RegisterInputWrapper>
            <RegisterInputWrapper>
              <RegisterLabel htmlFor="username">Username *</RegisterLabel>
              <RegisterInput type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
            </RegisterInputWrapper>
            <RegisterInputWrapper>
              <RegisterLabel htmlFor="password">Password *</RegisterLabel>
              <RegisterInput type={passwordType} id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="************" required />
              <EyeButton type="button" onClick={handleTogglePassword}>
                <EyeIcon icon={passwordType === 'password' ? eyeOff : eye} size={24} />
              </EyeButton>
            </RegisterInputWrapper>
            <RegisterInputWrapper>
              <RegisterLabel htmlFor="confirmpassword">Confirm Password *</RegisterLabel>
              <RegisterInput
                type={confirmPasswordType}
                id="confirmpassword"
                name="confirmpassword"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder=" ************"
                required
              />
              <EyeButton type="button" onClick={handleToggleConfirmPassword}>
                <EyeIcon icon={confirmPasswordType === 'password' ? eyeOff : eye} size={24} />
              </EyeButton>
              {passwordError && <RegisterInputError>{passwordError}</RegisterInputError>}
            </RegisterInputWrapper>
            {registerError && <RegisterInputError>{registerError}</RegisterInputError>}
            <LoginPageLink>
              <Link to="/login">Already have an account?</Link>
            </LoginPageLink>
            <RegisterSubmitButton type="submit">Register</RegisterSubmitButton>
          </RegisterForm>
          {isFormSubmitted && (
            <LoginPageLink>
              You have successfully registered. You can now <Link to="/login">login</Link>
            </LoginPageLink>
          )}
        </RegisterInnerContainer>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default Register;
