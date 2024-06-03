import React, { useRef, useState } from 'react';
import {
  AccountContainer,
  AccountTitle,
  AccountForm,
  AccountLabel,
  UUIDInput,
  SubmitButton,
  InputWrapper,
  AccountResponsesWrapper,
  APContainer,
  APTitle,
  APDetails,
  APSingleInfoContainer,
  APSingleInfoLabel,
  APSingleInfoValue,
  APForm,
  APInnerContainer,
  APUpdateLabel,
  APUpdateInput,
  RadioOption,
  APUpdateRadioInput,
  PopupUnderlay,
  AccountInnerContainer,
  AccountInputError,
  APSubmitButton,
  APUpdateError,
} from './styles';

import { getAccountEmailVariants, updateAccountEmailVariants } from '../../services/account-service';
import { IAccountEmailVariantsGetResponse } from '../../types/IServiceTypesRequests';
import { isMatricol } from '../../utils/inputValidators';
import Swal from 'sweetalert2';

interface ISelectEmailFormProps {
  matricol: string;
  getResponse: IAccountEmailVariantsGetResponse;
}

const SelectEmailForm = (props: ISelectEmailFormProps): JSX.Element => {
  const { matricol, getResponse } = props;
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [alternativeEmail, setAlternativeEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setPasswordError('Passwords do not match!');
      return;
    }
    setPasswordError('');

    const requestBody = {
      mail: selectedOption,
      mailAlternateAddress: alternativeEmail,
      telephoneNumber: phoneNumber,
      userPassword: newPassword,
    };

    const updateResponse = await updateAccountEmailVariants(getResponse.data.uidNumber.toString(), requestBody);

    if (updateResponse.status === 200) {
      Swal.fire({
        title: 'Success!',
        text: 'Account updated successfully!',
        icon: 'success',
        timer: 2000,
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: updateResponse.statusText || 'An error occurred!',
        icon: 'error',
        timer: 2000,
      });
    }
  };

  return (
    <PopupUnderlay>
      <APContainer>
        <APTitle>Update account for {matricol}</APTitle>
        <APDetails>
          <APSingleInfoContainer>
            <APSingleInfoLabel>UUID: </APSingleInfoLabel>
            <APSingleInfoValue>{getResponse.data.uidNumber}</APSingleInfoValue>
          </APSingleInfoContainer>
          <APSingleInfoContainer>
            <APSingleInfoLabel>Prenume: </APSingleInfoLabel>
            <APSingleInfoValue>{getResponse.data.firstName}</APSingleInfoValue>
          </APSingleInfoContainer>
          <APSingleInfoContainer>
            <APSingleInfoLabel>Nume: </APSingleInfoLabel>
            <APSingleInfoValue>{getResponse.data.lastName}</APSingleInfoValue>
          </APSingleInfoContainer>
          <APForm onSubmit={handleSubmit}>
            <APInnerContainer>
              <InputWrapper>
                <APUpdateLabel>Select an email</APUpdateLabel>
                <RadioOption>
                  <APUpdateRadioInput
                    required
                    name="email"
                    type="radio"
                    value={getResponse.data.mailVariant1}
                    checked={selectedOption === getResponse.data.mailVariant1}
                    onChange={handleOptionChange}
                  />
                </RadioOption>
                <RadioOption>
                  <APUpdateRadioInput
                    name="email"
                    type="radio"
                    value={getResponse.data.mailVariant2}
                    checked={selectedOption === getResponse.data.mailVariant2}
                    onChange={handleOptionChange}
                  />
                </RadioOption>
                <RadioOption>
                  <APUpdateRadioInput
                    name="email"
                    type="radio"
                    value={getResponse.data.mailVariant3}
                    checked={selectedOption === getResponse.data.mailVariant3}
                    onChange={handleOptionChange}
                  />
                </RadioOption>
              </InputWrapper>
              <InputWrapper>
                <APUpdateLabel>Alternative email</APUpdateLabel>
                <APUpdateInput type="email" required value={alternativeEmail} onChange={e => setAlternativeEmail(e.target.value)} />
              </InputWrapper>
              <InputWrapper>
                <APUpdateLabel>Phone number</APUpdateLabel>
                <APUpdateInput type="number" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value.toString())} />
              </InputWrapper>
              <InputWrapper>
                <APUpdateLabel>New password</APUpdateLabel>
                <APUpdateInput type="password" required value={newPassword} onChange={e => setNewPassword(e.target.value)} />
              </InputWrapper>
              <InputWrapper>
                <APUpdateLabel>Confirm new password</APUpdateLabel>
                <APUpdateInput type="password" required value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
              </InputWrapper>
              {passwordError && <APUpdateError>{passwordError}</APUpdateError>}
              <APSubmitButton type="submit">Submit</APSubmitButton>
            </APInnerContainer>
          </APForm>
        </APDetails>
      </APContainer>
    </PopupUnderlay>
  );
};

