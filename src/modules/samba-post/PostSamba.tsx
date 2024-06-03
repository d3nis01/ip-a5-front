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

import { createSambaAccount } from '../../services/samba-service';
import { ICreateSamba, ICreateSambaResponse } from '../../types/IServiceTypesRequests';
import { isDescriptionTrimmedMinLength, isIPv4 } from '../../utils/inputValidators';

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
  const [addressError, setAddressError] = useState<string>('');
  const [descriptionError, setDescriptionError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody: ICreateSamba = {
      iPv4Address,
      description,
    };

    if (isIPv4(iPv4Address) === false) {
      setAddressError('Invalid Address!');
    } else {
      setAddressError('');
    }

    if (isDescriptionTrimmedMinLength(description, 10) === false) {
      setDescriptionError('Invalid description!');
    } else {
      setDescriptionError('');
    }
    
    if (addressError || descriptionError) {
      return;
    }

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
            <SambaPostLabel htmlFor="ipv4Address">IPv4Address *</SambaPostLabel>
            <SambaPostInput type="text" id="iPv4Address" name="iPv4Address" value={iPv4Address} onChange={e => setIPv4Address(e.target.value)} placeholder="0.0.0.0" required />
            {addressError && <SambaInputError>Invalid Address!</SambaInputError>}
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
            {descriptionError && <SambaInputError>Description length should be at least 10 characters!</SambaInputError>}
          </SambaPostInputWrapper>
          <SambaPostSubmitButton type="submit">Submit</SambaPostSubmitButton>
        </SambaPostForm>
      </SambaPostInnerContainer>
    </SambaPostContainer>
  );
};

export default PostSamba;
