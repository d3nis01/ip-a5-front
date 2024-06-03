import React, { useState } from 'react';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import {
  RPTitle,
  RPForm,
  RPLabel,
  RPInput,
  RPSubmitButton,
  RPContainer,
  RPInnerContainer,
  RPInputWrapper,
  RPInputError,
  RPImage,
  RPWrapper,
  EyeButton,
  EyeIcon,
  RPInputField,
} from './styles';
import uaicImage from '../assets/uaic-image.jpg';
import { resetPasswordRequest } from '../../../services/auth-service';
import { IResetPassword } from '../../../types/auth/IResetPassword';

const ResetPassword = (): JSX.Element => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [passwordError, setPasswordError] = useState<string>('');
  const [resetResponseError, setResetResponseError] = useState<string>('');

  const [passwordIcon, setPasswordIcon] = useState(eyeOff);
  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(eyeOff);
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    setPasswordError('');
    setResetResponseError('');

    const token = new URLSearchParams(window.location.search).get('token');
    const decodedToken = decodeURI(token || '');

    console.log(decodedToken);

    const requestBody: IResetPassword = {
      email,
      newPassword: password,
      resetCode: decodedToken,
    };

    const response = await resetPasswordRequest(requestBody);

    if (response?.message) {
      setResetResponseError(response.message);
    }
  };

  const togglePasswordVisibility = () => {
    if (passwordType === 'password') {
      setPasswordIcon(eye);
      setPasswordType('text');
    } else {
      setPasswordIcon(eyeOff);
      setPasswordType('password');
    }
  };

  const toggleConfirmPasswordVisibility = () => {
    if (confirmPasswordType === 'password') {
      setConfirmPasswordIcon(eye);
      setConfirmPasswordType('text');
    } else {
      setConfirmPasswordIcon(eyeOff);
      setConfirmPasswordType('password');
    }
  };

  return (
    <RPContainer>
      <RPWrapper>
        <RPImage src={uaicImage} alt="Reset Password Image" />
        <RPInnerContainer>
          <RPTitle>Reset Password</RPTitle>
          <RPForm onSubmit={handleSubmit}>
            <RPInputWrapper>
              <RPLabel htmlFor="email">Enter your email</RPLabel>
              <RPInput required type="email" id="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="example@email.com" />
            </RPInputWrapper>
            <RPInputWrapper>
              <RPLabel htmlFor="new-password">Enter New Password</RPLabel>
              <RPInputField>
                <RPInput
                  type={passwordType}
                  id="new-password"
                  name="new-password"
                  value={password}
                  onChange={e => setPassword(e.target.value.trim())}
                  placeholder="Enter new password"
                  required
                />
                <EyeButton onClick={togglePasswordVisibility} type="button">
                  <EyeIcon icon={passwordIcon} size={24} />
                </EyeButton>
              </RPInputField>
              {passwordError && <RPInputError>{passwordError}</RPInputError>}
            </RPInputWrapper>
            <RPInputWrapper>
              <RPLabel htmlFor="confirm-password">Confirm New Password</RPLabel>
              <RPInputField>
                <RPInput
                  type={confirmPasswordType}
                  id="confirm-password"
                  name="confirm-password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value.trim())}
                  placeholder="Confirm new password"
                  required
                />
                <EyeButton onClick={toggleConfirmPasswordVisibility} type="button">
                  <EyeIcon icon={confirmPasswordIcon} size={24} />
                </EyeButton>
              </RPInputField>
              {passwordError && <RPInputError>{passwordError}</RPInputError>}
            </RPInputWrapper>
            <RPSubmitButton type="submit">Reset</RPSubmitButton>
            {resetResponseError && <RPInputError>{resetResponseError}</RPInputError>}
          </RPForm>
        </RPInnerContainer>
      </RPWrapper>
    </RPContainer>
  );
};

export default ResetPassword;
