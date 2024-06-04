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

import { getAccount } from '../../services/account-service';
import { IAccount } from '../../types/IServiceTypesObjects';
import { IAccountGetResponse, ICreateAccount } from '../../types/IServiceTypesRequests';
import { isUUID } from '../../utils/inputValidators';

const GetAccount = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [accountData, setAccountData] = useState<IAccount>();
  const [response, setResponse] = useState<IAccountGetResponse>();
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

    if (isUUID(uuid) === false) {
      setUuidError('Invalid UUID!');
      console.error('Invalid UUID');
      return;
    }
    setUuidError('');

    const response = await getAccount(uuid);
    setResponse(response);
    setAccountData(response.data);
    setIsFormSubmitted(true);
  };

  const accountFields = [
    { label: 'UUID', value: accountData?.id },
    { label: 'Username', value: accountData?.username },
    { label: 'Password', value: accountData?.password },
    { label: 'Email', value: accountData?.email },
    { label: 'Matricol', value: accountData?.matricol },
    { label: 'Status code', value: `${response?.status} ${response?.statusText}` },
  ];

  return (
    <AccountContainer>
      <AccountInnerContainer>
        <AccountTitle>
          <b>Get Account</b>
        </AccountTitle>
        <AccountForm onSubmit={handleSubmit}>
          <InputWrapper>
            <AccountLabel htmlFor="uuid">UUID *</AccountLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
            {uuidError && <AccountInputError>Invalid UUID!</AccountInputError>}
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </AccountForm>

        {isFormSubmitted && accountData && response && (
          <AccountResponseSection>
            <AccountRequestResponseLabel>Request Response</AccountRequestResponseLabel>
            <AccountResponsesWrapper>
              {accountFields.map(
                (field, index) =>
                  field.value && (
                    <AccountResponseBox key={index}>
                      <AccountResponseLabel>{field.label}</AccountResponseLabel>
                      <ResponseValueWrapper>
                        <AccountResponseValue>{field.value}</AccountResponseValue>
                        <CopyButton onClick={() => copyToClipboard(field.value ?? '')}>Copy</CopyButton>
                      </ResponseValueWrapper>
                    </AccountResponseBox>
                  ),
              )}
            </AccountResponsesWrapper>
          </AccountResponseSection>
        )}
      </AccountInnerContainer>
    </AccountContainer>
  );
};

export default GetAccount;
