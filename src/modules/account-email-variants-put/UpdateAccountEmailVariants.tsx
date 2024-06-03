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

import { updateAccountEmailVariants } from '../../services/account-service';
import { isAccountUUID, isEmail, isEmailFaculty, isPhoneNumber } from '../../utils/inputValidators';
import { UpdateAccountEmailVariantsParams } from '../../types/IServiceTypesRequests';

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

const UpdateAccountEmailVariants = (): JSX.Element => {
  const [id, setId] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');
  const [newAlternateEmail, setNewAlternateEmail] = useState<string>('');
  const [telephone, setTelephone] = useState<string>('');
  const [response, setResponse] = useState<any>(null);
  const [isGidError, setIsGidError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');
  const [isEmailError, setIsEmailError] = useState<string>('');
  const [isAlternateEmailError, setIsAlternateEmailError] = useState<string>('');
  const [isPhoneNumberError, setIsPhoneNumberError] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isAccountUUID(id)) {
      setIsGidError('Invalid GID!');
      return;
    } else {
      setIsGidError('');
    }

    if (newPassword !== confirmNewPassword) {
      setConfirmPasswordError('Passwords do not match!');
      return;
    } else {
      setConfirmPasswordError('');
    }

    if (!isEmailFaculty(newEmail)) {
      setIsEmailError('Invalid email!');
      return;
    } else {
      setIsEmailError('');
    }

    if (!isEmail(newAlternateEmail)) {
      setIsAlternateEmailError('Invalid alternate email');
      return;
    } else {
      setIsAlternateEmailError('');
    }

    if (!isPhoneNumber(telephone)) {
      setIsPhoneNumberError('Invalid phone number');
      return;
    } else {
      setIsPhoneNumberError('');
    }

    try {
      const updateData: UpdateAccountEmailVariantsParams = {
        mail: newEmail,
        mailAlternateAddress: newAlternateEmail,
        userPassword: newPassword,
        telephoneNumber: telephone,
      };

      const updateResponse = await updateAccountEmailVariants(id, updateData);
      setResponse(updateResponse);
      setIsFormSubmitted(true);
    } catch (error) {
      console.error('Error updating account:', error);
    }
  };

  return (
    <AccountUpdateContainer>
      <AccountUpdateInnerContainer>
        <UpdateAccountTitle>Update Account Email Variants</UpdateAccountTitle>
        <AccountUpdateForm onSubmit={handleSubmit}>
          <AccountUpdateInputWrapper>
            <AccountUpdateLabel htmlFor="gid">GID *</AccountUpdateLabel>
            <AccountUpdateInput type="text" id="gid" name="gid" value={id} onChange={e => setId(e.target.value)} placeholder="2000 - 7999" required />
            {isGidError && <AccountInputError>{isGidError}</AccountInputError>}
          </AccountUpdateInputWrapper>
          <AccountUpdateInputWrapper>
            <AccountUpdateLabel htmlFor="email">New Email *</AccountUpdateLabel>
            <AccountUpdateInput type="email" id="email" name="email" value={newEmail} onChange={e => setNewEmail(e.target.value)} placeholder="example@info.uaic.ro" required />
            {isEmailError && <AccountInputError>{isEmailError}</AccountInputError>}
          </AccountUpdateInputWrapper>
          <AccountUpdateInputWrapper>
            <AccountUpdateLabel htmlFor="altEmail">New Alternate Email *</AccountUpdateLabel>
            <AccountUpdateInput
              type="email"
              id="altEmail"
              name="altEmail"
              value={newAlternateEmail}
              onChange={e => setNewAlternateEmail(e.target.value)}
              placeholder="example@example.com"
              required
            />
            {isAlternateEmailError && <AccountInputError>{isAlternateEmailError}</AccountInputError>}
          </AccountUpdateInputWrapper>
          <AccountUpdateInputWrapper>
            <AccountUpdateLabel htmlFor="telephone">New Telephone Number *</AccountUpdateLabel>
            <AccountUpdateInput type="text" id="telephone" name="telephone" value={telephone} onChange={e => setTelephone(e.target.value)} placeholder="07XXXXXXXX" required />
            {isPhoneNumberError && <AccountInputError>{isPhoneNumberError}</AccountInputError>}
          </AccountUpdateInputWrapper>
          <AccountUpdateInputWrapper>
            <AccountUpdateLabel htmlFor="password">New Password *</AccountUpdateLabel>
            <AccountUpdateInput type="password" id="password" name="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="******" required />
          </AccountUpdateInputWrapper>
          <AccountUpdateInputWrapper>
            <AccountUpdateLabel htmlFor="confirmPassword">Confirm New Password *</AccountUpdateLabel>
            <AccountUpdateInput
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmNewPassword}
              onChange={e => setConfirmNewPassword(e.target.value)}
              placeholder="******"
              required
            />
            {confirmPasswordError && <AccountInputError>{confirmPasswordError}</AccountInputError>}
          </AccountUpdateInputWrapper>

          <AccountUpdateSubmitButton type="submit">Submit</AccountUpdateSubmitButton>
        </AccountUpdateForm>
        {isFormSubmitted && (
          <AccountUpdateResponseSection>
            <RequestResponseLabel>Request response</RequestResponseLabel>
            <AccountUpdateResponseWrapper>
              <AccountUpdateResponseItemWrapper>
                <ResponseLabel>Status code</ResponseLabel>
                <AccountUpdateResponseValueContainer>
                  <ResponseValue>{String(response?.status) + ' ' + response?.statusText}</ResponseValue>
                  <CopyButton onClick={() => copyToClipboard(String(response?.status) || '')}>Copy</CopyButton>
                </AccountUpdateResponseValueContainer>
              </AccountUpdateResponseItemWrapper>
            </AccountUpdateResponseWrapper>
          </AccountUpdateResponseSection>
        )}
      </AccountUpdateInnerContainer>
    </AccountUpdateContainer>
  );
};

export default UpdateAccountEmailVariants;
