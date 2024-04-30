import React, { useState } from 'react';
import {
  VpnContainer,
  VpnTitle,
  VpnForm,
  VpnLabel,
  UUIDInput,
  SubmitButton,
  InputWrapper,
  CopyButton,
  VpnResponseSection,
  VpnResponseLabel,
  VpnResponseValue,
  VpnRequestResponseLabel,
  VpnInnerContainer,
  VpnResponsesWrapper,
  ResponseValueWrapper,
  VpnResponseBox,
  VpnInputError,
} from './styles';

import { IVpnGetResponse, IVpnUpdateResponse } from '../../types/IServiceTypesRequests';
import { isIPv4, isUUID } from '../../utils/forms/inputValidators';
import { VpnPostTextarea } from '../post-vpn/styles';
import { updateVpnAccount } from '../../services/vpnService';

const UpdateVpn = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [newIpAddress, setNewIpAddress] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');
  const [sambaData, setVpnData] = useState<IVpnUpdateResponse>();
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

    const response = await updateVpnAccount(uuid, updateData);
    setVpnData(response);
    setIsFormSubmitted(true);
  };

  return (
    <VpnContainer>
      <VpnInnerContainer>
        <VpnTitle>
          <b>Update Vpn</b>
        </VpnTitle>
        <VpnForm onSubmit={handleSubmit}>
          <InputWrapper>
            <VpnLabel htmlFor="uuid">UUID</VpnLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
            {uuidError && <VpnInputError>Invalid UUID!</VpnInputError>}
          </InputWrapper>
          <InputWrapper>
            <VpnLabel htmlFor="newIpAddress">New IP Address</VpnLabel>
            <UUIDInput id="newIpAddress" type="text" value={newIpAddress} onChange={e => setNewIpAddress(e.target.value)} placeholder="192.168.1.1" />
            {ipError && <VpnInputError>Invalid IP adress!</VpnInputError>}
          </InputWrapper>
          <InputWrapper>
            <VpnLabel htmlFor="newDescription">New Description</VpnLabel>
            <VpnPostTextarea id="newDescription" value={newDescription} onChange={e => setNewDescription(e.target.value)} placeholder="Brief description here" />
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </VpnForm>

        {isFormSubmitted && (
          <VpnResponseSection>
            <VpnRequestResponseLabel>Request Response</VpnRequestResponseLabel>
            <VpnResponsesWrapper>
              <VpnResponseBox>
                <VpnResponseLabel>Status</VpnResponseLabel>
                <ResponseValueWrapper>
                  <VpnResponseValue>{sambaData?.status + ' ' + sambaData?.statusText}</VpnResponseValue>
                  <CopyButton onClick={() => copyToClipboard(String(sambaData?.status))}>Copy</CopyButton>
                </ResponseValueWrapper>
              </VpnResponseBox>
            </VpnResponsesWrapper>
          </VpnResponseSection>
        )}
      </VpnInnerContainer>
    </VpnContainer>
  );
};

export default UpdateVpn;
