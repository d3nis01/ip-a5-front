import React, { useState } from 'react';
import {
  PostSambaTitle,
  SambaPostForm,
  SambaPostLabel,
  SambaPostInput,
  SambaPostSubmitButton,
  SambaPostResponseSection,
  ResponseLabel,
  ResponseValue,
  RequestResponseLabel,
  CopyButton,
  SambaPostContainer,
  SambaPostInnerContainer,
  SambaPostInputWrapper,
  SambaPostTextarea,
  SambaPostResponseWrapper,
  SambaPostResponseItemWrapper,
  SambaPostResponseValueContainer,
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

const PostSamba = (): JSX.Element => {
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
    <SambaPostContainer>
      <SambaPostInnerContainer>
        <PostSambaTitle>Post Samba</PostSambaTitle>
        <SambaPostForm onSubmit={handleSubmit}>
          <SambaPostInputWrapper>
            <SambaPostLabel htmlFor="ipv4Address">IPv4Address</SambaPostLabel>
            <SambaPostInput type="text" id="iPv4Address" name="iPv4Address" value={iPv4Address} onChange={e => setIPv4Address(e.target.value)} placeholder="0.0.0.0" required />
          </SambaPostInputWrapper>
          <SambaPostInputWrapper>
            <SambaPostLabel htmlFor="description">Description *</SambaPostLabel>
            <SambaPostTextarea
              id="description"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="description: Lorem ipsum dolor sit amet. "
              required
            />
          </SambaPostInputWrapper>
          <SambaPostSubmitButton type="submit">Submit</SambaPostSubmitButton>
        </SambaPostForm>
        {isFormSubmitted && (
          <SambaPostResponseSection>
            <RequestResponseLabel>Request response</RequestResponseLabel>
            <SambaPostResponseWrapper>
              {responseItems.map((item, index) => (
                <SambaPostResponseItemWrapper>
                  <ResponseLabel>{item.title}</ResponseLabel>
                  <SambaPostResponseValueContainer>
                    <ResponseValue>{item.value}</ResponseValue>
                    <CopyButton onClick={() => copyToClipboard(item.value)}>Copy</CopyButton>
                  </SambaPostResponseValueContainer>
                </SambaPostResponseItemWrapper>
              ))}
            </SambaPostResponseWrapper>
          </SambaPostResponseSection>
        )}
      </SambaPostInnerContainer>
    </SambaPostContainer>
  );
};

export default PostSamba;
