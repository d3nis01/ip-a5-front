import { useState } from 'react';
import { SidebarContainer, SidebarHeaderContainer, SidebarMenuContainer, StyledProfile, StyledCourses, StyledExams, StyledTaxes, StyledSettings } from './styles';

import MenuItem from './menuItem/MenuItem';

import { SIDEBAR__COURSES, SIDEBAR__EXAMS, SIDEBAR__PROFILE, SIDEBAR__SETTINGS, SIDEBAR__TAXES, SIDEBAR__TITLE } from './constats';

const Sidebar = (): JSX.Element => {
  const [isActive, setIsActive] = useState('profile');

  return (
    <SidebarContainer>
      <SidebarHeaderContainer>{SIDEBAR__TITLE}</SidebarHeaderContainer>
      <SidebarMenuContainer>
        <MenuItem active={isActive === SIDEBAR__PROFILE} Icon={StyledProfile} title={SIDEBAR__PROFILE} onClick={() => setIsActive(SIDEBAR__PROFILE)} />
        <MenuItem active={isActive === SIDEBAR__COURSES} Icon={StyledCourses} title={SIDEBAR__COURSES} onClick={() => setIsActive(SIDEBAR__COURSES)} />
        <MenuItem active={isActive === SIDEBAR__EXAMS} Icon={StyledExams} title={SIDEBAR__EXAMS} onClick={() => setIsActive(SIDEBAR__EXAMS)} />
        <MenuItem active={isActive === SIDEBAR__TAXES} Icon={StyledTaxes} title={SIDEBAR__TAXES} onClick={() => setIsActive(SIDEBAR__TAXES)} />
        <MenuItem active={isActive === SIDEBAR__SETTINGS} Icon={StyledSettings} title={SIDEBAR__SETTINGS} onClick={() => setIsActive(SIDEBAR__SETTINGS)} />
      </SidebarMenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
