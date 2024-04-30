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

import { createAccount } from '../../services/accountService';
import { ICreateAccount, ICreateAccountResponse } from '../../types/IServiceTypesRequests';
import { isMatricol } from '../../utils/forms/inputValidators';

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
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [matricol, setMatricol] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [postResponse, setResponse] = useState<ICreateAccountResponse>();
  const [matricolError, setMatricolError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isMatricol(matricol) === false) {
      setMatricolError('Matricol is not valid');
      console.error('Matricol is not valid');
      return;
    }
    setMatricolError('');

    const requestObject: ICreateAccount = {
      username,
      password,
      email,
      matricol,
    };

    const response = await createAccount(requestObject);
    setResponse(response);
    setIsFormSubmitted(true);
  };

  return (
    <AccountPostContainer>
      <AccountPostInnerContainer>
        <PostAccountTitle>Post Account</PostAccountTitle>
        <AccountPostForm onSubmit={handleSubmit}>
          <AccountPostInputWrapper>
            <AccountPostLabel htmlFor="username">Username</AccountPostLabel>
            <AccountPostInput type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="" required />
          </AccountPostInputWrapper>
          <AccountPostInputWrapper>
            <AccountPostLabel htmlFor="password">Password</AccountPostLabel>
            <AccountPostInput type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="" required />
          </AccountPostInputWrapper>
          <AccountPostInputWrapper>
            <AccountPostLabel htmlFor="email">Email</AccountPostLabel>
            <AccountPostInput type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="" required />
          </AccountPostInputWrapper>
          <AccountPostInputWrapper>
            <AccountPostLabel htmlFor="matricol">Matricol</AccountPostLabel>
            <AccountPostInput type="text" id="matricol" name="matricol" value={matricol} onChange={e => setMatricol(e.target.value)} placeholder="" required />
            {matricolError && <AccountInputError>Matricol is not valid!</AccountInputError>}
          </AccountPostInputWrapper>

          <AccountPostSubmitButton type="submit">Submit</AccountPostSubmitButton>
        </AccountPostForm>
        {isFormSubmitted && (
          <AccountPostResponseSection>
            <RequestResponseLabel>Request response</RequestResponseLabel>
            <AccountPostResponseWrapper>
              <AccountPostResponseItemWrapper>
                <ResponseLabel>UUID</ResponseLabel>
                <AccountPostResponseValueContainer>
                  <ResponseValue>{postResponse?.uuid}</ResponseValue>
                  <CopyButton onClick={() => copyToClipboard(postResponse?.uuid || '')}>Copy</CopyButton>
                </AccountPostResponseValueContainer>
              </AccountPostResponseItemWrapper>

              <AccountPostResponseItemWrapper>
                <ResponseLabel>Status code</ResponseLabel>
                <AccountPostResponseValueContainer>
                  <ResponseValue>{String(postResponse?.status) + ' ' + postResponse?.statusText}</ResponseValue>
                  <CopyButton onClick={() => copyToClipboard(String(postResponse?.status) || '')}>Copy</CopyButton>
                </AccountPostResponseValueContainer>
              </AccountPostResponseItemWrapper>
            </AccountPostResponseWrapper>
          </AccountPostResponseSection>
        )}
      </AccountPostInnerContainer>
    </AccountPostContainer>
  );
};

export default PostAccount;
