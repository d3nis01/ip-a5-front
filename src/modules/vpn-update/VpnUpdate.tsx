import React, { useState } from 'react';
import {
  VpnTitle,
  VpnForm,
  VpnLabel,
  UUIDInput,
  SubmitButton,
  InputWrapper,
  CopyButton,
  VpnResponseSection,
  VpnResponseLabel,
  VpnResponseValue,
  VpnRequestResponseLabel,
  VpnInnerContainer,
  VpnResponsesWrapper,
  ResponseValueWrapper,
  VpnResponseBox,
  VpnInputError,
  VpnContainer,
} from './styles';

import { IVpnUpdateResponse } from '../../types/IServiceTypesRequests';
import { isIPv4, isUUID } from '../../utils/inputValidators';
import { VpnPostTextarea } from '../vpn-post/styles';
import { updateVpnAccount } from '../../services/vpn-service';

const UpdateVpn = (): JSX.Element => {
  const [formData, setFormData] = useState({
    uuid: '',
    newIpAddress: '',
    newDescription: '',
  });
  const [vpnData, setVpnData] = useState<IVpnUpdateResponse | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    uuidError: '',
    ipError: '',
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch(err => {
        console.error('Error copying to clipboard: ', err);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { uuid, newIpAddress, newDescription } = formData;
    const newErrors = {
      uuidError: !isUUID(uuid) ? 'Invalid UUID!' : '',
      ipError: !isIPv4(newIpAddress) ? 'Invalid IP address!' : '',
    };

    if (newErrors.uuidError || newErrors.ipError) {
      setErrors(newErrors);
      return;
    }

    setErrors(newErrors);

    const updateData = {
      newIpAddress,
      newDescription,
    };

    const response = await updateVpnAccount(uuid, updateData);
    setVpnData(response);
    setIsFormSubmitted(true);
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
      type: 'textarea',
      value: formData.newDescription,
      placeholder: 'Brief description here',
      component: VpnPostTextarea,
    },
  ];

  return (
    <VpnContainer>
      <VpnInnerContainer>
        <VpnTitle>
          <b>Update Vpn</b>
        </VpnTitle>
        <VpnForm onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <InputWrapper key={index}>
              <VpnLabel htmlFor={field.name}>{field.label} *</VpnLabel>
              {field.component === UUIDInput ? (
                <UUIDInput id={field.name} name={field.name} type={field.type} value={field.value} onChange={handleInputChange} placeholder={field.placeholder} required />
              ) : (
                <VpnPostTextarea id={field.name} name={field.name} value={field.value} onChange={handleInputChange} placeholder={field.placeholder} required />
              )}
              {field.error && <VpnInputError>{field.error}</VpnInputError>}
            </InputWrapper>
          ))}
          <SubmitButton type="submit">Submit</SubmitButton>
        </VpnForm>

        {isFormSubmitted && vpnData && (
          <VpnResponseSection>
            <VpnRequestResponseLabel>Request Response</VpnRequestResponseLabel>
            <VpnResponsesWrapper>
              <VpnResponseBox>
                <VpnResponseLabel>Status</VpnResponseLabel>
                <ResponseValueWrapper>
                  <VpnResponseValue>{vpnData.status + ' ' + vpnData.statusText}</VpnResponseValue>
                  <CopyButton onClick={() => copyToClipboard(String(vpnData.status))}>Copy</CopyButton>
                </ResponseValueWrapper>
              </VpnResponseBox>
            </VpnResponsesWrapper>
          </VpnResponseSection>
        )}
      </VpnInnerContainer>
    </VpnContainer>
  );
};

export default UpdateVpn;
