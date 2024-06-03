import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 60px;
  width: 100%;

  background-color: ${props => props.theme.colors.primaryGray};
  color: ${props => props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;

  span {
    font-size: 16px;
    color: #333;
  }

  button {
    padding: 8px 12px;
    font-size: 14px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 992px) {
    padding-right: 64px;
  }
`;
