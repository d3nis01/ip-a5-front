import React, { useState } from 'react';
import {
  VPNContainer,
  VPNTitle,
  VPNForm,
  VPNLabel,
  UUIDInput,
  SubmitButton,
  InputWrapper,
  CopyButton,
  VPNResponseSection,
  VPNResponseLabel,
  VPNResponseValue,
  VPNRequestResponseLabel,
  VPNInnerContainer,
  VPNResponsesWrapper,
  ResponseValueWrapper,
  VpnResponseBox,
  VpnInputError,
} from './styles';

import { getVpnAccount } from '../../services/vpnService';
import { IVpnGetResponse } from '../../types/IServiceTypesRequests';
import { isUUID } from '../../utils/forms/inputValidators';

const GetVpn = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [vpnData, setVpnData] = useState<IVpnGetResponse | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [uuidError, setUuidError] = useState<string>('');

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

  if (isUUID(uuid) === false) {
    setUuidError('Invalid UUID!');
    console.error('Invalid UUID');
    return;
  }
  setUuidError('');

  const response = await getVpnAccount(uuid);
  setVpnData(response);
  setIsFormSubmitted(true);
};

  return (
    <VPNContainer>
      <VPNInnerContainer>
        <VPNTitle>
          <b>Get VPN</b>
        </VPNTitle>
        <VPNForm onSubmit={handleSubmit}>
          <InputWrapper>
            <VPNLabel htmlFor="uuid">UUID *</VPNLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
            {uuidError && <VpnInputError>Invalid UUID!</VpnInputError>}
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </VPNForm>

        {isFormSubmitted && vpnData && (
          <VPNResponseSection>
            <VPNRequestResponseLabel>Request Response</VPNRequestResponseLabel>
            <VPNResponsesWrapper>
              <VpnResponseBox>
                <VPNResponseLabel>UUID</VPNResponseLabel>
                <ResponseValueWrapper>
                  <VPNResponseValue>{vpnData.data.id}</VPNResponseValue>
                  <CopyButton onClick={() => copyToClipboard(vpnData.data.id)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </VpnResponseBox>
              <VpnResponseBox>
                <VPNResponseLabel>IPv4 Address</VPNResponseLabel>
                <ResponseValueWrapper>
                  <VPNResponseValue>{vpnData.data.iPv4Address}</VPNResponseValue>
                  <CopyButton onClick={() => copyToClipboard(vpnData.data.iPv4Address)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </VpnResponseBox>
              <VpnResponseBox>
                <VPNResponseLabel>Description</VPNResponseLabel>
                <ResponseValueWrapper>
                  <VPNResponseValue>{vpnData.data.description}</VPNResponseValue>
                  <CopyButton onClick={() => copyToClipboard(vpnData.data.description)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </VpnResponseBox>
              <VpnResponseBox>
                <VPNResponseLabel>Status</VPNResponseLabel>
                <ResponseValueWrapper>
                  <VPNResponseValue>{vpnData.status + ' ' + vpnData.statusText}</VPNResponseValue>
                  <CopyButton onClick={() => copyToClipboard(String(vpnData.status) || '')}>Copy</CopyButton>
                </ResponseValueWrapper>
              </VpnResponseBox>
            </VPNResponsesWrapper>
          </VPNResponseSection>
        )}
      </VPNInnerContainer>
    </VPNContainer>
  );
};

export default GetVpn;
