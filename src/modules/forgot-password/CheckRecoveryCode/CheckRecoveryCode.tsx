import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CRCTitle, CRCForm, CRCLabel, CRCInput, CRCSubmitButton, CRCContainer, CRCInnerContainer, CRCInputWrapper, CRCInputError, CRCImage, CRCWrapper } from './styles';
import myImg from '../assets/wallpaper.jpg';
import { AccountCheckRecoveryCodeParams, IAccountCheckRecoveryCodeResponse } from '../../../types/IServiceTypesRequests';
import { ROUTE__RESET_PASSWORD } from '../../../router/constants';
import { isRecoveryCode } from '../../../utils/inputValidators';

const CheckRecoveryCode = (): JSX.Element => {
  const [code, setCode] = useState<string>('');
  const [isCodeValid, setIsCodeValid] = useState<boolean>(true);
  const [codeError, setCodeError] = useState<string>('');
  const [responseError, setResponseError] = useState<boolean>(false);
  const [responseErrorMessage, setResponseErrorMessage] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

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
      const userEmail: string = location.state.email;
      console.log('User email:', userEmail);
      navigate(ROUTE__RESET_PASSWORD, { state: { email: userEmail } });
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
        <CRCImage src={myImg} alt="Check Recovery Code Image" />
        <CRCInnerContainer>
          <CRCTitle>Check Recovery Code</CRCTitle>
          <CRCForm onSubmit={handleSubmit}>
            <CRCInputWrapper>
              <CRCLabel htmlFor="code">Enter Recovery Code</CRCLabel>
              <CRCInput type="text" id="code" name="code" $invalid={!isCodeValid} value={code} onChange={e => setCode(e.target.value)} placeholder="123456" />
              {!isCodeValid && <CRCInputError>{codeError}</CRCInputError>}
            </CRCInputWrapper>
            <CRCSubmitButton type="submit" disabled={isSubmitDisabled}>
              Check
            </CRCSubmitButton>
            {responseError && <CRCInputError>{responseErrorMessage}</CRCInputError>}
          </CRCForm>
        </CRCInnerContainer>
      </CRCWrapper>
    </CRCContainer>
  );
};

export default CheckRecoveryCode;
