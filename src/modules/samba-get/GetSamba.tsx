import React, { useState } from 'react';
import {
  SambaContainer,
  SambaTitle,
  SambaForm,
  SambaLabel,
  UUIDInput,
  SubmitButton,
  InputWrapper,
  CopyButton,
  SambaResponseSection,
  SambaResponseLabel,
  SambaResponseValue,
  SambaRequestResponseLabel,
  SambaInnerContainer,
  SambaResponsesWrapper,
  ResponseValueWrapper,
  SambaResponseBox,
  SambaInputError,
} from './styles';

import { getSambaAccount } from '../../services/samba-service';
import { ISambaGetResponse } from '../../types/IServiceTypesRequests';
import { isUUID } from '../../utils/inputValidators';

const GetSamba = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [sambaData, setSambaData] = useState<ISambaGetResponse>();
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [uuidError, setUuidError] = useState<string>('');

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

    if (!isUUID(uuid)) {
      setUuidError('Invalid UUID!');
      console.error('Invalid UUID');
      return;
    }
    setUuidError('');

    const response = await getSambaAccount(uuid);
    setSambaData(response);
    setIsFormSubmitted(true);
  };

  const inputFields = [
    {
      label: 'UUID',
      name: 'uuid',
      type: 'text',
      value: uuid,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setUuid(e.target.value),
      error: uuidError,
      placeholder: '00000000-0000-0000-0000-000000000000',
    },
  ];

  const responseFields = [
    { label: 'UUID', value: sambaData?.data.id },
    { label: 'IPv4 Address', value: sambaData?.data.iPv4Address },
    { label: 'Description', value: sambaData?.data.description },
    { label: 'Status', value: `${sambaData?.status} ${sambaData?.statusText}` },
  ];

  return (
    <SambaContainer>
      <SambaInnerContainer>
        <SambaTitle>
          <b>Get Samba</b>
        </SambaTitle>
        <SambaForm onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <InputWrapper key={index}>
              <SambaLabel htmlFor={field.name}>{field.label} *</SambaLabel>
              <UUIDInput id={field.name} type={field.type} value={field.value} onChange={field.onChange} placeholder={field.placeholder} required />
              {field.error && <SambaInputError>{field.error}</SambaInputError>}
            </InputWrapper>
          ))}
          <SubmitButton type="submit">Submit</SubmitButton>
        </SambaForm>

        {isFormSubmitted && sambaData && (
          <SambaResponseSection>
            <SambaRequestResponseLabel>Request Response</SambaRequestResponseLabel>
            <SambaResponsesWrapper>
              {responseFields.map(
                (field, index) =>
                  field.value && (
                    <SambaResponseBox key={index}>
                      <SambaResponseLabel>{field.label}</SambaResponseLabel>
                      <ResponseValueWrapper>
                        <SambaResponseValue>{field.value}</SambaResponseValue>
                        <CopyButton onClick={() => copyToClipboard(field.value ?? '')}>Copy</CopyButton>
                      </ResponseValueWrapper>
                    </SambaResponseBox>
                  ),
              )}
            </SambaResponsesWrapper>
          </SambaResponseSection>
        )}
      </SambaInnerContainer>
    </SambaContainer>
  );
};

export default GetSamba;
