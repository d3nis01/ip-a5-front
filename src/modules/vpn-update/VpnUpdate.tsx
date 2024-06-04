import React, { useState } from 'react';
import {
  VpnTitle,
  VpnForm,
  VpnLabel,
  UUIDInput,
  SubmitButton,
  InputWrapper,
  VpnInnerContainer,
  VpnInputError,
  VpnContainer,
} from './styles';

import { isIPv4, isUUID, isDescriptionTrimmedMinLength } from '../../utils/inputValidators';
import { VpnPostTextarea } from '../vpn-post/styles';
import { updateVpnAccount } from '../../services/vpn-service';

const UpdateVpn = (): JSX.Element => {
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
     
     await updateVpnAccount(uuid, updateData);
  };

  return (
    <VpnContainer>
      <VpnInnerContainer>
        <VpnTitle>
          <b>Update Vpn</b>
        </VpnTitle>
        <VpnForm onSubmit={handleSubmit}>
          <InputWrapper>
            <VpnLabel htmlFor="uuid">UUID *</VpnLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
            {uuidError && <VpnInputError>Invalid UUID!</VpnInputError>}
          </InputWrapper>
          <InputWrapper>
            <VpnLabel htmlFor="newIpAddress">New IP Address *</VpnLabel>
            <UUIDInput id="newIpAddress" type="text" value={newIpAddress} onChange={e => setNewIpAddress(e.target.value)} placeholder="192.168.1.1" />
            {ipError && <VpnInputError>Invalid IP adress!</VpnInputError>}
          </InputWrapper>
          <InputWrapper>
            <VpnLabel htmlFor="newDescription">New Description *</VpnLabel>
            <VpnPostTextarea id="newDescription" value={newDescription} onChange={e => setNewDescription(e.target.value)} placeholder="Brief description here" />
            {descriptionError && <VpnInputError>Description length should be at least 10 characters!</VpnInputError>}
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </VpnForm>
      </VpnInnerContainer>
    </VpnContainer>
  );
};

export default UpdateVpn;
