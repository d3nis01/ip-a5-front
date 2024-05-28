import Icon from 'react-icons-kit';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const LoginImage = styled.img`
  width: 400px;
  object-fit: cover;
  border-radius: 10px;
  height: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.backgroundGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  height: 550px;
`;

export const LoginInnerContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  transform: translateX(-50px);
  width: 500px;
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

export const LoginTitle = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (max-width: 550px) {
    font-size: 32px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 500px;
  width: 100%;
  padding-left: 12px;
`;
export const LoginLabel = styled.label`
  font-size: 18px;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const LoginInput = styled.input`
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.primaryPurple};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

export const LoginSubmitButton = styled.button`
  padding: 11px 217px 10px 200px;
  background-color: ${props => props.theme.colors.primaryPurple};
  color: ${props => props.theme.colors.white};
  border: none;
  font-weight: ${props => props.theme.fontWeights.bold};
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  align-self: center;
`;

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`;

export const LoginResponseItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const LoginResponseValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 5px 5px 10px;
  border-radius: 25px;
  border: 2px solid ${props => props.theme.colors.primaryPurple};
  align-items: center;
`;

export const LoginInputError = styled.div`
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

export const LoginRememberWrrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 12px;
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
`;
export const ForgotPasswordLink = styled(Link)`
  color: ${props => props.theme.colors.primaryPurple};
  cursor: pointer;
  font-size: 16px;
  align-self: flex-end;
  text-decoration: none;
`;
