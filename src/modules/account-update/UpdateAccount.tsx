import React, { useState } from 'react';
import {
  UpdateAccountTitle,
  AccountUpdateForm,
  AccountUpdateLabel,
  AccountUpdateInput,
  AccountUpdateSubmitButton,
  AccountUpdateContainer,
  AccountUpdateInnerContainer,
  AccountUpdateInputWrapper,
  AccountInputError,
} from './styles';
import { updateAccount } from '../../services/account-service';
import { isUUID } from '../../utils/inputValidators';

const UpdateAccount = (): JSX.Element => {
  const [id, setId] = useState<string>('');
  const [newUsername, setNewUsername] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');
  const [response, setResponse] = useState<any>(null);
  const [isUuidError, setIsUuidError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isUUID(id)) {
      setIsUuidError('Invalid UUID!');
      return;
    } else {
      setIsUuidError('');
    }

    if (newPassword !== confirmNewPassword) {
      setConfirmPasswordError('Passwords do not match!');
      return;
    } else {
      setConfirmPasswordError('');
    }

    try {
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

  return (
    <AccountUpdateContainer>
      <AccountUpdateInnerContainer>
        <UpdateAccountTitle>Update Account</UpdateAccountTitle>
        <AccountUpdateForm onSubmit={handleSubmit}>
          <AccountUpdateInputWrapper>
            <AccountUpdateLabel htmlFor="uuid">UUID *</AccountUpdateLabel>
            <AccountUpdateInput type="text" id="uuid" name="uuid" value={id} onChange={e => setId(e.target.value)} placeholder="" required />
            {isUuidError && <AccountInputError>{isUuidError}</AccountInputError>}
          </AccountUpdateInputWrapper>
          <AccountUpdateInputWrapper>
            <AccountUpdateLabel htmlFor="username">New Username *</AccountUpdateLabel>
            <AccountUpdateInput type="text" id="username" name="username" value={newUsername} onChange={e => setNewUsername(e.target.value)} placeholder="" required />
          </AccountUpdateInputWrapper>
          <AccountUpdateInputWrapper>
            <AccountUpdateLabel htmlFor="password">New Password *</AccountUpdateLabel>
            <AccountUpdateInput type="password" id="password" name="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="" required />
          </AccountUpdateInputWrapper>
          <AccountUpdateInputWrapper>
            <AccountUpdateLabel htmlFor="confirmPassword">Confirm New Password *</AccountUpdateLabel>
            <AccountUpdateInput
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmNewPassword}
              onChange={e => setConfirmNewPassword(e.target.value)}
              placeholder=""
              required
            />
            {confirmPasswordError && <AccountInputError>{confirmPasswordError}</AccountInputError>}
          </AccountUpdateInputWrapper>
          <AccountUpdateInputWrapper>
            <AccountUpdateLabel htmlFor="email">New Email *</AccountUpdateLabel>
            <AccountUpdateInput type="email" id="email" name="email" value={newEmail} onChange={e => setNewEmail(e.target.value)} placeholder="" required />
          </AccountUpdateInputWrapper>

          <AccountUpdateSubmitButton type="submit">Submit</AccountUpdateSubmitButton>
        </AccountUpdateForm>
      </AccountUpdateInnerContainer>
    </AccountUpdateContainer>
  );
};

export default UpdateAccount;
