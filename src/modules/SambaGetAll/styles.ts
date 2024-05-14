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
  display: flex;
  flex-direction: column;
  position: relative;

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
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${props => props.theme.colors.primaryGray};
`;

export const SGAHeaderColumnTitle = styled.div`
  width: 100%;
  font-size: ${props => props.theme.fontSize.md};
  color: ${props => props.theme.colors.textPrimary};
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.sm};
  }
`;

export const SGAList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  bottom: 50px;
  top: 80px;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SGAListItem = styled.li`
  width: 100%;
  height: 100%;
  max-height: 100px;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.primaryGray};
`;

const SGAListItemText = styled.p`
  width: 100%;
  text-align: center;
  padding: 0px 10px;
  font-size: ${props => props.theme.fontSize.md};
`;

export const SGAListItemUUID = styled(SGAListItemText)`
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textPrimary};
`;

export const SGAListItemIP = styled(SGAListItemText)`
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primaryPurple};
`;

export const SGAListItemDescription = styled(SGAListItemText)`
  font-weight: ${props => props.theme.fontWeights.light};
  color: ${props => props.theme.colors.secondaryGray};
`;

export const SGAListItemOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 10px;
  text-align: center;
`;

const SGAListItemOptionsButton = styled.button`
  width: 45%;
  height: 30px;

  border-radius: 50px;
  border-color: transparent;

  font-size: ${props => props.theme.fontSize.md};
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.white};

  @media (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.sm};
  }
`;

export const SGAListItemOptionsEdit = styled(SGAListItemOptionsButton)`
  background-color: ${props => props.theme.colors.primaryPurple};
`;

export const SGAListItemOptionsDelete = styled(SGAListItemOptionsButton)`
  background-color: ${props => props.theme.colors.red};
`;
