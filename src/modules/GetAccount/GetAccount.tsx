import React, { useState } from 'react';
import {
  AccountContainer,
  AccountTitle,
  AccountForm,
  AccountLabel,
  UUIDInput,
  SubmitButton,
  InputWrapper,
  CopyButton,
  AccountResponseSection,
  AccountResponseLabel,
  AccountResponseValue,
  AccountRequestResponseLabel,
  AccountInnerContainer,
  AccountResponsesWrapper,
  ResponseValueWrapper,
  AccountResponseBox,
  AccountInputError,
} from './styles';

import { getAccount } from '../../services/accountService';
import { ICreateAccount, IAccountGetResponse } from '../../types/IServiceTypesRequests';
import { isUUID } from '../../utils/forms/inputValidators';

const GetAccount = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [AccountData, setAccountData] = useState<IAccountGetResponse>();
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [uuidError, setUuidError] = useState<string>('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch(err => {
        console.error('Eroare la copierea în clipboard: ', err);
      });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const requestBody: ICreateAccount = {
        uuid,
      };

    if (isUUID(uuid) === false) {
      setUuidError('Invalid UUID!');
      console.error('Invalid UUID');
      return;
    }
    setUuidError('');
  
    const response = await getAccount(uuid);
    setAccountData(response);
    setIsFormSubmitted(true);
  };

  return (
    <AccountContainer>
      <AccountInnerContainer>
        <AccountTitle>
          <b>Get Account</b>
        </AccountTitle>
        <AccountForm onSubmit={handleSubmit}>
          <InputWrapper>
            <AccountLabel htmlFor="uuid">UUID</AccountLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
            {uuidError && <AccountInputError>Invalid UUID!</AccountInputError>}
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </AccountForm>

        {isFormSubmitted && AccountData && (
          <AccountResponseSection>
            <AccountRequestResponseLabel>Request Response</AccountRequestResponseLabel>
            <AccountResponsesWrapper>
            <AccountResponseBox>
                <AccountResponseLabel>UUID</AccountResponseLabel>
                <ResponseValueWrapper>
                  <AccountResponseValue>{AccountData.data.id}</AccountResponseValue>
                  <CopyButton onClick={() => copyToClipboard(AccountData.data.id)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </AccountResponseBox>
              <AccountResponseBox>
                <AccountResponseLabel>Username</AccountResponseLabel>
                <ResponseValueWrapper>
                  <AccountResponseValue>{AccountData.data.username}</AccountResponseValue>
                  <CopyButton onClick={() => copyToClipboard(AccountData.data.username)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </AccountResponseBox>
              <AccountResponseBox>
                <AccountResponseLabel>Password</AccountResponseLabel>
                <ResponseValueWrapper>
                  <AccountResponseValue>{AccountData.data.password}</AccountResponseValue>
                  <CopyButton onClick={() => copyToClipboard(AccountData.data.password)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </AccountResponseBox>
              <AccountResponseBox>
                <AccountResponseLabel>Email</AccountResponseLabel>
                <ResponseValueWrapper>
                  <AccountResponseValue>{AccountData.data.email}</AccountResponseValue>
                  <CopyButton onClick={() => copyToClipboard(AccountData.data.email)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </AccountResponseBox>
              <AccountResponseBox>
                <AccountResponseLabel>Matricol</AccountResponseLabel>
                <ResponseValueWrapper>
                  <AccountResponseValue>{AccountData.data.matricol}</AccountResponseValue>
                  <CopyButton onClick={() => copyToClipboard(AccountData.data.matricol)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </AccountResponseBox>
            </AccountResponsesWrapper>
          </AccountResponseSection>
        )}
      </AccountInnerContainer>
    </AccountContainer>
  );
};

export default GetAccount;
