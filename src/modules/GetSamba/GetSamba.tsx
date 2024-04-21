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
} from './styles';

const GetSamba = (): JSX.Element => {
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
    <SambaContainer>
      <SambaInnerContainer>
        <SambaTitle>
          <b>Get Samba</b>
        </SambaTitle>
        <SambaForm onSubmit={handleSubmit}>
          <InputWrapper>
            <SambaLabel htmlFor="uuid">UUID</SambaLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </SambaForm>

        {isFormSubmitted && (
          <SambaResponseSection>

            <SambaRequestResponseLabel>Request response</SambaRequestResponseLabel>
            
            <SambaResponsesWrapper>

                <SambaResponseLabel>UUID</SambaResponseLabel>
                <ResponseValueWrapper>
                  <SambaResponseValue>{uuid || 'None provided'}</SambaResponseValue>
                  <CopyButton onClick={() => copyToClipboard(uuid || '')}>Copy</CopyButton>
                </ResponseValueWrapper>

                <SambaResponseLabel>UUID</SambaResponseLabel>
                <ResponseValueWrapper>
                  <SambaResponseValue>{uuid || 'None provided'}</SambaResponseValue>
                  <CopyButton onClick={() => copyToClipboard(uuid || '')}>Copy</CopyButton>
                </ResponseValueWrapper>

                <SambaResponseLabel>UUID</SambaResponseLabel>
                <ResponseValueWrapper>
                  <SambaResponseValue>{uuid || 'None provided'}</SambaResponseValue>
                  <CopyButton onClick={() => copyToClipboard(uuid || '')}>Copy</CopyButton>
                </ResponseValueWrapper>

                <SambaResponseLabel>UUID</SambaResponseLabel>
                <ResponseValueWrapper>
                  <SambaResponseValue>{uuid || 'None provided'}</SambaResponseValue>
                  <CopyButton onClick={() => copyToClipboard(uuid || '')}>Copy</CopyButton>
                </ResponseValueWrapper>

            </SambaResponsesWrapper>

          </SambaResponseSection>
        )}
      </SambaInnerContainer>
    </SambaContainer>
  );
};

export default GetSamba;