const GetAccountEmailVariants = (): JSX.Element => {
  const [matricol, setMatricol] = useState<string>('');
  const [response, setResponse] = useState<IAccountEmailVariantsGetResponse>();
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [matricolError, setMatricolError] = useState<string>('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch(err => {
        console.error('Eroare la copierea în clipboard: ', err);
      });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isMatricol(matricol) === false) {
      setMatricolError('Invalid matricol number!');
      console.error('Invalid matricol number');
      return;
    }
    setMatricolError('');

    const response = await getAccountEmailVariants(matricol);
    setResponse(response);
    setIsFormSubmitted(true);
  };

  return (
    <AccountContainer>
      <AccountInnerContainer>
        <AccountTitle>
          <b>Get Account Email Variants</b>
        </AccountTitle>
        <AccountForm onSubmit={handleSubmit}>
          <InputWrapper>
            <AccountLabel htmlFor="matricol">Matricol *</AccountLabel>
            <UUIDInput id="matricol" type="text" value={matricol} onChange={e => setMatricol(e.target.value)} placeholder="000000000AAA000000" required />
            {matricolError && <AccountInputError>{matricolError}</AccountInputError>}
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </AccountForm>

        {
          isFormSubmitted && response && <SelectEmailForm matricol={matricol} getResponse={response} />
          // <AccountResponseSection>
          //   <AccountRequestResponseLabel>Request Response</AccountRequestResponseLabel>
          //   <AccountResponsesWrapper>
          //     <AccountResponseBox>
          //       <AccountResponseLabel>GID</AccountResponseLabel>
          //       <ResponseValueWrapper>
          //         <AccountResponseValue>{response.data.uidNumber}</AccountResponseValue>
          //         <CopyButton onClick={() => copyToClipboard(String(response.data.uidNumber))}>Copy</CopyButton>
          //       </ResponseValueWrapper>
          //     </AccountResponseBox>
          //     <AccountResponseBox>
          //       <AccountResponseLabel>First Name</AccountResponseLabel>
          //       <ResponseValueWrapper>
          //         <AccountResponseValue>{response.data.firstName}</AccountResponseValue>
          //         <CopyButton onClick={() => copyToClipboard(response.data.firstName)}>Copy</CopyButton>
          //       </ResponseValueWrapper>
          //     </AccountResponseBox>
          //     <AccountResponseBox>
          //       <AccountResponseLabel>Last Name</AccountResponseLabel>
          //       <ResponseValueWrapper>
          //         <AccountResponseValue>{response.data.lastName}</AccountResponseValue>
          //         <CopyButton onClick={() => copyToClipboard(response.data.lastName)}>Copy</CopyButton>
          //       </ResponseValueWrapper>
          //     </AccountResponseBox>
          //     <AccountResponseBox>
          //       <AccountResponseLabel>Email Variant 1</AccountResponseLabel>
          //       <ResponseValueWrapper>
          //         <AccountResponseValue>{response.data.mailVariant1}</AccountResponseValue>
          //         <CopyButton onClick={() => copyToClipboard(response.data.mailVariant1)}>Copy</CopyButton>
          //       </ResponseValueWrapper>
          //     </AccountResponseBox>
          //     <AccountResponseBox>
          //       <AccountResponseLabel>Email Variant 2</AccountResponseLabel>
          //       <ResponseValueWrapper>
          //         <AccountResponseValue>{response.data.mailVariant2}</AccountResponseValue>
          //         <CopyButton onClick={() => copyToClipboard(response.data.mailVariant2)}>Copy</CopyButton>
          //       </ResponseValueWrapper>
          //     </AccountResponseBox>
          //     <AccountResponseBox>
          //       <AccountResponseLabel>Email Variant 3</AccountResponseLabel>
          //       <ResponseValueWrapper>
          //         <AccountResponseValue>{response.data.mailVariant3}</AccountResponseValue>
          //         <CopyButton onClick={() => copyToClipboard(response.data.mailVariant3)}>Copy</CopyButton>
          //       </ResponseValueWrapper>
          //     </AccountResponseBox>
          //     <AccountResponseBox>
          //       <AccountResponseLabel>Status code</AccountResponseLabel>
          //       <ResponseValueWrapper>
          //         <AccountResponseValue>{String(response.status) + ' ' + String(response.statusText)}</AccountResponseValue>
          //         <CopyButton onClick={() => copyToClipboard(String(response.status))}>Copy</CopyButton>
          //       </ResponseValueWrapper>
          //     </AccountResponseBox>
          //   </AccountResponsesWrapper>
          // </AccountResponseSection>
        }
      </AccountInnerContainer>
    </AccountContainer>
  );
};

export default GetAccountEmailVariants;
