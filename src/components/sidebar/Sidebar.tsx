import { useState } from 'react';
import MenuItem from './menuItem/MenuItem';
import { SidebarContainer, SidebarHeaderContainer, SidebarMenuContainer } from './styles';

import { IMenuOption, MENU_OPTIONS } from './constants';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = (): JSX.Element => {
  const [isActive, setIsActive] = useState('profile');
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavOptions = (route: string) => {
    if (route !== location.pathname) {
      navigate(route);
    }
  };

  return (
    <SidebarContainer>
      <SidebarHeaderContainer>IP Brand</SidebarHeaderContainer>
      <SidebarMenuContainer>
        {MENU_OPTIONS.map((option: IMenuOption) => (
          <MenuItem active={location.pathname === option.route} title={option.title} onClick={() => handleNavOptions(option.route)} />
        ))}
      </SidebarMenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
