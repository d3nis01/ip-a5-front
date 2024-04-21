import { useState } from 'react';
import MenuItem from './menuItem/MenuItem';
import { SidebarContainer, SidebarHeaderContainer, SidebarMenuContainer } from './styles';

const MENU_OPTIONS = ['profile', 'courses', 'exams', 'taxes', 'settings'];

const Sidebar = (): JSX.Element => {
  const [isActive, setIsActive] = useState('profile');

  return (
    <SidebarContainer>
      <SidebarHeaderContainer>IP Brand</SidebarHeaderContainer>
      <SidebarMenuContainer>
        {MENU_OPTIONS.map((option: string) => {
          const title = option.charAt(0).toUpperCase() + option.slice(1);
          return <MenuItem active={isActive === option} title={title} onClick={() => setIsActive(option)} />;
        })}
      </SidebarMenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
