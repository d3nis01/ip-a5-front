import { styled } from 'styled-components';

export const SidebarContainer = styled.div`
  position: sticky;
  top: 0;
  padding-left: 30px;
  height: 100vh;
  width: 250px;
  background-color: ${props => props.theme.colors.primaryPurple};
  color: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const SidebarHeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  /* margin-left: 100px; */

  font-size: ${props => props.theme.fontSize.xxl};
  font-weight: ${props => props.theme.fontWeights.bold};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const SidebarMenuContainer = styled.div`
  width: 100%;
  /* margin-left: 100px; */
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
