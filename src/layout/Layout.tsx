import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import { LayoutCenterContainer, LayoutContainer, LayoutContentWrapper, LayoutLoginContainer } from './styles';
import { ROUTE_LOGIN, ROUTE_REGISTER, ROUTE__SEND_RECOVERY_CODE } from '../router/constants';

const Layout = (): JSX.Element => {
  const location = useLocation();

  if (location.pathname === ROUTE_LOGIN || location.pathname === ROUTE_REGISTER || location.pathname === ROUTE__SEND_RECOVERY_CODE) {
    return (
      <LayoutLoginContainer>
        <Outlet />
      </LayoutLoginContainer>
    );
  }

  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutCenterContainer>
        <Header />
        <LayoutContentWrapper>
          <Outlet />
        </LayoutContentWrapper>
      </LayoutCenterContainer>
    </LayoutContainer>
  );
};

export default Layout;
