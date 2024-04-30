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

import { getSambaAccount } from '../../services/sambaService';
import { ISambaGetResponse } from '../../types/IServiceTypesRequests';
import { isUUID } from '../../utils/forms/inputValidators';

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

    if (isUUID(uuid) === false) {
      setUuidError('Invalid UUID!');
      console.error('Invalid UUID');
      return;
    }
    setUuidError('');

    const response = await getSambaAccount(uuid);
    setSambaData(response);
    setIsFormSubmitted(true);
  };

  return (
    <SambaContainer>
      <SambaInnerContainer>
        <SambaTitle>
          <b>Get Samba</b>
        </SambaTitle>
        <SambaForm onSubmit={handleSubmit}>
          <InputWrapper>
            <SambaLabel htmlFor="uuid">UUID</SambaLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
            {uuidError && <SambaInputError>Invalid UUID!</SambaInputError>}
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </SambaForm>

        {isFormSubmitted && sambaData && (
          <SambaResponseSection>
            <SambaRequestResponseLabel>Request Response</SambaRequestResponseLabel>
            <SambaResponsesWrapper>
              <SambaResponseBox>
                <SambaResponseLabel>UUID</SambaResponseLabel>
                <ResponseValueWrapper>
                  <SambaResponseValue>{sambaData.data.id}</SambaResponseValue>
                  <CopyButton onClick={() => copyToClipboard(sambaData.data.id)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </SambaResponseBox>
              <SambaResponseBox>
                <SambaResponseLabel>IPv4 Address</SambaResponseLabel>
                <ResponseValueWrapper>
                  <SambaResponseValue>{sambaData.data.iPv4Address}</SambaResponseValue>
                  <CopyButton onClick={() => copyToClipboard(sambaData.data.iPv4Address)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </SambaResponseBox>
              <SambaResponseBox>
                <SambaResponseLabel>Description</SambaResponseLabel>
                <ResponseValueWrapper>
                  <SambaResponseValue>{sambaData.data.description}</SambaResponseValue>
                  <CopyButton onClick={() => copyToClipboard(sambaData.data.description)}>Copy</CopyButton>
                </ResponseValueWrapper>
              </SambaResponseBox>
              <SambaResponseBox>
                <SambaResponseLabel>Status</SambaResponseLabel>
                <ResponseValueWrapper>
                  <SambaResponseValue>{sambaData.status + ' ' + sambaData.statusText}</SambaResponseValue>
                  <CopyButton onClick={() => copyToClipboard(String(sambaData.status) || '')}>Copy</CopyButton>
                </ResponseValueWrapper>
              </SambaResponseBox>
            </SambaResponsesWrapper>
          </SambaResponseSection>
        )}
      </SambaInnerContainer>
    </SambaContainer>
  );
};

export default GetSamba;
