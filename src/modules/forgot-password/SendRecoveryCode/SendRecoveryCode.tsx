import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SRCTitle, SRCForm, SRCLabel, SRCInput, SRCSubmitButton, SRCContainer, SRCInnerContainer, SRCInputWrapper, SRCInputError, SRCImage, SRCWrapper } from './styles';
import myImg from '../assets/wallpaper.jpg';
// import { sendRecoveryCode } from '../../services/accountService';
import { AccountSendRecoveryCodeParams, IAccountSendRecoveryCodeResponse } from '../../../types/IServiceTypesRequests';
import { isEmail } from '../../../utils/forms/inputValidators';
import { ROUTE__CHECK_RECOVERY_CODE } from '../../../router/constants';

const SendRecoveryCode = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<string>('');
  const [responseError, setResponseError] = useState<boolean>(false);
  const [responseErrorMessage, setResponseErrorMessage] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUploading(true);
    setIsEmailValid(isEmail(email.trim()));

    if (isEmail(email.trim()) === false) {
      console.log('Email is not valid!');
      setEmailError('Enter a valid email address!');
      setIsUploading(false);
      return;
    }

    const requestObject: AccountSendRecoveryCodeParams = {
      email: email,
    };
    // const response: IAccountSendRecoveryCodeResponse = await sendRecoveryCode(requestObject);

    // Mock a possible response
    const response: IAccountSendRecoveryCodeResponse = {
      status: 200,
      statusText: 'OK',
    };

    if (response.status === 200) {
      setResponseError(false);
      console.log('Recovery code sent successfully!');
      navigate(ROUTE__CHECK_RECOVERY_CODE, { state: { email: email } });
    } else {
      setResponseError(true);
      setResponseErrorMessage(response.statusText);
    }
    setIsUploading(false);
  };

  const isSubmitDisabled = isUploading;

  return (
    <SRCContainer>
      <SRCWrapper>
        <SRCImage src={myImg} alt="Send Recovery Code Image" />
        <SRCInnerContainer>
          <SRCTitle>Send Recovery Code</SRCTitle>
          <SRCForm onSubmit={handleSubmit}>
            <SRCInputWrapper>
              <SRCLabel htmlFor="email">Enter Account's Email</SRCLabel>
              <SRCInput type="text" id="email" name="email" $invalid={!isEmailValid} value={email} onChange={e => setEmail(e.target.value)} placeholder="example@example.com" />
              {!isEmailValid && <SRCInputError>{emailError}</SRCInputError>}
            </SRCInputWrapper>
            <SRCSubmitButton type="submit" disabled={isSubmitDisabled}>
              Send Email
            </SRCSubmitButton>
            {responseError && <SRCInputError>{responseErrorMessage}</SRCInputError>}
          </SRCForm>
        </SRCInnerContainer>
      </SRCWrapper>
    </SRCContainer>
  );
};

export default SendRecoveryCode;
