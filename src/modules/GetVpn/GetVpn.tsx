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
  VPNResponseItem, 
  VPNResponseLabel, 
  VPNResponseValue, 
  VPNResponseContent, 
  VPNResponseBox, 
  VPNRequestResponseLabel 
} from './styles'; 

const GetVpn = (): JSX.Element => {
  const [uuid, setUuid] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
    }).catch(err => {
      console.error('Eroare la copierea în clipboard: ', err);
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <VPNContainer>
    <VPNTitle><b>Get VPN</b></VPNTitle>
    <VPNForm onSubmit={handleSubmit}>
     <VPNLabel htmlFor="uuid">UUID</VPNLabel>
       <InputWrapper>
         <UUIDInput
           id="uuid"
           type="text"
           value={uuid}
           onChange={(e) => setUuid(e.target.value)}
           placeholder="00000000-0000-0000-0000-000000000000"
           required
         />
       <SubmitButton type="submit">Submit</SubmitButton>
      </InputWrapper>
    </VPNForm>

    {submitted && (     
    <VPNResponseSection>

    <VPNRequestResponseLabel>Request response</VPNRequestResponseLabel>
    <VPNResponseLabel>UUID</VPNResponseLabel>
    <VPNResponseItem>
    <VPNResponseBox>
    <VPNResponseContent>
        <VPNResponseValue>{uuid || 'None provided'}</VPNResponseValue>
        <CopyButton onClick={() => copyToClipboard(uuid || '')}>Copy</CopyButton>
    </VPNResponseContent>
    </VPNResponseBox>
    </VPNResponseItem>

    <VPNResponseLabel>Description</VPNResponseLabel>
    <VPNResponseItem>
    <VPNResponseBox>
    <VPNResponseContent>
        <VPNResponseValue>string</VPNResponseValue>
        <CopyButton onClick={() => copyToClipboard('string')}>Copy</CopyButton>
    </VPNResponseContent>
    </VPNResponseBox>
    </VPNResponseItem>

    <VPNResponseLabel>iPv4Address</VPNResponseLabel>
    <VPNResponseItem>
    <VPNResponseBox>
    <VPNResponseContent>
        <VPNResponseValue>string</VPNResponseValue>
        <CopyButton onClick={() => copyToClipboard('string')}>Copy</CopyButton>
    </VPNResponseContent>
    </VPNResponseBox>
    </VPNResponseItem>

    <VPNResponseLabel>Status code</VPNResponseLabel>
    <VPNResponseItem>
    <VPNResponseBox>
    <VPNResponseContent>
        <VPNResponseValue>200 Success</VPNResponseValue>
        <CopyButton onClick={() => copyToClipboard('200 Success')}>Copy</CopyButton>
    </VPNResponseContent>
    </VPNResponseBox>
    </VPNResponseItem>

    </VPNResponseSection>
    )}

    </VPNContainer>
    );
    };

export default GetVpn;
