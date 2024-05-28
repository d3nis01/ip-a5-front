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
  SambaInputError,
} from './styles';

import { createSambaAccount } from '../../services/sambaService';
import { ICreateSamba, ICreateSambaResponse } from '../../types/IServiceTypesRequests';
import { isIPv4 } from '../../utils/forms/inputValidators';

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
  const [postResponse, setResponse] = useState<ICreateSambaResponse>();
  const [adressError, setAdressError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody: ICreateSamba = {
      iPv4Address,
      description,
    };

    if (isIPv4(iPv4Address) === false) {
      setAdressError('Invalid Adress!');
      console.error('Invalid IPv4 address');
      return;
    }
    setAdressError('');

    const response = await createSambaAccount(requestBody);
    setResponse(response);
    setIsFormSubmitted(true);
  };

  return (
    <SambaPostContainer>
      <SambaPostInnerContainer>
        <PostSambaTitle>Post Samba</PostSambaTitle>
        <SambaPostForm onSubmit={handleSubmit}>
          <SambaPostInputWrapper>
            <SambaPostLabel htmlFor="ipv4Address">IPv4Address*</SambaPostLabel>
            <SambaPostInput type="text" id="iPv4Address" name="iPv4Address" value={iPv4Address} onChange={e => setIPv4Address(e.target.value)} placeholder="0.0.0.0" required />
            {adressError && <SambaInputError>Invalid Adress!</SambaInputError>}
          </SambaPostInputWrapper>
          <SambaPostInputWrapper>
            <SambaPostLabel htmlFor="description">Description*</SambaPostLabel>
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
              <SambaPostResponseItemWrapper>
                <ResponseLabel>UUID</ResponseLabel>
                <SambaPostResponseValueContainer>
                  <ResponseValue>{postResponse?.uuid}</ResponseValue>
                  <CopyButton onClick={() => copyToClipboard(postResponse?.uuid || '')}>Copy</CopyButton>
                </SambaPostResponseValueContainer>
              </SambaPostResponseItemWrapper>

              <SambaPostResponseItemWrapper>
                <ResponseLabel>Status code</ResponseLabel>
                <SambaPostResponseValueContainer>
                  <ResponseValue>{String(postResponse?.status) + ' ' + postResponse?.statusText}</ResponseValue>
                  <CopyButton onClick={() => copyToClipboard(String(postResponse?.status) || '')}>Copy</CopyButton>
                </SambaPostResponseValueContainer>
              </SambaPostResponseItemWrapper>
            </SambaPostResponseWrapper>
          </SambaPostResponseSection>
        )}
      </SambaPostInnerContainer>
    </SambaPostContainer>
  );
};

export default PostSamba;
