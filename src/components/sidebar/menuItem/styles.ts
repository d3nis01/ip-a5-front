import { styled } from 'styled-components';

export const MenuItemContainer = styled.div<{ $active: boolean }>`
  width: 100%;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 24px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  cursor: pointer;

  text-transform: capitalize;
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: ${props => props.theme.fontWeights.regular};

  color: ${props => (props.$active ? props.theme.colors.primaryPurple : props.theme.colors.backgroundGray)};
  background-color: ${props => (props.$active ? props.theme.colors.backgroundGray : props.theme.colors.primaryPurple)};
  border-top-left-radius: ${props => (props.$active ? '999px' : '0px')};
  border-bottom-left-radius: ${props => (props.$active ? '999px' : '0px')};
`;
