import React, { useState } from 'react';
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
  RegisterWrapper,
} from '../register/styles';
import myImg from './assets/wallpaper.jpg';
// import { sendRecoveryCode } from '../../services/accountService';
import { IAccountSendRecoveryCodeResponse } from '../../types/IServiceTypesRequests';
import { isEmail } from '../../utils/forms/inputValidators';

const SendRecoveryCode = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [responseError, setResponseError] = useState<boolean>(false);
  const [responseErrorMessage, setResponseErrorMessage] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUploading(true);

    if (isEmail(email) === false) {
      setIsEmailValid(false);
      setEmailError('Matricol is not valid');
      console.log('Email is not valid!');
      return;
    }

    // const requestObject: AccountSendRecoveryCodeParams = {
    //   email: email,
    // };
    // const response: IAccountSendRecoveryCodeResponse = await sendRecoveryCode(requestObject);

    // Mock a possible response
    const response: IAccountSendRecoveryCodeResponse = {
      status: 200,
      statusText: 'OK',
    };

    if (response.status === 200) {
      setResponseError(false);
      // navigate('/forgot-password/recovery-code');
    } else {
      setResponseError(true);
      setResponseErrorMessage(response.statusText);
      setIsUploading(false);
    }
  };

  const isSubmitDisabled = isUploading || !email;

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterImage src={myImg} alt="Register Image" />
        <RegisterInnerContainer>
          <RegisterTitle>Send Recovery Code</RegisterTitle>
          <RegisterForm onSubmit={handleSubmit}>
            <RegisterInputWrapper>
              <RegisterLabel htmlFor="email">Enter Account's Email</RegisterLabel>
              <RegisterInput type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@example.com" required />
              {isEmailValid === false && <RegisterInputError>{emailError}</RegisterInputError>}
            </RegisterInputWrapper>
            <RegisterSubmitButton type="submit" disabled={isSubmitDisabled}>
              Send Email
            </RegisterSubmitButton>
            {responseError && <RegisterInputError>{responseErrorMessage}</RegisterInputError>}
          </RegisterForm>
        </RegisterInnerContainer>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default SendRecoveryCode;
