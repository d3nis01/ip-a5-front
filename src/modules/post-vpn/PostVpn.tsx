import React, { useState } from 'react';
import {
  PostVpnContainer,
  PostVpnTitle,
  Form,
  Label,
  Input,
  SubmitButton,
  ResponseSection,
  ResponseItem,
  ResponseLabel,
  ResponseValue,
  ResponseContent,
  ResponseBox,
  RequestResponseLabel,
  CopyButton,
} from './styles';

import { IResponseItem, createResponseItems } from './constants';

const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard) {
    console.error('Clipboard not available');
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    alert('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};

const PostVpn = (): JSX.Element => {
  const [iPv4Address, setIPv4Address] = useState('');
  const [description, setDescription] = useState('');
  //const [uuid, setUuid] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [responseItems, setResponseItems] = useState<IResponseItem[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newResponseItems = createResponseItems('uuid', '200 Success');
    setResponseItems(newResponseItems);
    setSubmitted(true);
  };

  return (
    <PostVpnContainer>
      <PostVpnTitle><b>Post VPN</b></PostVpnTitle>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="ipv4Address">IPv4Address</Label>
      	<Input 
        type="text" 
        id="iPv4Address" 
        name="iPv4Address" 
        value={iPv4Address} 
        onChange={(e) => setIPv4Address(e.target.value)} 
        placeholder="0.0.0.0"
        required />

	    <Label htmlFor="description">Description *</Label>
        <Input 
        type="text" 
        id="description" 
        name="description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="description: Lorem ipsum dolor sit amet. "
        required/>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
      {submitted && (
        <ResponseSection>
          <RequestResponseLabel>Request response</RequestResponseLabel>
          {responseItems.map((item, index) => (
            <React.Fragment key={index}>
              <ResponseLabel>{item.title}</ResponseLabel>
              <ResponseItem key={index}>
                <ResponseBox>
                  <ResponseContent>
                    <ResponseValue>{item.value}</ResponseValue>
                    <CopyButton onClick={() => copyToClipboard(item.value)}>Copy</CopyButton>
                  </ResponseContent>
                </ResponseBox>
              </ResponseItem>
            </React.Fragment>
          ))}
        </ResponseSection>
      )}
    </PostVpnContainer>
  );
};

export default PostVpn;