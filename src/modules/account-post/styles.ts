import { styled } from 'styled-components';

export const AccountPostContainer = styled.div`
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

export const AccountPostInnerContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 550px) {
    padding: 20px;
  }
  @media (max-width: 380px) {
    padding: 20px 10px;
  }
`;

export const PostAccountTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.gig};
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (max-width: 550px) {
    font-size: 32px;
  }
`;

export const AccountPostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 500px;
  width: 100%;
  padding-left: 12px;
`;
export const AccountPostLabel = styled.label`
  font-size: 18px;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const AccountPostInput = styled.input`
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.primaryPurple};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

export const AccountPostSubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.primaryPurple};
  color: ${props => props.theme.colors.white};
  border: none;
  font-weight: ${props => props.theme.fontWeights.bold};
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  align-self: flex-end;
`;

export const AccountPostResponseSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  width: 100%;
`;

export const AccountPostResponseItem = styled.div`
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
`;

export const RequestResponseLabel = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.colors.textPrimary};
  font-weight: ${props => props.theme.fontWeights.bold};
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
  font-weight: ${props => props.theme.fontWeights.bold};
  padding: 6px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
`;

export const AccountPostInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const AccountPostTextarea = styled.textarea`
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.primaryPurple};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  resize: none;
  min-height: 100px;
`;

export const AccountPostResponseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 12px;
`;

export const AccountPostResponseItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const AccountPostResponseValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 5px 5px 10px;
  border-radius: 25px;
  border: 2px solid ${props => props.theme.colors.primaryPurple};
  align-items: center;
`;

export const AccountInputError = styled.div`
  color: ${props => props.theme.colors.red};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: 5px;
  text-align: left;
`;
