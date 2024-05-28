import React, { useState } from 'react';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useLocation, useNavigate } from 'react-router-dom';
import { CRCTitle, CRCForm, CRCLabel, CRCInput, CRCSubmitButton, CRCContainer, CRCInnerContainer, CRCInputWrapper, CRCInputError, CRCImage, CRCWrapper } from './styles';
import myImg from '../assets/wallpaper.jpg';
import { IAccountCheckRecoveryCodeResponse, IAccountUpdateResponse, UpdateAccountParams } from '../../../types/IServiceTypesRequests';
import { ROUTE_LOGIN } from '../../../router/constants';
import { updateAccount } from '../../../services/accountService';
// import { checkRecoveryCode } from '../../services/accountService';

const ResetPassword = (): JSX.Element => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [passwordError, setPasswordError] = useState<string>('');
  const [resetResponseError, setResetResponseError] = useState<string>('');

  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState('password');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUploading(true);
    if (password !== confirmPassword || password.length === 0 || confirmPassword.length === 0) {
      console.log('Passwords do not match');
      setPasswordError('Passwords do not match!');
      setIsUploading(false);
      return;
    }

    const userEmail: string = location.state.email;
    const requestObject: UpdateAccountParams = {
      newUsername: userEmail,
      newPassword: password,
      newEmail: userEmail,
    };
    const userId = '1';
    // try {
    //   const response: IAccountUpdateResponse = await updateAccount(userId, requestObject);
    // } catch (error) {
    //   console.error('Failed to reset password:', error);
    //   setResetResponseError('Failed to reset password');
    //   setIsUploading(false);
    //   return;
    // }

    // Mock a possible response
    const response: IAccountUpdateResponse = {
      status: 200,
      statusText: 'OK',
    };

    if (response.status === 200) {
      console.log('Password reset successfully!');
      navigate(ROUTE_LOGIN);
    } else {
      setResetResponseError(response.statusText);
    }
    setIsUploading(false);
  };

  const isSubmitDisabled = isUploading;

  return (
    <CRCContainer>
      <CRCWrapper>
        <CRCImage src={myImg} alt="Reset Password Image" />
        <CRCInnerContainer>
          <CRCTitle>Reset Password</CRCTitle>
          <CRCForm onSubmit={handleSubmit}>
            <CRCInputWrapper>
              <CRCLabel htmlFor="new-password">Enter New Password</CRCLabel>
              <CRCInput type={type} id="new-password" name="new-password" $invalid={passwordError.length > 0} value={password} onChange={e => setPassword(e.target.value.trim())} placeholder="Enter new password" />
              {passwordError && <CRCInputError>{passwordError}</CRCInputError>}
            </CRCInputWrapper>
            <CRCInputWrapper>
              <CRCLabel htmlFor="confirm-password">Confirm New Password</CRCLabel>
              <CRCInput type={type} id="confirm-password" name="confirm-password" $invalid={passwordError.length > 0} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value.trim())} placeholder="Confirm new password" />
              {passwordError && <CRCInputError>{passwordError}</CRCInputError>}
            </CRCInputWrapper>
            <CRCSubmitButton type="submit" disabled={isSubmitDisabled}>
              Reset
            </CRCSubmitButton>
            {resetResponseError && <CRCInputError>{resetResponseError}</CRCInputError>}
          </CRCForm>
        </CRCInnerContainer>
      </CRCWrapper>
    </CRCContainer>
  );
};

export default ResetPassword;
