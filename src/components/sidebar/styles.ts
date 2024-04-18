import { styled } from 'styled-components';

export const SidebarContainer = styled.div`
  position: sticky;
  top: 0;
  /* left: 0; */
  height: 100vh;
  width: 250px;
  background-color: ${props => props.theme.colors.primaryPurple};
  color: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
