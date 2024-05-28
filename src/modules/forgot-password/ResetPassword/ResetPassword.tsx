import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CRCTitle, CRCForm, CRCLabel, CRCInput, CRCSubmitButton, CRCContainer, CRCInnerContainer, CRCInputWrapper, CRCInputError, CRCImage, CRCWrapper } from './styles';
import myImg from '../assets/wallpaper.jpg';
// import { checkRecoveryCode } from '../../services/accountService';
import { AccountCheckRecoveryCodeParams, IAccountCheckRecoveryCodeResponse } from '../../../types/IServiceTypesRequests';
import { isRecoveryCode } from '../../../utils/forms/inputValidators';
import { ROUTE_LOGIN } from '../../../router/constants';

const ResetPassword = (): JSX.Element => {
  const [code, setCode] = useState<string>('');
  const [isCodeValid, setIsCodeValid] = useState<boolean>(true);
  const [codeError, setCodeError] = useState<string>('');
  const [responseError, setResponseError] = useState<boolean>(false);
  const [responseErrorMessage, setResponseErrorMessage] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [type, setType] = useState('password');

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUploading(true);
    setIsCodeValid(isRecoveryCode(code.trim()));

    if (isRecoveryCode(code.trim()) === false) {
      console.log('Code is not valid!');
      setCodeError('Enter a valid recovery code!');
      setIsUploading(false);
      return;
    }

    const requestObject: AccountCheckRecoveryCodeParams = {
      code: code,
    };
    // const response: IAccountSendRecoveryCodeResponse = await checkRecoveryCode(requestObject);

    // Mock a possible response
    const response: IAccountCheckRecoveryCodeResponse = {
      status: 200,
      statusText: 'OK',
    };

    if (response.status === 200) {
      setResponseError(false);
      console.log('Go to reset password page!');
      navigate(ROUTE_LOGIN);
    } else {
      setResponseError(true);
      setResponseErrorMessage(response.statusText);
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
              <CRCInput type={type} id="new-password" name="new-password" $invalid={!isCodeValid} value={code} onChange={e => setCode(e.target.value)} placeholder="Enter new password" />
              {!isCodeValid && <CRCInputError>{codeError}</CRCInputError>}
            </CRCInputWrapper>
            <CRCInputWrapper>
              <CRCLabel htmlFor="confirm-password">Confirm New Password</CRCLabel>
              <CRCInput type={type} id="confirm-password" name="confirm-password" $invalid={!isCodeValid} value={code} onChange={e => setCode(e.target.value)} placeholder="Confirm new password" />
              {!isCodeValid && <CRCInputError>{codeError}</CRCInputError>}
            </CRCInputWrapper>
            <CRCSubmitButton type="submit" disabled={isSubmitDisabled}>
              Reset
            </CRCSubmitButton>
            {responseError && <CRCInputError>{responseErrorMessage}</CRCInputError>}
          </CRCForm>
        </CRCInnerContainer>
      </CRCWrapper>
    </CRCContainer>
  );
};

export default ResetPassword;
