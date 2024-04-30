import styled from 'styled-components';

export const AccountDeleteContainer = styled.div`
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

export const AccountDeleteInnerContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 550px) {
    padding: 20px;
  }
  @media (max-width: 380px) {
    padding: 20px 10px;
  }
`;

export const DeleteAccountTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.gig};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;

  @media (max-width: 550px) {
    font-size: 32px;
  }
`;

export const UUIDForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  padding-left: 12px;
`;

export const UUIDLabel = styled.label`
  font-size: 18px;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const UUIDInput = styled.input`
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.primaryPurple};
  border-radius: 5px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.primaryPurple};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  align-self: flex-end;
`;

export const ResponseSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ResponseItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ResponseLabel = styled.div`
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textPrimary};
  font-size: 18px;
`;

export const ResponseValue = styled.div`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 16px;

  @media (max-width: 550px) {
    font-size: 14px;
  }
  @media (max-width: 430px) {
    font-size: 12px;
  }
  @media (max-width: 330px) {
    font-size: 10px;
  }
`;

export const RequestResponseLabel = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;

  @media (max-width: 550px) {
    font-size: 22px;
  }
`;

export const CopyButton = styled.button`
  background-color: ${props => props.theme.colors.primaryPurple};
  color: white;
  border: none;
  border-radius: 15px;
  padding: 6px 15px;
  cursor: pointer;
  font-size: 16px;
`;

export const UuidInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const AccountDeleteResponseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 12px;
  width: 100%;
  max-width: 400px;
`;

export const AccountDeleteResponseItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const AccountDeleteResponseBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${props => props.theme.colors.primaryPurple};
  border-radius: 25px;
  padding: 5px 5px 5px 10px;
`;

export const AccountInputError = styled.div`
  color: ${props => props.theme.colors.red};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: 5px;
  text-align: left;
`;