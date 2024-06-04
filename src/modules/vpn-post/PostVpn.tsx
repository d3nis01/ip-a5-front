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

import { createVpnAccount } from '../../services/vpn-service';
import { ICreateVpn, ICreateVpnResponse } from '../../types/IServiceTypesRequests';
import { isIPv4 } from '../../utils/inputValidators';

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
  const [formData, setFormData] = useState({
    iPv4Address: '',
    description: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [postResponse, setResponse] = useState<ICreateVpnResponse>();
  const [errors, setErrors] = useState({
    addressError: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { iPv4Address, description } = formData;
    const newErrors = { addressError: '' };

    if (!isIPv4(iPv4Address)) {
      newErrors.addressError = 'Invalid Address!';
      setErrors(newErrors);
      console.error('Invalid IPv4 address');
      return;
    }

    setErrors(newErrors);

    const requestBody: ICreateVpn = {
      iPv4Address,
      description,
    };

    const response = await createVpnAccount(requestBody);
    setResponse(response);
    setIsFormSubmitted(true);
  };

  const inputFields = [
    {
      label: 'IPv4 Address',
      name: 'iPv4Address',
      type: 'text',
      value: formData.iPv4Address,
      placeholder: '0.0.0.0',
      error: errors.addressError,
      component: VpnPostInput,
    },
    {
      label: 'Description',
      name: 'description',
      type: 'textarea',
      value: formData.description,
      placeholder: 'Description: Lorem ipsum dolor sit amet.',
      component: VpnPostTextarea,
    },
  ];

  const responseFields = [
    { label: 'UUID', value: postResponse?.uuid },
    { label: 'Status code', value: `${postResponse?.status} ${postResponse?.statusText}` },
  ];

  return (
    <VPNPostContainer>
      <VPNPostInnerContainer>
        <PostVpnTitle>Post VPN</PostVpnTitle>
        <VpnPostForm onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <VpnPostInputWrapper key={index}>
              <VpnPostLabel htmlFor={field.name}>{field.label} *</VpnPostLabel>
              {field.component === VpnPostInput ? (
                <VpnPostInput id={field.name} name={field.name} type={field.type} value={field.value} onChange={handleInputChange} placeholder={field.placeholder} required />
              ) : (
                <VpnPostTextarea id={field.name} name={field.name} value={field.value} onChange={handleInputChange} placeholder={field.placeholder} required />
              )}
              {field.error && <VpnInputError>{field.error}</VpnInputError>}
            </VpnPostInputWrapper>
          ))}
          <VpnPostSubmitButton type="submit">Submit</VpnPostSubmitButton>
        </VpnPostForm>
        {isFormSubmitted && postResponse && (
          <VpnPostResponseSection>
            <RequestResponseLabel>Request response</RequestResponseLabel>
            <VpnPostResponseWrapper>
              {responseFields.map(
                (field, index) =>
                  field.value && (
                    <VpnPostResponseItemWrapper key={index}>
                      <ResponseLabel>{field.label}</ResponseLabel>
                      <VpnPostResponseValueContainer>
                        <ResponseValue>{field.value}</ResponseValue>
                        <CopyButton onClick={() => copyToClipboard(field.value ?? '')}>Copy</CopyButton>
                      </VpnPostResponseValueContainer>
                    </VpnPostResponseItemWrapper>
                  ),
              )}
            </VpnPostResponseWrapper>
          </VpnPostResponseSection>
        )}
      </VPNPostInnerContainer>
    </VPNPostContainer>
  );
};

export default PostVpn;
