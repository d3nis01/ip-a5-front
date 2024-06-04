import styled from 'styled-components';

export const AccountContainer = styled.div`
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

export const AccountInnerContainer = styled.div`
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

export const AccountTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.gig};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 12px;
  max-width: 500px;
  gap: 24px;
`;

export const AccountLabel = styled.label`
  color: ${props => props.theme.colors.textPrimary};
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: left;
`;

export const UUIDInput = styled.input`
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.primaryPurple};
  border-radius: 5px;
  font-size: ${props => props.theme.fontSize.lg};
  width: 100%;
`;

export const SubmitButton = styled.button`
  padding: 10px 30px;
  background-color: ${props => props.theme.colors.primaryPurple};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: ${props => props.theme.fontWeights.bold};
  transition: background-color 0.3s ease;
  align-self: flex-end;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6px;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const CopyButton = styled.button`
  background-color: ${props => props.theme.colors.primaryPurple};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 15px;
  padding: 6px 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
  margin-left: 0;
`;

export const AccountResponseSection = styled.section`
  padding: 20px 0 0 0;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const AccountResponseLabel = styled.div`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textPrimary};
`;

export const AccountResponseValue = styled.div`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 14px;
`;

export const AccountResponseContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AccountResponseBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const AccountRequestResponseLabel = styled.h2`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 28px;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const AccountResponsesWrapper = styled.div`
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
export const AccountInputError = styled.div`
  color: ${props => props.theme.colors.red};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: 5px;
  text-align: left;
`;

export const APTitle = styled.h1`
  font-size: 24px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  width: 100%;

  @media (max-width: 620px) {
    font-size: 20px;
  }
`;

export const APDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const APSingleInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const APSingleInfoLabel = styled.div`
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textPrimary};
`;

export const APSingleInfoValue = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
`;

export const APForm = styled.form`
  width: 100%;
`;

export const APInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const APUpdateLabel = styled.label`
  font-size: 18px;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const APUpdateInput = styled.input`
  padding: 6px;
  border: 2px solid #cacaca;

  border-radius: 5px;
  font-size: 16px;
  width: 100%;

  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.primaryPurple};
  }
`;

export const APUpdateRadioInput = styled.input`
  padding: 6px 10px;
  border: 2px solid ${props => (props.checked ? props.theme.colors.primaryPurple : '#cacaca')};
  border-radius: 5px;
  font-size: 16px;
  width: 300px;

  cursor: pointer;
  appearance: none;

  &:checked {
    border-color: ${props => props.theme.colors.primaryPurple};
  }

  &::before {
    content: attr(value);
    font-size: 16px;
    color: ${props => (props.checked ? props.theme.colors.primaryPurple : '#000')};
    font-weight: 500;
  }
`;

export const APRadioLabel = styled.label`
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  input[type='radio'] {
  }
`;

export const PopupUnderlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const APSubmitButton = styled.button`
  padding: 10px 30px;
  background-color: ${props => props.theme.colors.primaryPurple};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.bold};
  width: 100%;
`;

export const APUpdateError = styled.div`
  color: ${props => props.theme.colors.red};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: 5px;
  text-align: left;
`;

export const APContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 100%;
  justify-content: center;
  gap: 20px;
  width: 600px;
  padding: 32px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};

  @media (max-width: 620px) {
    width: 96%;
  }
  @media (max-width: 440px) {
    padding: 20px;
  }
`;
