import React from 'react';
import { useAuth } from '../../api/auth/AuthProvider';
import { useAppSelector } from '../../hooks/store-hooks';
import { appWidthSelector } from '../../store/selectors/app-selectors';
import ModalMobile from '../modal-mobile';
import { HeaderContainer, UserInfo } from './styles';

export const Header = (): JSX.Element => {
  const width = useAppSelector(appWidthSelector);
  const { user, handleLogout } = useAuth();

  return (
    <HeaderContainer>
      {width <= 992 && <ModalMobile />}
      {user && (
        <UserInfo>
          <span>Welcome, {user.username}</span>
          <button onClick={handleLogout}>Logout</button>
        </UserInfo>
      )}
    </HeaderContainer>
  );
};

export default Header;
