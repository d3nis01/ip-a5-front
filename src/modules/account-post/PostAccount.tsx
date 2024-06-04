import React, { useState } from 'react';
import {
  PostAccountTitle,
  AccountPostForm,
  AccountPostLabel,
  AccountPostInput,
  AccountPostSubmitButton,
  AccountPostResponseSection,
  ResponseLabel,
  ResponseValue,
  RequestResponseLabel,
  CopyButton,
  AccountPostContainer,
  AccountPostInnerContainer,
  AccountPostInputWrapper,
  AccountPostResponseWrapper,
  AccountPostResponseItemWrapper,
  AccountPostResponseValueContainer,
  AccountInputError,
} from './styles';

import { createAccount } from '../../services/account-service';
import { ICreateAccount, ICreateAccountResponse } from '../../types/IServiceTypesRequests';
import { isMatricol } from '../../utils/inputValidators';

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

const PostAccount = (): JSX.Element => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    matricol: '',
  });
  const [passwordError, setPasswordError] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [postResponse, setResponse] = useState<ICreateAccountResponse>();
  const [matricolError, setMatricolError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isMatricol(formData.matricol) === false) {
      setMatricolError('Matricol is not valid');
      console.error('Matricol is not valid');
      return;
    }
    setMatricolError('');

    if (formData.confirmPassword !== formData.password) {
      setPasswordError('Passwords do not match');
      return;
    }

    setPasswordError('');

    const requestObject: ICreateAccount = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
      matricol: formData.matricol,
    };

    const response = await createAccount(requestObject);
    setResponse(response);
    setIsFormSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const inputFields = [
    { label: 'Username', name: 'username', type: 'text', placeholder: '', required: true },
    { label: 'Password', name: 'password', type: 'password', placeholder: '', required: true },
    { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: '', required: true },
    { label: 'Email', name: 'email', type: 'email', placeholder: '', required: true },
    { label: 'Matricol', name: 'matricol', type: 'text', placeholder: '', required: true },
  ];

  const responseFields = [
    { label: 'UUID', value: postResponse?.uuid },
    { label: 'Status code', value: `${postResponse?.status} ${postResponse?.statusText}` },
  ];

  return (
    <AccountPostContainer>
      <AccountPostInnerContainer>
        <PostAccountTitle>Post Account</PostAccountTitle>
        <AccountPostForm onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <AccountPostInputWrapper key={index}>
              <AccountPostLabel htmlFor={field.name}>{field.label} *</AccountPostLabel>
              <AccountPostInput
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleInputChange}
                placeholder={field.placeholder}
                required={field.required}
              />
              {field.name === 'confirmPassword' && passwordError && <AccountInputError>Passwords do not match!</AccountInputError>}
              {field.name === 'matricol' && matricolError && <AccountInputError>Matricol is not valid!</AccountInputError>}
            </AccountPostInputWrapper>
          ))}
          <AccountPostSubmitButton type="submit">Submit</AccountPostSubmitButton>
        </AccountPostForm>
        {isFormSubmitted && (
          <AccountPostResponseSection>
            <RequestResponseLabel>Request response</RequestResponseLabel>
            <AccountPostResponseWrapper>
              {responseFields.map(
                (field, index) =>
                  field.value && (
                    <AccountPostResponseItemWrapper key={index}>
                      <ResponseLabel>{field.label}</ResponseLabel>
                      <AccountPostResponseValueContainer>
                        <ResponseValue>{field.value}</ResponseValue>
                        <CopyButton onClick={() => copyToClipboard(field.value ?? '')}>Copy</CopyButton>
                      </AccountPostResponseValueContainer>
                    </AccountPostResponseItemWrapper>
                  ),
              )}
            </AccountPostResponseWrapper>
          </AccountPostResponseSection>
        )}
      </AccountPostInnerContainer>
    </AccountPostContainer>
  );
};

export default PostAccount;
