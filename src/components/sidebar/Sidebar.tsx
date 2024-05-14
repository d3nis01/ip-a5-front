import MenuItem from './menuItem/MenuItem';
import { SidebarBurgerButton, SidebarContainer, SidebarExtendedContainer, SidebarHeaderContainer, SidebarInnerContainer, SidebarMenuContainer } from './styles';

import { IMenuOption, MENU_OPTIONS } from './constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/store-hooks';
import { appWidthSelector } from '../../store/selectors/app-selectors';

const Sidebar = (): JSX.Element => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavOptions = (route: string) => {
    if (route !== location.pathname) {
      setExtendNavbar(false);
      navigate(route);
    }
  };

  const width = useAppSelector(appWidthSelector);

  if (width <= 992) {
    return <></>;
  }

  return (
    <SidebarContainer $isExtended={extendNavbar}>
      <SidebarInnerContainer>
        <SidebarHeaderContainer />
        <SidebarMenuContainer>
          {MENU_OPTIONS.map((option: IMenuOption) => (
            <MenuItem key={option.title} active={location.pathname === option.route} title={option.title} extended={false} onClick={() => handleNavOptions(option.route)} />
          ))}
        </SidebarMenuContainer>
      </SidebarInnerContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
