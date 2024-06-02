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

import { getAccountEmailVariants } from '../../services/account-service';
import { IAccountEmailVariantsGetResponse } from '../../types/IServiceTypesRequests';
import { isMatricol } from '../../utils/inputValidators';

const GetAccount = (): JSX.Element => {
  const [matricol, setMatricol] = useState<string>('');
  const [response, setResponse] = useState<IAccountEmailVariantsGetResponse>();
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [matricolError, setMatricolError] = useState<string>('');

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

    if (isMatricol(matricol) === false) {
      setMatricolError('Invalid matricol number!');
      console.error('Invalid matricol number');
      return;
    }
    setMatricolError('');

    const response = await getAccountEmailVariants(matricol);
    setResponse(response);
    setIsFormSubmitted(true);
  };

  return (
    <AccountContainer>
      <AccountInnerContainer>
        <AccountTitle>
          <b>Get Account Email Variants</b>
        </AccountTitle>
        <AccountForm onSubmit={handleSubmit}>
          <InputWrapper>
            <AccountLabel htmlFor="matricol">Matricol *</AccountLabel>
            <UUIDInput id="matricol" type="text" value={matricol} onChange={e => setMatricol(e.target.value)} placeholder="000000000AAA000000" required />
            {matricolError && <AccountInputError>Invalid matricol number!</AccountInputError>}
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </AccountForm>

        {isFormSubmitted && response && (
          <AccountResponseSection>
            <AccountRequestResponseLabel>Request Response</AccountRequestResponseLabel>
            <AccountResponsesWrapper>
              <AccountResponseBox>
                <AccountResponseLabel>UUID</AccountResponseLabel>
                <ResponseValueWrapper>
                  <AccountResponseValue>{response.data.uuid}</AccountResponseValue>
                  <CopyButton onClick={() => copyToClipboard(response.data.uuid)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </AccountResponseBox>
              <AccountResponseBox>
                <AccountResponseLabel>First Name</AccountResponseLabel>
                <ResponseValueWrapper>
                  <AccountResponseValue>{response.data.firstName}</AccountResponseValue>
                  <CopyButton onClick={() => copyToClipboard(response.data.firstName)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </AccountResponseBox>
              <AccountResponseBox>
                <AccountResponseLabel>Last Name</AccountResponseLabel>
                <ResponseValueWrapper>
                  <AccountResponseValue>{response.data.lastName}</AccountResponseValue>
                  <CopyButton onClick={() => copyToClipboard(response.data.lastName)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </AccountResponseBox>
              <AccountResponseBox>
                <AccountResponseLabel>Email Variant 1</AccountResponseLabel>
                <ResponseValueWrapper>
                  <AccountResponseValue>{response.data.mailVariant1}</AccountResponseValue>
                  <CopyButton onClick={() => copyToClipboard(response.data.mailVariant1)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </AccountResponseBox>
              <AccountResponseBox>
                <AccountResponseLabel>Email Variant 2</AccountResponseLabel>
                <ResponseValueWrapper>
                  <AccountResponseValue>{response.data.mailVariant2}</AccountResponseValue>
                  <CopyButton onClick={() => copyToClipboard(response.data.mailVariant2)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </AccountResponseBox>
              <AccountResponseBox>
                <AccountResponseLabel>Email Variant 3</AccountResponseLabel>
                <ResponseValueWrapper>
                  <AccountResponseValue>{response.data.mailVariant3}</AccountResponseValue>
                  <CopyButton onClick={() => copyToClipboard(response.data.mailVariant3)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </AccountResponseBox>
              <AccountResponseBox>
                <AccountResponseLabel>Status code</AccountResponseLabel>
                <ResponseValueWrapper>
                  <AccountResponseValue>{String(response.status) + ' ' + String(response.statusText)}</AccountResponseValue>
                  <CopyButton onClick={() => copyToClipboard(String(response.status))}>Copy</CopyButton>
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
