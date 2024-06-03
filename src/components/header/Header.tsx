import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/store-hooks';
import { appWidthSelector } from '../../store/selectors/app-selectors';
import ModalMobile from '../modal-mobile';
import { HeaderContainer, UserInfo } from './styles';
import { currentUserDetailsSelector } from '../../store/selectors/auth-selectors';
import { logout } from '../../services/auth-service';

export const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const width = useAppSelector(appWidthSelector);
  const userDetails = useAppSelector(currentUserDetailsSelector);
  console.log(userDetails);
  const handleLogout = () => {
    logout();
  };

  return (
    <HeaderContainer>
      {width <= 992 && <ModalMobile />}
      {userDetails?.isAuthenticated && (
        <UserInfo>
          <span>Welcome, {userDetails.userName}</span>
          <button onClick={handleLogout}>Logout</button>
        </UserInfo>
      )}
    </HeaderContainer>
  );
};

export default Header;
