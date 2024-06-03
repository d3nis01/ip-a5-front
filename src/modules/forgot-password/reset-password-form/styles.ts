import { styled } from 'styled-components';
import Icon from 'react-icons-kit';

export const RPContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.backgroundGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RPWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  height: 500px;
`;

export const RPImage = styled.img`
  width: 400px;
  object-fit: cover;
  border-radius: 20px;
  height: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const RPInnerContainer = styled.div`
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

export const RPTitle = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.xxl};
  }
`;

export const RPForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 500px;
  width: 100%;
  padding-left: 12px;
`;

export const RPInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`;

export const RPLabel = styled.label`
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.md};
  }
`;

export const RPInputField = styled.div`
  position: relative;
`;

export const RPInput = styled.input`
  padding: 10px;
  border: 2px solid #cacaca;
  border-radius: 5px;
  width: 100%;
  font-size: ${props => props.theme.fontSize.md};

  &:focus {
    outline: none;
  }

  @media (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.sm};
  }
`;

export const EyeButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  right: 10px;
  transform: translateY(3%);
`;

export const EyeIcon = styled(Icon)`
  color: ${props => props.theme.colors.primaryPurple};
  cursor: pointer;
`;

export const RPSubmitButton = styled.button`
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

export const RPInputError = styled.div`
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: left;

  @media (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.xs};
  }
`;
