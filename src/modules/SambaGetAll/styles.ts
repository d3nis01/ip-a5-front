import { styled } from 'styled-components';

export const SGAContainer = styled.div`
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

export const SGAInnerContainer = styled.div`
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

export const SGAHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const SGATitle = styled.h1`
  font-size: ${props => props.theme.fontSize.gig};
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (max-width: 550px) {
    font-size: 32px;
  }
`;

export const SGAList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SGAListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: max-content;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.secondaryGray};
`;

export const SGAListItemText = styled.p`
  font-size: ${props => props.theme.fontSize.md};
  color: ${props => props.theme.colors.textPrimary};
`;
