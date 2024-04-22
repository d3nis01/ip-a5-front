import { styled } from 'styled-components';

export const SidebarContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 20%;
  background-color: ${props => props.theme.colors.primaryPurple};
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarHeaderContainer = styled.div`
  width: 100%;

  font-size: ${props => props.theme.fontSize.xxl};
  font-weight: ${props => props.theme.fontWeights.bold};

  padding: 30px 0px 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 800px) {
    padding-left: 15px;
  }
`;

export const SidebarMenuContainer = styled.div`
  width: 100%;
  padding: 30px 0px 0px 20px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 800px) {
    padding-left: 15px;
  }
`;
