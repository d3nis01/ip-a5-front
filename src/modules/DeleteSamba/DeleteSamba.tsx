import React, { useState } from 'react';
import {
  DeleteSambaTitle,
  UUIDForm,
  UUIDLabel,
  UUIDInput,
  SubmitButton,
  ResponseSection,
  ResponseLabel,
  ResponseValue,
  RequestResponseLabel,
  CopyButton,
  SambaDeleteContainer,
  SambaDeleteInnerContainer,
  UuidInputWrapper,
  SambaDeleteResponseWrapper,
  SambaDeleteResponseItem,
  SambaDeleteResponseBox,
  SambaInputError,
} from './styles';

import { deleteSambaAccount } from '../../services/sambaService';
import { ISambaDeleteResponse } from '../../types/IServiceTypesRequests';
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

const DeleteSamba = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [response, setResponse] = useState<ISambaDeleteResponse | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [uuidError, setUuidError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      
    if (isUUID(uuid) === false) {
      setUuidError('Invalid UUID!');
      console.error('Invalid UUID');
      return;
    }
    setUuidError('');
  
    const response = await deleteSambaAccount(uuid);
    setResponse(response);
    setIsFormSubmitted(true);
  };
  
  
  return (
    <SambaDeleteContainer>
      <SambaDeleteInnerContainer>
        <DeleteSambaTitle>Delete Samba</DeleteSambaTitle>
        <UUIDForm onSubmit={handleSubmit}>
          <UuidInputWrapper>
            <UUIDLabel htmlFor="uuid">UUID *</UUIDLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
            {uuidError && <SambaInputError>Invalid UUID!</SambaInputError>}
          </UuidInputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </UUIDForm>

        {isFormSubmitted && response && (
          <ResponseSection>
            <RequestResponseLabel>Request Response</RequestResponseLabel>
            <SambaDeleteResponseWrapper>
              <SambaDeleteResponseItem>
                <ResponseLabel>Status Code</ResponseLabel>
                <SambaDeleteResponseBox>
                  <ResponseValue>
                    {response.status} {response.statusText}
                  </ResponseValue>
                  <CopyButton onClick={() => copyToClipboard(`${response.status} ${response.statusText}`)}>Copy</CopyButton>
                </SambaDeleteResponseBox>
              </SambaDeleteResponseItem>
            </SambaDeleteResponseWrapper>
          </ResponseSection>
        )}
      </SambaDeleteInnerContainer>
    </SambaDeleteContainer>
  );
};

export default DeleteSamba;
