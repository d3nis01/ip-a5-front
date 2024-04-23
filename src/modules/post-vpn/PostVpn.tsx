import React, { useState } from 'react';
import {
  PostVpnTitle,
  VpnPostForm,
  VpnPostLabel,
  VpnPostInput,
  VpnPostSubmitButton,
  VpnPostResponseSection,
  ResponseLabel,
  ResponseValue,
  RequestResponseLabel,
  CopyButton,
  VPNPostContainer,
  VPNPostInnerContainer,
  VpnPostInputWrapper,
  VpnPostTextarea,
  VpnPostResponseWrapper,
  VpnPostResponseItemWrapper,
  VpnPostResponseValueContainer,
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

const PostVpn = (): JSX.Element => {
  const [iPv4Address, setIPv4Address] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [responseItems, setResponseItems] = useState<IResponseItem[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newResponseItems = createResponseItems('uuid', '200 Success');
    setResponseItems(newResponseItems);
    setIsFormSubmitted(true);
  };

  return (
    <VPNPostContainer>
      <VPNPostInnerContainer>
        <PostVpnTitle>Post VPN</PostVpnTitle>
        <VpnPostForm onSubmit={handleSubmit}>
          <VpnPostInputWrapper>
            <VpnPostLabel htmlFor="ipv4Address">IPv4Address</VpnPostLabel>
            <VpnPostInput type="text" id="iPv4Address" name="iPv4Address" value={iPv4Address} onChange={e => setIPv4Address(e.target.value)} placeholder="0.0.0.0" required />
          </VpnPostInputWrapper>
          <VpnPostInputWrapper>
            <VpnPostLabel htmlFor="description">Description *</VpnPostLabel>
            <VpnPostTextarea
              id="description"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="description: Lorem ipsum dolor sit amet. "
              required
            />
          </VpnPostInputWrapper>
          <VpnPostSubmitButton type="submit">Submit</VpnPostSubmitButton>
        </VpnPostForm>
        {isFormSubmitted && (
          <VpnPostResponseSection>
            <RequestResponseLabel>Request response</RequestResponseLabel>
            <VpnPostResponseWrapper>
              {responseItems.map((item, index) => (
                <VpnPostResponseItemWrapper>
                  <ResponseLabel>{item.title}</ResponseLabel>
                  <VpnPostResponseValueContainer>
                    <ResponseValue>{item.value}</ResponseValue>
                    <CopyButton onClick={() => copyToClipboard(item.value)}>Copy</CopyButton>
                  </VpnPostResponseValueContainer>
                </VpnPostResponseItemWrapper>
              ))}
            </VpnPostResponseWrapper>
          </VpnPostResponseSection>
        )}
      </VPNPostInnerContainer>
    </VPNPostContainer>
  );
};

export default PostVpn;
