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
  VpnInputError,
} from './styles';

import { createVpnAccount } from '../../services/vpnService';
import { ICreateVpn, ICreateVpnResponse } from '../../types/IServiceTypesRequests';
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

const PostVpn = (): JSX.Element => {
  const [iPv4Address, setIPv4Address] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [postResponse, setResponse] = useState<ICreateVpnResponse>();
  const [adressError, setAdressError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody: ICreateVpn = {
      iPv4Address,
      description,
    };

    if (isIPv4(iPv4Address) === false) {
      setAdressError('Invalid Adress!');
      console.error('Invalid IPv4 address');
      return;
    }
    setAdressError('');

    const response = await createVpnAccount(requestBody);
    setResponse(response);
    setIsFormSubmitted(true);
  };


  return (
    <VPNPostContainer>
      <VPNPostInnerContainer>
        <PostVpnTitle>Post VPN</PostVpnTitle>
        <VpnPostForm onSubmit={handleSubmit}>
          <VpnPostInputWrapper>
            <VpnPostLabel htmlFor="ipv4Address">IPv4 Address*</VpnPostLabel>
            <VpnPostInput type="text" id="iPv4Address" name="iPv4Address" value={iPv4Address} onChange={e => setIPv4Address(e.target.value)} placeholder="0.0.0.0" required />
            {adressError && <VpnInputError>Invalid Adress!</VpnInputError>}
          </VpnPostInputWrapper>
          <VpnPostInputWrapper>
            <VpnPostLabel htmlFor="description">Description*</VpnPostLabel>
            <VpnPostTextarea
              id="description"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description: Lorem ipsum dolor sit amet."
              required
            />
          </VpnPostInputWrapper>
          <VpnPostSubmitButton type="submit">Submit</VpnPostSubmitButton>
        </VpnPostForm>
        {isFormSubmitted && (
          <VpnPostResponseSection>
            <RequestResponseLabel>Request response</RequestResponseLabel>
            <VpnPostResponseWrapper>
              <VpnPostResponseItemWrapper>
                <ResponseLabel>UUID</ResponseLabel>
                <VpnPostResponseValueContainer>
                  <ResponseValue>{postResponse?.uuid}</ResponseValue>
                  <CopyButton onClick={() => copyToClipboard(postResponse?.uuid || '')}>Copy</CopyButton>
                </VpnPostResponseValueContainer>
              </VpnPostResponseItemWrapper>

              <VpnPostResponseItemWrapper>
                <ResponseLabel>Status code</ResponseLabel>
                <VpnPostResponseValueContainer>
                  <ResponseValue>{String(postResponse?.status) + ' ' + postResponse?.statusText}</ResponseValue>
                  <CopyButton onClick={() => copyToClipboard(String(postResponse?.status) || '')}>Copy</CopyButton>
                </VpnPostResponseValueContainer>
              </VpnPostResponseItemWrapper>
            </VpnPostResponseWrapper>
          </VpnPostResponseSection>
        )}
      </VPNPostInnerContainer>
    </VPNPostContainer>
  );
};

export default PostVpn;
