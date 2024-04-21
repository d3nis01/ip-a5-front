import styled from 'styled-components';

export const SambaContainer = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  padding: 0 30px;
  max-width: 1000px; 

  @media (max-width: 768px) {
    padding: 0 15px; 
  }
`;

export const SambaTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: left;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) { 
    font-size: 24px; 
  }
`;

export const SambaForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  width: 100%;
`;

export const SambaLabel = styled.label`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: left;
`;

export const UUIDInput = styled.input`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primaryPurple};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  width: 400px; 
  
  @media (max-width: 768px) {
    max-width: 100%; 
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.primaryPurple};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.lg};
  transition: background-color 0.3s ease;
  align-self: flex-end;
  justify-self: end; 
  margin-top: 10px;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr); 
  grid-gap: 10px; 
  width: 100%; 
  max-width: 500px; 
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    width: 100%; 
    padding: 0.625rem; 
  }
`;

export const CopyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryPurple};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 15px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
  margin-left: 0; 

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 0.7rem;
  }
`;

export const SambaResponseSection = styled.section`
  margin-top: 20px;

  @media (max-width: 768px) { 
    margin-top: 10px;
  }
`;

export const SambaResponseItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap; 

  @media (max-width: 768px) {
    justify-content: center; 
  }
`;

export const SambaResponseLabel = styled.span`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  display: block;
  margin-bottom: 5px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const SambaResponseValue = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  padding-left: 10px; 
  flex-grow: 1;
  font-size: 14px;
`;

export const SambaResponseContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SambaResponseBox = styled.div`
  border: 2px solid #303972;
  border-radius: 30px;
  padding: 5px 10px; 
  box-sizing: border-box;
  flex-grow: 0; 
  flex-shrink: 0; 
  flex-basis: 370px;
  margin-right: 10px;

  @media (max-width: 768px) {  
    flex-basis: 100%; 
    margin-right: 0;  
    padding: 10px; 
  }
`;

export const SambaRequestResponseLabel = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  display: block;
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    font-size: 24px; 
    text-align: center; 
  }
`;
