import React, { useState } from 'react';
import {
  PostSambaTitle,
  SambaPostForm,
  SambaPostLabel,
  SambaPostInput,
  SambaPostSubmitButton,
  SambaPostTextarea,
  SambaPostContainer,
  SambaPostInnerContainer,
  SambaPostInputWrapper,
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
  const [formData, setFormData] = useState({
    iPv4Address: '',
    description: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [postResponse, setResponse] = useState<ICreateSambaResponse>();
  const [errors, setErrors] = useState({
    addressError: '',
    descriptionError: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { iPv4Address, description } = formData;
    const newErrors = { addressError: '', descriptionError: '' };

    if (!isIPv4(iPv4Address)) {
      newErrors.addressError = 'Invalid Address!';
    }

    if (!isDescriptionTrimmedMinLength(description, 10)) {
      newErrors.descriptionError = 'Invalid description!';
    }

    if (newErrors.addressError || newErrors.descriptionError) {
      setErrors(newErrors);
      return;
    }

    setErrors(newErrors);

    const requestBody: ICreateSamba = {
      iPv4Address,
      description,
    };

    const response = await createSambaAccount(requestBody);
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
      component: 'input',
    },
    {
      label: 'Description',
      name: 'description',
      type: 'textarea',
      value: formData.description,
      placeholder: 'Description: Lorem ipsum dolor sit amet.',
      error: errors.descriptionError,
      component: 'textarea',
    },
  ];

  return (
    <SambaPostContainer>
      <SambaPostInnerContainer>
        <PostSambaTitle>Post Samba</PostSambaTitle>
        <SambaPostForm onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <SambaPostInputWrapper key={index}>
              <SambaPostLabel htmlFor={field.name}>{field.label} *</SambaPostLabel>
              {field.component === 'input' ? (
                <SambaPostInput id={field.name} name={field.name} type={field.type} value={field.value} onChange={handleInputChange} placeholder={field.placeholder} required />
              ) : (
                <SambaPostTextarea id={field.name} name={field.name} value={field.value} onChange={handleInputChange} placeholder={field.placeholder} required />
              )}
              {field.error && <SambaInputError>{field.error}</SambaInputError>}
            </SambaPostInputWrapper>
          ))}
          <SambaPostSubmitButton type="submit">Submit</SambaPostSubmitButton>
        </SambaPostForm>
      </SambaPostInnerContainer>
    </SambaPostContainer>
  );
};

export default PostSamba;
