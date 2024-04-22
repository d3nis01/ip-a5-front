import { useState } from 'react';
import MenuItem from './menuItem/MenuItem';
import { SidebarContainer, SidebarHeaderContainer, SidebarMenuContainer } from './styles';

import { MENU_OPTIONS } from './constats';

const Sidebar = (): JSX.Element => {
  const [isActive, setIsActive] = useState('profile');

  return (
    <SidebarContainer>
      <SidebarHeaderContainer>IP Brand</SidebarHeaderContainer>
      <SidebarMenuContainer>
        {MENU_OPTIONS.map((option: string) => {
          return <MenuItem key={option} active={isActive === option} title={option} onClick={() => setIsActive(option)} />;
        })}
      </SidebarMenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
