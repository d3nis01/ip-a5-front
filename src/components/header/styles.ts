import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 60px;
  width: 100%;
  background-color: ${props => props.theme.colors.primaryGray};
  color: ${props => props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
`;
