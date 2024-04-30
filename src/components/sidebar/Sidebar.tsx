import MenuItem from './menuItem/MenuItem';
import { SidebarBurgerButton, SidebarContainer, SidebarExtendedContainer, SidebarHeaderContainer, SidebarInnerContainer, SidebarMenuContainer } from './styles';

import { IMenuOption, MENU_OPTIONS } from './constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

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

  const handleBurgerClick = () => {
    setExtendNavbar(prev => !prev);
  };

  return (
    <SidebarContainer $isExtended={extendNavbar}>
      <SidebarInnerContainer>
        <SidebarHeaderContainer />
        <SidebarBurgerButton $isExtended={extendNavbar} onClick={handleBurgerClick}>
          {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
        </SidebarBurgerButton>
        <SidebarMenuContainer>
          {MENU_OPTIONS.map((option: IMenuOption) => (
            <MenuItem key={option.title} active={location.pathname === option.route} title={option.title} extended={false} onClick={() => handleNavOptions(option.route)} />
          ))}
        </SidebarMenuContainer>
      </SidebarInnerContainer>
      {extendNavbar && (
        <SidebarExtendedContainer>
          {MENU_OPTIONS.map((option: IMenuOption) => (
            <MenuItem key={option.title} active={location.pathname === option.route} title={option.title} extended={true} onClick={() => handleNavOptions(option.route)} />
          ))}
        </SidebarExtendedContainer>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
