import React, { useState } from 'react';
import { DeleteVpnTitle, UUIDForm, UUIDLabel, UUIDInput, SubmitButton, VpnDeleteContainer, VpnDeleteInnerContainer, UuidInputWrapper, VpnInputError } from './styles';

import { deleteVpnAccount } from '../../services/vpn-service';
import { isUUID } from '../../utils/inputValidators';

const DeleteVpn = (): JSX.Element => {
  const [uuid, setUuid] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [uuidError, setUuidError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isUUID(uuid) === false) {
      setUuidError('Invalid UUID!');
      console.error('Invalid UUID');
      return;
    }
    setUuidError('');

    await deleteVpnAccount(uuid);
    setIsFormSubmitted(true);
  };

  return (
    <VpnDeleteContainer>
      <VpnDeleteInnerContainer>
        <DeleteVpnTitle>Delete VPN</DeleteVpnTitle>
        <UUIDForm onSubmit={handleSubmit}>
          <UuidInputWrapper>
            <UUIDLabel htmlFor="uuid">UUID *</UUIDLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
            {uuidError && <VpnInputError>Invalid UUID!</VpnInputError>}
          </UuidInputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </UUIDForm>
      </VpnDeleteInnerContainer>
    </VpnDeleteContainer>
  );
};

export default DeleteVpn;
