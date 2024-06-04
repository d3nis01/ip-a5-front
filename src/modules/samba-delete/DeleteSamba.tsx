import React, { useState } from 'react';
import { DeleteSambaTitle, UUIDForm, UUIDLabel, UUIDInput, SubmitButton, SambaDeleteContainer, SambaDeleteInnerContainer, UuidInputWrapper, SambaInputError } from './styles';

import { deleteSambaAccount } from '../../services/samba-service';
import { isUUID } from '../../utils/inputValidators';

const DeleteSamba = (): JSX.Element => {
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

    await deleteSambaAccount(uuid);
    setIsFormSubmitted(true);
  };

  return (
    <SambaDeleteContainer>
      <SambaDeleteInnerContainer>
        <DeleteSambaTitle>Delete Samba</DeleteSambaTitle>
        <UUIDForm onSubmit={handleSubmit}>
          <UuidInputWrapper>
            <UUIDLabel htmlFor="uuid">UUID *</UUIDLabel>
            <UUIDInput id="uuid" type="text" value={uuid} onChange={e => setUuid(e.target.value)} placeholder="00000000-0000-0000-0000-000000000000" required />
            {uuidError && <SambaInputError>Invalid UUID!</SambaInputError>}
          </UuidInputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </UUIDForm>
      </SambaDeleteInnerContainer>
    </SambaDeleteContainer>
  );
};

export default DeleteSamba;
