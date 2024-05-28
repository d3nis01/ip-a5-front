import React, { useState } from 'react';
import {
  DeleteAccountTitle,
  UUIDForm,
  UUIDLabel,
  UUIDInput,
  SubmitButton,
  ResponseSection,
  ResponseLabel,
  ResponseValue,
  RequestResponseLabel,
  CopyButton,
  AccountDeleteContainer,
  AccountDeleteInnerContainer,
  UuidInputWrapper,
  AccountDeleteResponseWrapper,
  AccountDeleteResponseItem,
  AccountDeleteResponseBox,
  AccountInputError,
} from './styles';

import { deleteAccount } from '../../services/accountService';
import { IAccountDeleteResponse } from '../../types/IServiceTypesRequests';
import { isUUID } from '../../utils/forms/inputValidators';

const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard) {
    console.error('Clipboard not available');
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy text:', err);
  }
};

const DeleteAccount = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [response, setResponse] = useState<IAccountDeleteResponse>();
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [uuidError, setUuidError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isUUID(uuid) === false) {
      setUuidError('Invalid UUID!');
      console.error('Invalid UUID!');
      return;
    }
    setUuidError('');

    const response = await deleteAccount(uuid);
    setResponse(response);
    setIsFormSubmitted(true);
  };

  return (
    <AccountDeleteContainer>
      <AccountDeleteInnerContainer>
        <DeleteAccountTitle>Delete Account</DeleteAccountTitle>
        <UUIDForm onSubmit={handleSubmit}>
          <UuidInputWrapper>
            <UUIDLabel htmlFor="uuid">UUID *</UUIDLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
            {uuidError && <AccountInputError>Invalid UUID!</AccountInputError>}
          </UuidInputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </UUIDForm>

        {isFormSubmitted && response && (
          <ResponseSection>
            <RequestResponseLabel>Request Response</RequestResponseLabel>
            <AccountDeleteResponseWrapper>
              <AccountDeleteResponseItem>
                <ResponseLabel>Status Code</ResponseLabel>
                <AccountDeleteResponseBox>
                  <ResponseValue>
                    {response.status} {response.statusText}
                  </ResponseValue>
                  <CopyButton onClick={() => copyToClipboard(`${response.status} ${response.statusText}`)}>Copy</CopyButton>
                </AccountDeleteResponseBox>
              </AccountDeleteResponseItem>
            </AccountDeleteResponseWrapper>
          </ResponseSection>
        )}
      </AccountDeleteInnerContainer>
    </AccountDeleteContainer>
  );
};

export default DeleteAccount;
