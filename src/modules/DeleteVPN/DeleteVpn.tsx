import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Arial ', sans-serif;
  background-color: white;
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.4rem;
  color: #21265e;
  text-align: left;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #21265e; 
  text-align: left;
  font-weight: bold; 
`;

const Input = styled.input`
  padding: 10px;
  border: 1.5px solid #b3b8f5;
  border-radius: 5px;
  font-size: 1rem;
  width: 380px; 
`;

const Button = styled.button`
  padding: 10px 20px; 
  background-color: #131b78; 
  color: white;
  border: none;
  border-radius: 25px; 
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  align-self: flex-end;
  margin-top: 10px; 
`;

const ResponseSection = styled.section`
  margin-top: 20px;
`;

const ResponseItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem; 
`;

const ResponseLabel = styled.span`
  font-weight: bold;
  display: block; 
  margin-bottom: 0.5rem; 
  margin-left: 10px;
  color: #21265e;
`;

const ResponseValue = styled.span`
  color: #264653; 
  padding-left: 10px; 
  flex-grow: 1;
  font-size: 14px;
`;

const ResponseContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ResponseBox = styled.div`
  border: 1.5px solid #b3b8f5;
  border-radius: 30px;
  padding: 5px 10px; 
  box-sizing: border-box;
  flex-grow: 0; 
  flex-shrink: 0; 
  flex-basis: 370px;
  margin-right: 10px; 
`;

const RequestResponseLabel = styled.h2`
  font-size: 1.2rem;
  color: #21265e;
  text-align: left;
  margin-top: 10px; 
  margin-bottom: 15px; 
`;

const CopyButton = styled.button`
  background-color: #131b78;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 6px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.8rem;
  margin-left: 0; 
`;

const DeleteVpn: React.FC = () => {
  const [uuid, setUuid] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container>
      <Title><b>Delete VPN</b></Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="uuid">UUID</Label>
        <Input
          id="uuid"
          type="text"
          value={uuid}
          onChange={(e) => setUuid(e.target.value)}
          placeholder="00000000-0000-0000-0000-000000000000"
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
      {submitted && (
        
  <ResponseSection>
    <RequestResponseLabel>Request response</RequestResponseLabel>
    <ResponseLabel>UUID</ResponseLabel>
    <ResponseItem>
      <ResponseBox>
        <ResponseContent>
          <ResponseValue>{uuid || 'None provided'}</ResponseValue>
          <CopyButton>Copy</CopyButton>
        </ResponseContent>
      </ResponseBox>
    </ResponseItem>
    <ResponseLabel>Status code</ResponseLabel>
    <ResponseItem>
      <ResponseBox>
        <ResponseContent>
          <ResponseValue>200 Success</ResponseValue>
          <CopyButton>Copy</CopyButton>
        </ResponseContent>
      </ResponseBox>
    </ResponseItem>
  </ResponseSection>
)}

    </Container>
  );
};

export default DeleteVpn;
