import React, { useState } from 'react';
import {
  DeleteVpnContainer,
  DeleteVpnTitle,
  UUIDForm,
  UUIDLabel,
  UUIDInput,
  SubmitButton,
  ResponseSection,
  ResponseItem,
  ResponseLabel,
  ResponseValue,
  ResponseContent,
  ResponseBox,
  RequestResponseLabel,
  CopyButton,
} from './styles';
import { IResponseItem, createResponseItems } from './constants';

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

const DeleteVpn = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [responseItems, setResponseItems] = useState<IResponseItem[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newResponseItems = createResponseItems(uuid, '200 Success');
    setResponseItems(newResponseItems);
    setSubmitted(true);
  };
  return (
    <DeleteVpnContainer>
      <DeleteVpnTitle>
        <b>Delete VPN</b>
      </DeleteVpnTitle>
      <UUIDForm onSubmit={handleSubmit}>
        <UUIDLabel htmlFor="uuid">UUID</UUIDLabel>
        <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
        <SubmitButton type="submit">Submit</SubmitButton>
      </UUIDForm>
      {submitted && (
        <ResponseSection>
          <RequestResponseLabel>Request response</RequestResponseLabel>
          {responseItems.map((item, index) => (
            <React.Fragment key={index}>
              <ResponseLabel>{item.title}</ResponseLabel>
              <ResponseItem key={index}>
                <ResponseBox>
                  <ResponseContent>
                    <ResponseValue>{item.value}</ResponseValue>
                    <CopyButton onClick={() => copyToClipboard(item.value)}>Copy</CopyButton>
                  </ResponseContent>
                </ResponseBox>
              </ResponseItem>
            </React.Fragment>
          ))}
        </ResponseSection>
      )}
    </DeleteVpnContainer>
  );
};

export default DeleteVpn;
