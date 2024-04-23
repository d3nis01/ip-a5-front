import styled from 'styled-components';

export const VPNContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundGray};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  @media (max-width: 550px) {
    padding: 20px;
  }
  @media (max-width: 380px) {
    padding: 15px;
  }
`;

export const VPNInnerContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 40px 40px;

  @media (max-width: 550px) {
    padding: 20px;
  }
  @media (max-width: 380px) {
    padding: 20px 10px;
  }
`;

export const VPNTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.gig};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: left;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const VPNForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 12px;
  max-width: 600px;
  gap: 24px;
`;

export const VPNLabel = styled.label`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: left;
`;

export const UUIDInput = styled.input`
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.primaryPurple};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  width: 100%;
`;

export const SubmitButton = styled.button`
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.primaryPurple};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${props => props.theme.fontWeights.bold};
  transition: background-color 0.3s ease;
  align-self: flex-end;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6px;
`;

export const CopyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryPurple};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 15px;
  padding: 6px 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
  margin-left: 0;
`;

export const VPNResponseSection = styled.section`
  padding: 20px 0 0 0;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const VPNResponseItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const VPNResponseLabel = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const VPNResponseValue = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
`;

export const VPNResponseContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const VPNResponseBox = styled.div`
  border: 2px solid #303972;
  border-radius: 30px;
  padding: 5px 10px;
`;

export const VPNRequestResponseLabel = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const VPNResponsesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-left: 12px;
`;

export const ResponseValueWrapper = styled.div`
  border: 2px solid ${props => props.theme.colors.primaryPurple};
  border-radius: 30px;
  padding: 5px 5px 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
