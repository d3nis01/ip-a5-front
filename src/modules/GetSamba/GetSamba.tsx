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
  SambaResponseItem, 
  SambaResponseLabel, 
  SambaResponseValue, 
  SambaResponseContent, 
  SambaResponseBox, 
  SambaRequestResponseLabel 
} from './styles'; 

const GetSamba = (): JSX.Element => {
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
    <SambaContainer>
    <SambaTitle><b>Get Samba</b></SambaTitle>
    <SambaForm onSubmit={handleSubmit}>
     <SambaLabel htmlFor="uuid">UUID</SambaLabel>
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
    </SambaForm>

    {submitted && (     
    <SambaResponseSection>

    <SambaRequestResponseLabel>Request response</SambaRequestResponseLabel>
    <SambaResponseLabel>UUID</SambaResponseLabel>
    <SambaResponseItem>
    <SambaResponseBox>
    <SambaResponseContent>
        <SambaResponseValue>{uuid || 'None provided'}</SambaResponseValue>
        <CopyButton onClick={() => copyToClipboard(uuid || '')}>Copy</CopyButton>
    </SambaResponseContent>
    </SambaResponseBox>
    </SambaResponseItem>

    <SambaResponseLabel>Description</SambaResponseLabel>
    <SambaResponseItem>
    <SambaResponseBox>
    <SambaResponseContent>
        <SambaResponseValue>string</SambaResponseValue>
        <CopyButton onClick={() => copyToClipboard('string')}>Copy</CopyButton>
    </SambaResponseContent>
    </SambaResponseBox>
    </SambaResponseItem>

    <SambaResponseLabel>iPv4Address</SambaResponseLabel>
    <SambaResponseItem>
    <SambaResponseBox>
    <SambaResponseContent>
        <SambaResponseValue>string</SambaResponseValue>
        <CopyButton onClick={() => copyToClipboard('string')}>Copy</CopyButton>
    </SambaResponseContent>
    </SambaResponseBox>
    </SambaResponseItem>

    <SambaResponseLabel>Status code</SambaResponseLabel>
    <SambaResponseItem>
    <SambaResponseBox>
    <SambaResponseContent>
        <SambaResponseValue>200 Success</SambaResponseValue>
        <CopyButton onClick={() => copyToClipboard('200 Success')}>Copy</CopyButton>
    </SambaResponseContent>
    </SambaResponseBox>
    </SambaResponseItem>

    </SambaResponseSection>
    )}

    </SambaContainer>
    );
    };

export default GetSamba;
