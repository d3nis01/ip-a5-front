import React, { useState } from 'react';
import {
  DeleteVpnTitle,
  UUIDForm,
  UUIDLabel,
  UUIDInput,
  SubmitButton,
  ResponseSection,
  ResponseLabel,
  ResponseValue,
  RequestResponseLabel,
  CopyButton,
  VpnDeleteContainer,
  VpnDeleteInnerContainer,
  UuidInputWrapper,
  VpnDeleteResponseWrapper,
  VpnDeleteResponseItem,
  VpnDeleteResponseBox,
  VpnInputError,
} from './styles';

import { deleteVpnAccount } from '../../services/vpn-service';
import { IVpnDeleteResponse } from '../../types/IServiceTypesRequests';
import { isUUID } from '../../utils/inputValidators';

const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard) {
    console.error('Clipboard not available');
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};

const DeleteVpn = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [response, setResponse] = useState<IVpnDeleteResponse | null>(null);
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

    const response = await deleteVpnAccount(uuid);
    setResponse(response);
    setIsFormSubmitted(true);
  };

  return (
    <VpnDeleteContainer>
      <VpnDeleteInnerContainer>
        <DeleteVpnTitle>Delete VPN</DeleteVpnTitle>
        <UUIDForm onSubmit={handleSubmit}>
          <UuidInputWrapper>
            <UUIDLabel htmlFor="uuid">UUID *</UUIDLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
            {uuidError && <VpnInputError>Invalid UUID!</VpnInputError>}
          </UuidInputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </UUIDForm>
        {isFormSubmitted && response && (
          <ResponseSection>
            <RequestResponseLabel>Request Response</RequestResponseLabel>
            <VpnDeleteResponseWrapper>
              <VpnDeleteResponseItem>
                <ResponseLabel>Status Code</ResponseLabel>
                <VpnDeleteResponseBox>
                  <ResponseValue>
                    {response.status} {response.statusText}
                  </ResponseValue>
                  <CopyButton onClick={() => copyToClipboard(`${response.status} ${response.statusText}`)}>Copy</CopyButton>
                </VpnDeleteResponseBox>
              </VpnDeleteResponseItem>
            </VpnDeleteResponseWrapper>
          </ResponseSection>
        )}
      </VpnDeleteInnerContainer>
    </VpnDeleteContainer>
  );
};

export default DeleteVpn;
