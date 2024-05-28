import React, { useState } from 'react';
import {
  SambaContainer,
  SambaTitle,
  SambaForm,
  SambaLabel,
  UUIDInput,
  SubmitButton,
  InputWrapper,
  CopyButton,
  SambaResponseSection,
  SambaResponseLabel,
  SambaResponseValue,
  SambaRequestResponseLabel,
  SambaInnerContainer,
  SambaResponsesWrapper,
  ResponseValueWrapper,
  SambaResponseBox,
  SambaInputError,
} from './styles';

import { getSambaAccount, updateSambaAccount } from '../../services/sambaService';
import { ISambaGetResponse, ISambaUpdateResponse } from '../../types/IServiceTypesRequests';
import { isIPv4, isUUID } from '../../utils/forms/inputValidators';
import { VpnPostTextarea } from '../post-vpn/styles';

const UpdateSamba = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [newIpAddress, setNewIpAddress] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');
  const [sambaData, setSambaData] = useState<ISambaUpdateResponse>();
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [uuidError, setUuidError] = useState<string>('');
  const [ipError, setIpError] = useState<string>('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch(err => {
        console.error('Error copying to clipboard: ', err);
      });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isUUID(uuid)) {
      setUuidError('Invalid UUID!');
      if (!isIPv4(newIpAddress)) {
        setIpError('Invalid IP address!');
      }
      return;
    }
    if (!isIPv4(newIpAddress)) {
      setIpError('Invalid IP address!');
      return;
    }
    setUuidError('');
    setIpError('');

    const updateData = {
      newIpAddress,
      newDescription,
    };

    const response = await updateSambaAccount(uuid, updateData);
    setSambaData(response);
    setIsFormSubmitted(true);
  };

  return (
    <SambaContainer>
      <SambaInnerContainer>
        <SambaTitle>
          <b>Update Samba</b>
        </SambaTitle>
        <SambaForm onSubmit={handleSubmit}>
          <InputWrapper>
            <SambaLabel htmlFor="uuid">UUID*</SambaLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
            {uuidError && <SambaInputError>Invalid UUID!</SambaInputError>}
          </InputWrapper>
          <InputWrapper>
            <SambaLabel htmlFor="newIpAddress">New IP Address*</SambaLabel>
            <UUIDInput id="newIpAddress" type="text" value={newIpAddress} onChange={e => setNewIpAddress(e.target.value)} placeholder="192.168.1.1" />
            {ipError && <SambaInputError>Invalid IP adress!</SambaInputError>}
          </InputWrapper>
          <InputWrapper>
            <SambaLabel htmlFor="newDescription">New Description*</SambaLabel>
            <VpnPostTextarea id="newDescription" value={newDescription} onChange={e => setNewDescription(e.target.value)} placeholder="Brief description here" />
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </SambaForm>

        {isFormSubmitted && (
          <SambaResponseSection>
            <SambaRequestResponseLabel>Request Response</SambaRequestResponseLabel>
            <SambaResponsesWrapper>
              <SambaResponseBox>
                <SambaResponseLabel>Status</SambaResponseLabel>
                <ResponseValueWrapper>
                  <SambaResponseValue>{sambaData?.status + ' ' + sambaData?.statusText}</SambaResponseValue>
                  <CopyButton onClick={() => copyToClipboard(String(sambaData?.status))}>Copy</CopyButton>
                </ResponseValueWrapper>
              </SambaResponseBox>
            </SambaResponsesWrapper>
          </SambaResponseSection>
        )}
      </SambaInnerContainer>
    </SambaContainer>
  );
};

export default UpdateSamba;
