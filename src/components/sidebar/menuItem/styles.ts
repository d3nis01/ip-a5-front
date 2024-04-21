import { styled } from 'styled-components';

export const MenuItemContainer = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  color: ${(props: any) => (props.active === true ? props.theme.colors.primaryPurple : props.theme.colors.white)};
  background-color: ${(props: any) => (props.active === true ? props.theme.colors.backgroundGray : props.theme.colors.primaryPurple)};
  border-top-left-radius: ${(props: any) => (props.active ? '999px' : '0px')};
  border-bottom-left-radius: ${(props: any) => (props.active ? '999px' : '0px')};
`;
