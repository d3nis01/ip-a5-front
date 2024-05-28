import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CRCTitle,
  CRCForm,
  CRCLabel,
  CRCInput,
  CRCSubmitButton,
  CRCContainer,
  CRCInnerContainer,
  CRCInputWrapper,
  CRCInputError,
  CRCImage,
  CRCWrapper,
} from './styles';
import myImg from '../../assets/wallpaper.jpg';
// import { checkRecoveryCode } from '../../services/accountService';
import { AccountCheckRecoveryCodeParams, IAccountCheckRecoveryCodeResponse } from '../../../../types/IServiceTypesRequests';
import { isRecoveryCode } from '../../../../utils/forms/inputValidators';
import {ROUTE__RESET_PASSWORD } from '../../../router/constants';

const CheckRecoveryCode = (): JSX.Element => {
  const [code, setCode] = useState<string>('');
  const [isCodeValid, setIsCodeValid] = useState<boolean>(true);
  const [codeError, setCodeError] = useState<string>('');
  const [responseError, setResponseError] = useState<boolean>(false);
  const [responseErrorMessage, setResponseErrorMessage] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const navigate = useNavigate();

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
      console.log("Go to reset password page!");
      // navigate(ROUTE__RESET_PASSWORD);
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
        <CRCImage src={myImg} alt="Register Image" />
        <CRCInnerContainer>
          <CRCTitle>Check Recovery Code</CRCTitle>
          <CRCForm onSubmit={handleSubmit}>
            <CRCInputWrapper>
              <CRCLabel htmlFor="email">Enter Recovery Code</CRCLabel>
              <CRCInput type="text" id="email" name="email" $invalid={!isCodeValid} value={code} onChange={e => setCode(e.target.value)} placeholder="123456" />
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
