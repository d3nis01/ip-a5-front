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
} from './styles';

const GetVpn = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch(err => {
        console.error('Eroare la copierea în clipboard: ', err);
      });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
            <VPNLabel htmlFor="uuid">UUID</VPNLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </VPNForm>

        {isFormSubmitted && (
          <VPNResponseSection>

            <VPNRequestResponseLabel>Request response</VPNRequestResponseLabel>
            
            <VPNResponsesWrapper>

                <VPNResponseLabel>UUID</VPNResponseLabel>
                <ResponseValueWrapper>
                  <VPNResponseValue>{uuid || 'None provided'}</VPNResponseValue>
                  <CopyButton onClick={() => copyToClipboard(uuid || '')}>Copy</CopyButton>
                </ResponseValueWrapper>

                <VPNResponseLabel>UUID</VPNResponseLabel>
                <ResponseValueWrapper>
                  <VPNResponseValue>{uuid || 'None provided'}</VPNResponseValue>
                  <CopyButton onClick={() => copyToClipboard(uuid || '')}>Copy</CopyButton>
                </ResponseValueWrapper>

                <VPNResponseLabel>UUID</VPNResponseLabel>
                <ResponseValueWrapper>
                  <VPNResponseValue>{uuid || 'None provided'}</VPNResponseValue>
                  <CopyButton onClick={() => copyToClipboard(uuid || '')}>Copy</CopyButton>
                </ResponseValueWrapper>

                <VPNResponseLabel>UUID</VPNResponseLabel>
                <ResponseValueWrapper>
                  <VPNResponseValue>{uuid || 'None provided'}</VPNResponseValue>
                  <CopyButton onClick={() => copyToClipboard(uuid || '')}>Copy</CopyButton>
                </ResponseValueWrapper>

            </VPNResponsesWrapper>

          </VPNResponseSection>
        )}
      </VPNInnerContainer>
    </VPNContainer>
  );
};

export default GetVpn;
