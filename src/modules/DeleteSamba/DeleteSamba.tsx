import React, { useState } from 'react';
import {
  DeleteSambaContainer, DeleteSambaTitle, UUIDForm, UUIDLabel, UUIDInput, SubmitButton, ResponseSection, ResponseItem, ResponseLabel,
  ResponseValue, ResponseContent, ResponseBox, RequestResponseLabel, CopyButton
} from './styles';

const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard) {
    console.error('Clipboard not available');
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    alert('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};

const DeleteSamba = (): JSX.Element => {
  const [uuid, setUuid] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <DeleteSambaContainer>
      <DeleteSambaTitle><b>Delete Samba</b></DeleteSambaTitle>
      <UUIDForm onSubmit={handleSubmit}>
        <UUIDLabel htmlFor="uuid">UUID</UUIDLabel>
        <UUIDInput
          id="uuid"
          type="text"
          value={uuid}
          onChange={(e) => setUuid(e.target.value)}
          placeholder="00000000-0000-0000-0000-000000000000"
          required
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </UUIDForm>
      {submitted && (
  <ResponseSection>
    <RequestResponseLabel>Request response</RequestResponseLabel>
    <ResponseLabel>Status code</ResponseLabel>
    <ResponseItem>
      <ResponseBox>
        <ResponseContent>
          <ResponseValue>200 Success</ResponseValue>
          <CopyButton onClick={() => copyToClipboard('200 Success')}>Copy</CopyButton>
        </ResponseContent>
      </ResponseBox>
    </ResponseItem>
  </ResponseSection>
)}
    </DeleteSambaContainer>
  );
};

export default DeleteSamba;
