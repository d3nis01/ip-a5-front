import React, { useState } from 'react';
import {
  SambaContainer,
  SambaTitle,
  SambaForm,
  SambaLabel,
  UUIDInput,
  SubmitButton,
  InputWrapper,
  SambaInnerContainer,
  SambaInputError,
} from './styles';

import { updateSambaAccount } from '../../services/samba-service';
import { isDescriptionTrimmedMinLength, isIPv4, isUUID } from '../../utils/inputValidators';
import { VpnPostTextarea } from '../vpn-post/styles';

const UpdateSamba = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [newIpAddress, setNewIpAddress] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');
  const [uuidError, setUuidError] = useState<string>('');
  const [ipError, setIpError] = useState<string>('');
  const [descriptionError, setDescriptionError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUuidError(!isUUID(uuid) ? 'Invalid UUID!' : '');
    setIpError(!isIPv4(newIpAddress) ? 'Invalid IP address' : '');
    setDescriptionError(!isDescriptionTrimmedMinLength(newDescription, 10) ? 
      'Invalid description' : '');

    if (uuidError || ipError || descriptionError) {
      return;
    }

    const updateData = {
      newIpAddress,
      newDescription,
    };

    await updateSambaAccount(uuid, updateData);
  };

  return (
    <SambaContainer>
      <SambaInnerContainer>
        <SambaTitle>
          <b>Update Samba</b>
        </SambaTitle>
        <SambaForm onSubmit={handleSubmit}>
          <InputWrapper>
            <SambaLabel htmlFor="uuid">UUID *</SambaLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
            {uuidError && <SambaInputError>Invalid UUID!</SambaInputError>}
          </InputWrapper>
          <InputWrapper>
            <SambaLabel htmlFor="newIpAddress">New IP Address *</SambaLabel>
            <UUIDInput id="newIpAddress" type="text" value={newIpAddress} onChange={e => setNewIpAddress(e.target.value)} placeholder="192.168.1.1" />
            {ipError && <SambaInputError>Invalid IP adress!</SambaInputError>}
          </InputWrapper>
          <InputWrapper>
            <SambaLabel htmlFor="newDescription">New Description *</SambaLabel>
            <VpnPostTextarea id="newDescription" value={newDescription} onChange={e => setNewDescription(e.target.value)} placeholder="Brief description here" required />
            {descriptionError && <SambaInputError>Description length should be at least 10 characters!</SambaInputError>}
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </SambaForm>
      </SambaInnerContainer>
    </SambaContainer>
  );
};

export default UpdateSamba;
