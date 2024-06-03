import { styled } from 'styled-components';

export const FPFContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.backgroundGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FPFWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  height: 500px;
`;

export const FPFImage = styled.img`
  width: 400px;
  object-fit: cover;
  object-position: 55% 50%;
  border-radius: 10px;
  height: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const FPFInnerContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  transform: translateX(-50px);
  width: 600px;
  height: 100%;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  @media (max-width: 1000px) {
    transform: translateX(0);
  }

  @media (max-width: 630px) {
    margin: 10px 0;
    width: 100%;
  }
  @media (max-width: 550px) {
    padding: 20px;
  }
  @media (max-width: 380px) {
    padding: 20px 10px;
  }
`;

export const FPFTitle = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.xxl};
  }
`;

export const FPFEmailSentTitle = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.textPrimary};
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.xxl};
  }
`;

export const FPFForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 500px;
  width: 100%;
  padding-left: 12px;
`;

export const FPFInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`;

export const FPFLabel = styled.label`
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.md};
  }
`;

export const FPFInput = styled.input`
  padding: 10px;
  border: 2px solid #cacaca;
  border-radius: 5px;
  width: 100%;
  font-size: ${props => props.theme.fontSize.md};

  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.primaryPurple};
  }

  @media (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.sm};
  }
`;

export const FPFSubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.colors.primaryPurple};
  color: ${props => props.theme.colors.white};
  border: none;
  font-weight: ${props => props.theme.fontWeights.bold};
  border-radius: 5px;
  cursor: pointer;
  font-size: ${props => props.theme.fontSize.md};
  align-self: center;

  @media (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.sm};
  }
`;

export const FPFInputError = styled.div`
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: left;

  @media (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.xs};
  }
`;
