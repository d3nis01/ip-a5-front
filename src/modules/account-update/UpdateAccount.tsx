import React, { useState } from 'react';
import {
  UpdateAccountTitle,
  AccountUpdateForm,
  AccountUpdateLabel,
  AccountUpdateInput,
  AccountUpdateSubmitButton,
  AccountUpdateResponseSection,
  ResponseLabel,
  ResponseValue,
  RequestResponseLabel,
  CopyButton,
  AccountUpdateContainer,
  AccountUpdateInnerContainer,
  AccountUpdateInputWrapper,
  AccountUpdateResponseWrapper,
  AccountUpdateResponseItemWrapper,
  AccountUpdateResponseValueContainer,
  AccountInputError,
} from './styles';

import { updateAccount } from '../../services/account-service';
import { isUUID } from '../../utils/inputValidators';

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

const UpdateAccount = (): JSX.Element => {
  const [formData, setFormData] = useState({
    id: '',
    newUsername: '',
    newPassword: '',
    confirmNewPassword: '',
    newEmail: '',
  });
  const [response, setResponse] = useState<any>(null);
  const [errors, setErrors] = useState({
    isUuidError: '',
    confirmPasswordError: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { id, newPassword, confirmNewPassword } = formData;

    if (!isUUID(id)) {
      setErrors(prevErrors => ({ ...prevErrors, isUuidError: 'Invalid UUID!' }));
      return;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, isUuidError: '' }));
    }

    if (newPassword !== confirmNewPassword) {
      setErrors(prevErrors => ({ ...prevErrors, confirmPasswordError: 'Passwords do not match!' }));
      return;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, confirmPasswordError: '' }));
    }

    try {
      const { newUsername, newPassword, newEmail } = formData;

      const updateData = {
        newUsername,
        newPassword,
        newEmail,
      };

      const updateResponse = await updateAccount(id, updateData);
      setResponse(updateResponse);
      setIsFormSubmitted(true);
    } catch (error) {
      console.error('Error updating account:', error);
    }
  };

  const inputFields = [
    { label: 'UUID', name: 'id', type: 'text', placeholder: '', required: true, error: errors.isUuidError },
    { label: 'New Username', name: 'newUsername', type: 'text', placeholder: '', required: true },
    { label: 'New Password', name: 'newPassword', type: 'password', placeholder: '', required: true },
    { label: 'Confirm New Password', name: 'confirmNewPassword', type: 'password', placeholder: '', required: true, error: errors.confirmPasswordError },
    { label: 'New Email', name: 'newEmail', type: 'email', placeholder: '', required: true },
  ];

  const responseFields = [{ label: 'Status code', value: `${response?.status} ${response?.statusText}` }];

  return (
    <AccountUpdateContainer>
      <AccountUpdateInnerContainer>
        <UpdateAccountTitle>Update Account</UpdateAccountTitle>
        <AccountUpdateForm onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <AccountUpdateInputWrapper key={index}>
              <AccountUpdateLabel htmlFor={field.name}>{field.label} *</AccountUpdateLabel>
              <AccountUpdateInput
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleInputChange}
                placeholder={field.placeholder}
                required={field.required}
              />
              {field.error && <AccountInputError>{field.error}</AccountInputError>}
            </AccountUpdateInputWrapper>
          ))}
          <AccountUpdateSubmitButton type="submit">Submit</AccountUpdateSubmitButton>
        </AccountUpdateForm>
        {isFormSubmitted && (
          <AccountUpdateResponseSection>
            <RequestResponseLabel>Request response</RequestResponseLabel>
            <AccountUpdateResponseWrapper>
              {responseFields.map(
                (field, index) =>
                  field.value && (
                    <AccountUpdateResponseItemWrapper key={index}>
                      <ResponseLabel>{field.label}</ResponseLabel>
                      <AccountUpdateResponseValueContainer>
                        <ResponseValue>{field.value}</ResponseValue>
                        <CopyButton onClick={() => copyToClipboard(field.value ?? '')}>Copy</CopyButton>
                      </AccountUpdateResponseValueContainer>
                    </AccountUpdateResponseItemWrapper>
                  ),
              )}
            </AccountUpdateResponseWrapper>
          </AccountUpdateResponseSection>
        )}
      </AccountUpdateInnerContainer>
    </AccountUpdateContainer>
  );
};

export default UpdateAccount;
