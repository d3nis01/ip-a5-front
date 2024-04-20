import styled from 'styled-components';
export const DeleteVpnContainer = styled.div`
  font-family: 'Arial ', sans-serif; //sau.. ${props => props.theme.fonts.poppins}
  background-color: ${props => props.theme.colors.white};
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) { 
    max-width: 80%;
    padding: 25px;
    margin: 40px auto;
  }

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 20px;
    margin: 30px auto;
  }
`;

export const DeleteVpnTitle = styled.h1`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const UUIDForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UUIDLabel = styled.label`
  font-size: 1rem;
  color: ${props => props.theme.colors.textPrimary}; 
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold}; 
`;

export const UUIDInput = styled.input`
  padding: 10px;
  border: 1.5px solid #b3b8f5;
  border-radius: 5px;
  font-size: 1rem;
  width: 380px; 

  @media (max-width: 1024px) {
    padding: 9px;
    width: 47vw;
  }

  @media (max-width: 890px) {
    padding: 8px;
    width: 40vw;
  }

  @media (max-width: 515px) {
    padding: 8px;
    width: 25vw;
  }

`;

export const SubmitButton = styled.button`
  padding: 10px 20px; 
  background-color: ${props => props.theme.colors.primaryPurple}; 
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 25px; 
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  align-self: flex-end;
  margin-top: 10px; 

  @media (max-width: 1024px) {
    padding: 9px 18px;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

export const ResponseSection = styled.section`
  margin-top: 20px;
`;

export const ResponseItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem; 
`;

export const ResponseLabel = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
  display: block; 
  margin-bottom: 0.5rem; 
  margin-left: 10px;
  color: ${props => props.theme.colors.textPrimary};
`;

export const ResponseValue = styled.span`
  color: #264653; 
  padding-left: 10px; 
  flex-grow: 1;
  font-size: 14px;
`;

export const ResponseContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ResponseBox = styled.div`
  border: 1.5px solid #b3b8f5;
  border-radius: 30px;
  padding: 5px 10px; 
  box-sizing: border-box;
  flex-grow: 0; 
  flex-shrink: 0; 
  flex-basis: 370px;
  margin-right: 10px; 

  @media (max-width: 1024px) {  
    flex-basis: 90%; 
    margin-right: 5px;  
  }

  @media (max-width: 768px) {  
    flex-basis: 100%; 
    margin-right: 0;  
    padding: 10px; 
  }
`;

export const RequestResponseLabel = styled.h2`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  margin-top: 10px; 
  margin-bottom: 15px; 
`;

export const CopyButton = styled.button`
  background-color: ${props => props.theme.colors.primaryPurple};
  color: white;
  border: none;
  border-radius: 15px;
  padding: 6px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.8rem;
  margin-left: 0; 

  @media (max-width: 1024px) {
    padding: 5px 9px;
    font-size: 0.75rem;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 0.7rem;
  }
`;