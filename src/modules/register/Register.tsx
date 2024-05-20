import React, { useState } from 'react';
import { RegisterTitle,
  RegisterForm,
  RegisterLabel,
  RegisterInput,
  RegisterSubmitButton,
  RegisterResponseSection,
  ResponseLabel,
  ResponseValue,
  RequestResponseLabel,
  CopyButton,
  RegisterContainer,
  RegisterInnerContainer,
  RegisterInputWrapper,
  RegisterResponseWrapper,
  RegisterResponseItemWrapper,
  RegisterResponseValueContainer,
  RegisterInputError,
 
} from '../register/styles';

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

const Register = (): JSX.Element => {
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
    <RegisterContainer>
      <RegisterInnerContainer>
        <RegisterTitle>Register</RegisterTitle>
        <RegisterForm onSubmit={handleSubmit}>
          <RegisterInputWrapper>
            <RegisterLabel htmlFor="username">Username</RegisterLabel>
            <RegisterInput type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Popescu Ana" required />
          </RegisterInputWrapper>
          <RegisterInputWrapper>
            <RegisterLabel htmlFor="email">Email</RegisterLabel>
            <RegisterInput type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@example.com" required />
          </RegisterInputWrapper>
          <RegisterInputWrapper>
            <RegisterLabel htmlFor="password">Password</RegisterLabel>
            <RegisterInput type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="************" required />
          </RegisterInputWrapper>
          <RegisterInputWrapper>
            <RegisterLabel htmlFor="password">Confirm Password</RegisterLabel>
            <RegisterInput type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="************" required />
          </RegisterInputWrapper>
          <RegisterInputWrapper>
            <RegisterLabel htmlFor="matricol">Matricol</RegisterLabel>
            <RegisterInput type="text" id="matricol" name="matricol" value={matricol} onChange={e => setMatricol(e.target.value)} placeholder="" required />
            {matricolError && <RegisterInputError>Matricol is not valid!</RegisterInputError>}
          </RegisterInputWrapper>

          <RegisterSubmitButton type="submit">Submit</RegisterSubmitButton>
        </RegisterForm>
        {isFormSubmitted && (
          <RegisterResponseSection>
            <RequestResponseLabel>Request response</RequestResponseLabel>
            <RegisterResponseWrapper>
              <RegisterResponseItemWrapper>
                <ResponseLabel>UUID</ResponseLabel>
                <RegisterResponseValueContainer>
                  <ResponseValue>{postResponse?.uuid}</ResponseValue>
                  <CopyButton onClick={() => copyToClipboard(postResponse?.uuid || '')}>Copy</CopyButton>
                </RegisterResponseValueContainer>
              </RegisterResponseItemWrapper>

              <RegisterResponseItemWrapper>
                <ResponseLabel>Status code</ResponseLabel>
                <RegisterResponseValueContainer>
                  <ResponseValue>{String(postResponse?.status) + ' ' + postResponse?.statusText}</ResponseValue>
                  <CopyButton onClick={() => copyToClipboard(String(postResponse?.status) || '')}>Copy</CopyButton>
                </RegisterResponseValueContainer>
              </RegisterResponseItemWrapper>
            </RegisterResponseWrapper>
          </RegisterResponseSection>
        )}
      </RegisterInnerContainer>
    </RegisterContainer>
  );
};

export default Register;
