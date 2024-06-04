import React, { useState } from 'react';
import {
  PostVpnTitle,
  VpnPostForm,
  VpnPostLabel,
  VpnPostInput,
  VpnPostSubmitButton,
  VPNPostContainer,
  VPNPostInnerContainer,
  VpnPostInputWrapper,
  VpnPostTextarea,
  VpnInputError,
} from './styles';

import { createVpnAccount } from '../../services/vpn-service';
import { ICreateVpn} from '../../types/IServiceTypesRequests';
import { isDescriptionTrimmedMinLength, isIPv4 } from '../../utils/inputValidators';

const PostVpn = (): JSX.Element => {
  const [iPv4Address, setIPv4Address] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [addressError, setAddressError] = useState<string>('');
  const [descriptionError, setDescriptionError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody: ICreateVpn = {
      iPv4Address,
      description,
    };

    if (isIPv4(iPv4Address) === false) {
      setAddressError('Invalid Address!');
      return;
    }
    setAddressError('');

    if (isDescriptionTrimmedMinLength(description, 10) === false) {
      setDescriptionError('Invalid description!');
      return;
    }
    setDescriptionError('');

    await createVpnAccount(requestBody);
    setIsFormSubmitted(true);
  };

  return (
    <VPNPostContainer>
      <VPNPostInnerContainer>
        <PostVpnTitle>Post VPN</PostVpnTitle>
        <VpnPostForm onSubmit={handleSubmit}>
          <VpnPostInputWrapper>
            <VpnPostLabel htmlFor="ipv4Address">IPv4 Address *</VpnPostLabel>
            <VpnPostInput type="text" id="iPv4Address" name="iPv4Address" value={iPv4Address} onChange={e => setIPv4Address(e.target.value)} placeholder="0.0.0.0" required />
            {addressError && <VpnInputError>Invalid Adress!</VpnInputError>}
          </VpnPostInputWrapper>
          <VpnPostInputWrapper>
            <VpnPostLabel htmlFor="description">Description *</VpnPostLabel>
            <VpnPostTextarea
              id="description"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description: Lorem ipsum dolor sit amet."
              required
            />
            {descriptionError && <VpnInputError>Description length should be at least 10 characters!</VpnInputError>}
          </VpnPostInputWrapper>
          <VpnPostSubmitButton type="submit">Submit</VpnPostSubmitButton>
        </VpnPostForm>
      </VPNPostInnerContainer>
    </VPNPostContainer>
  );
};

export default PostVpn;
