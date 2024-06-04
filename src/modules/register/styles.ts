import Icon from 'react-icons-kit';
import { styled } from 'styled-components';

export const RegisterImage = styled.img`
  width: 400px;
  object-fit: cover;
  border-radius: 20px;
  height: 100%;
  object-position: 55% 50%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.backgroundGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  height: 700px;
`;

export const RegisterInnerContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  transform: translateX(-50px);
  width: 600px;
  height: 100%;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
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

export const RegisterTitle = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (max-width: 550px) {
    font-size: 32px;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 500px;
  width: 100%;
  padding-left: 12px;
`;
export const RegisterLabel = styled.label`
  font-size: 18px;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const RegisterInput = styled.input`
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.primaryPurple};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

export const RegisterSubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.colors.primaryPurple};
  color: ${props => props.theme.colors.white};
  border: none;
  font-weight: ${props => props.theme.fontWeights.bold};
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  align-self: center;
`;

export const RegisterResponseSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  width: 100%;
`;

export const RegisterResponseItem = styled.div`
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

export const RegisterInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`;

export const RegisterResponseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 12px;
`;

export const RegisterResponseItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const RegisterResponseValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 5px 5px 10px;
  border-radius: 25px;
  border: 2px solid ${props => props.theme.colors.primaryPurple};
  align-items: center;
`;

export const RegisterInputError = styled.div`
  color: ${props => props.theme.colors.red};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: 5px;
  text-align: left;
`;

export const EyeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(3%);
`;

export const EyeIcon = styled(Icon)`
  color: ${props => props.theme.colors.primaryPurple};
  cursor: pointer;
`;

export const LoginPageLink = styled.div`
  color: ${props => props.theme.colors.primaryPurple};
  cursor: pointer;
  font-size: 16px;
  padding: 5px 0 20px 10px;
`;
