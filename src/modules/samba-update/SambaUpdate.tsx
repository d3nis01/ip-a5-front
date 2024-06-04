import React, { useState } from 'react';
import { SambaContainer, SambaTitle, SambaForm, SambaLabel, UUIDInput, SubmitButton, InputWrapper, SambaInnerContainer, SambaInputError } from './styles';

import { updateSambaAccount } from '../../services/samba-service';
import { isDescriptionTrimmedMinLength, isIPv4, isUUID } from '../../utils/inputValidators';
import { VpnPostTextarea } from '../vpn-post/styles';

const UpdateSamba = (): JSX.Element => {
  const [formData, setFormData] = useState({
    uuid: '',
    newIpAddress: '',
    newDescription: '',
  });
  const [errors, setErrors] = useState({
    uuidError: '',
    ipError: '',
    descriptionError: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { uuid, newIpAddress, newDescription } = formData;
    const newErrors = {
      uuidError: !isUUID(uuid) ? 'Invalid UUID!' : '',
      ipError: !isIPv4(newIpAddress) ? 'Invalid IP address' : '',
      descriptionError: !isDescriptionTrimmedMinLength(newDescription, 10) ? 'Invalid description' : '',
    };

    if (newErrors.uuidError || newErrors.ipError || newErrors.descriptionError) {
      setErrors(newErrors);
      return;
    }

    setErrors(newErrors);

    const updateData = {
      newIpAddress,
      newDescription,
    };

    await updateSambaAccount(uuid, updateData);
  };

  const inputFields = [
    {
      label: 'UUID',
      name: 'uuid',
      type: 'text',
      value: formData.uuid,
      placeholder: '00000000-0000-0000-0000-000000000000',
      error: errors.uuidError,
      component: UUIDInput,
    },
    {
      label: 'New IP Address',
      name: 'newIpAddress',
      type: 'text',
      value: formData.newIpAddress,
      placeholder: '192.168.1.1',
      error: errors.ipError,
      component: UUIDInput,
    },
    {
      label: 'New Description',
      name: 'newDescription',
      type: 'text',
      value: formData.newDescription,
      placeholder: 'Brief description here',
      error: errors.descriptionError,
      component: VpnPostTextarea,
    },
  ];

  return (
    <SambaContainer>
      <SambaInnerContainer>
        <SambaTitle>
          <b>Update Samba</b>
        </SambaTitle>
        <SambaForm onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <InputWrapper key={index}>
              <SambaLabel htmlFor={field.name}>{field.label} *</SambaLabel>
              <field.component id={field.name} name={field.name} type={field.type} value={field.value} onChange={handleInputChange} placeholder={field.placeholder} required />
              {field.error && <SambaInputError>{field.error}</SambaInputError>}
            </InputWrapper>
          ))}
          <SubmitButton type="submit">Submit</SubmitButton>
        </SambaForm>
      </SambaInnerContainer>
    </SambaContainer>
  );
};

export default UpdateSamba;
