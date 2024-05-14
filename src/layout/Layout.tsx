import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Sidebar from '../components/sidebar/Sidebar';
import { LayoutCenterContainer, LayoutContainer, LayoutContentWrapper } from './styles';

const Layout = (): JSX.Element => {
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
