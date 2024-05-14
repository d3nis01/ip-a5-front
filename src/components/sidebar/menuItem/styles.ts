import { styled } from 'styled-components';

export const MenuItemContainer = styled.div<{ $active: boolean; $extended: boolean }>`
  width: 100%;
  padding-top: ${props => (props.$extended ? '20px' : '6px')};
  padding-bottom: ${props => (props.$extended ? '20px' : '6px')};
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.$extended ? 'center' : 'flex-start')};
  align-items: center;
  cursor: pointer;
  text-transform: capitalize;
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: ${props => (props.$active ? props.theme.fontWeights.bold : props.theme.fontWeights.regular)};
  color: ${props => (props.$active ? props.theme.colors.black : props.theme.colors.white)};
  background-color: ${props => (props.$active ? props.theme.colors.backgroundGray : props.theme.colors.primaryPurple)};
  border-top-left-radius: ${props => (props.$active && !props.$extended ? '999px' : '0px')};
  border-bottom-left-radius: ${props => (props.$active && !props.$extended ? '999px' : '0px')};
`;
