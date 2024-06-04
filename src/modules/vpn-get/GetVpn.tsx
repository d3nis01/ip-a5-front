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

import { getVpnAccount } from '../../services/vpn-service';
import { IVpnGetResponse } from '../../types/IServiceTypesRequests';
import { isUUID } from '../../utils/inputValidators';

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

    if (!isUUID(uuid)) {
      setUuidError('Invalid UUID!');
      console.error('Invalid UUID');
      return;
    }
    setUuidError('');

    const response = await getVpnAccount(uuid);
    setVpnData(response);
    setIsFormSubmitted(true);
  };

  const inputFields = [
    {
      label: 'UUID',
      name: 'uuid',
      type: 'text',
      value: uuid,
      placeholder: '00000000-0000-0000-0000-000000000000',
      error: uuidError,
      component: UUIDInput,
    },
  ];

  const responseFields = [
    { label: 'UUID', value: vpnData?.data.id },
    { label: 'IPv4 Address', value: vpnData?.data.iPv4Address },
    { label: 'Description', value: vpnData?.data.description },
    { label: 'Status', value: `${vpnData?.status} ${vpnData?.statusText}` },
  ];

  return (
    <VPNContainer>
      <VPNInnerContainer>
        <VPNTitle>
          <b>Get VPN</b>
        </VPNTitle>
        <VPNForm onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <InputWrapper key={index}>
              <VPNLabel htmlFor={field.name}>{field.label} *</VPNLabel>
              <field.component
                id={field.name}
                name={field.name}
                type={field.type}
                value={field.value}
                onChange={e => setUuid(e.target.value)}
                placeholder={field.placeholder}
                required
              />
              {field.error && <VpnInputError>{field.error}</VpnInputError>}
            </InputWrapper>
          ))}
          <SubmitButton type="submit">Submit</SubmitButton>
        </VPNForm>

        {isFormSubmitted && vpnData && (
          <VPNResponseSection>
            <VPNRequestResponseLabel>Request Response</VPNRequestResponseLabel>
            <VPNResponsesWrapper>
              {responseFields.map(
                (field, index) =>
                  field.value && (
                    <VpnResponseBox key={index}>
                      <VPNResponseLabel>{field.label}</VPNResponseLabel>
                      <ResponseValueWrapper>
                        <VPNResponseValue>{field.value}</VPNResponseValue>
                        <CopyButton onClick={() => copyToClipboard(field.value ?? '')}>Copy</CopyButton>
                      </ResponseValueWrapper>
                    </VpnResponseBox>
                  ),
              )}
            </VPNResponsesWrapper>
          </VPNResponseSection>
        )}
      </VPNInnerContainer>
    </VPNContainer>
  );
};

export default GetVpn;
