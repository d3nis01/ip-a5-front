import { styled } from 'styled-components';

export const MenuItemContainer = styled.div<{ $active: boolean }>`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  text-transform: capitalize;
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: ${props => (props.$active === true ? props.theme.fontWeights.bold : props.theme.fontWeights.regular)};
  color: ${props => (props.$active === true ? props.theme.colors.black : props.theme.colors.white)};
  background-color: ${props => (props.$active === true ? props.theme.colors.backgroundGray : props.theme.colors.primaryPurple)};
  border-top-left-radius: ${props => (props.$active ? '999px' : '0px')};
  border-bottom-left-radius: ${props => (props.$active ? '999px' : '0px')};
`;
