import React, { useState } from 'react';
import {
  DeleteVpnTitle,
  UUIDForm,
  UUIDLabel,
  UUIDInput,
  SubmitButton,
  ResponseSection,
  ResponseLabel,
  ResponseValue,
  RequestResponseLabel,
  CopyButton,
  VpnDeleteContainer,
  VpnDeleteInnerContainer,
  UuidInputWrapper,
  VpnDeleteResponseWrapper,
  VpnDeleteResponseItem,
  VpnDeleteResponseBox,
} from './styles';
import { IResponseItem, createResponseItems } from './constants';

const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard) {
    console.error('Clipboard not available');
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};

const DeleteVpn = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [responseItems, setResponseItems] = useState<IResponseItem[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newResponseItems = createResponseItems(uuid, '200 Success');
    setResponseItems(newResponseItems);
    setIsFormSubmitted(true);
  };

  const handleValueSize = (value: string): string => {
    if (value.length > 50) {
      return `${value.slice(0, 25)}...`;
    }
    return value;
  };

  return (
    <VpnDeleteContainer>
      <VpnDeleteInnerContainer>
        <DeleteVpnTitle>Delete VPN</DeleteVpnTitle>
        <UUIDForm onSubmit={handleSubmit}>
          <UuidInputWrapper>
            <UUIDLabel htmlFor="uuid">UUID</UUIDLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
          </UuidInputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </UUIDForm>
        {isFormSubmitted && (
          <ResponseSection>
            <RequestResponseLabel>Request response</RequestResponseLabel>
            <VpnDeleteResponseWrapper>
              {responseItems.map(item => (
                <VpnDeleteResponseItem>
                  <ResponseLabel>{item.title}</ResponseLabel>
                  <VpnDeleteResponseBox>
                    <ResponseValue>{handleValueSize(item.value)}</ResponseValue>
                    <CopyButton onClick={() => copyToClipboard(item.value)}>Copy</CopyButton>
                  </VpnDeleteResponseBox>
                </VpnDeleteResponseItem>
              ))}
            </VpnDeleteResponseWrapper>
          </ResponseSection>
        )}
      </VpnDeleteInnerContainer>
    </VpnDeleteContainer>
  );
};

export default DeleteVpn;
