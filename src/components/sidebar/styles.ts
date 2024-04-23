/// <reference types="vite-plugin-svgr/client" />
import { styled } from 'styled-components';

import Profile from '../../assets/sidebar/profile.svg?react';
import Courses from '../../assets/sidebar/courses.svg?react';
import Exams from '../../assets/sidebar/exams.svg?react';
import Taxes from '../../assets/sidebar/taxes.svg?react';
import Settings from '../../assets/sidebar/settings.svg?react';

export const SidebarContainer = styled.div`
  position: sticky;
  top: 0;
  width: 20%;
  height: 100vh;

  background-color: ${props => props.theme.colors.primaryPurple};
  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;

  @media (max-width: 992px) {
    display: none;
    visibility: hidden;
  }
`;

export const SidebarHeaderContainer = styled.div`
  width: 100%;

  font-size: ${props => props.theme.fontSize.gig};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.backgroundGray};

  padding-top: 30px;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 992px) {
    display: none;
    visibility: hidden;
  }
`;

export const SidebarMenuContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;

  @media (max-width: 992px) {
    display: none;
    visibility: hidden;
  }
`;

export const StyledProfile = styled(Profile)<{ $active: boolean }>`
  width: 30px;
  path {
    fill: ${props => (props.$active ? props.theme.colors.primaryPurple : props.theme.colors.backgroundGray)};
  }
`;

export const StyledCourses = styled(Courses)<{ $active: boolean }>`
  width: 30px;
  path {
    fill: ${props => (props.$active ? props.theme.colors.primaryPurple : props.theme.colors.backgroundGray)};
  }
`;

export const StyledExams = styled(Exams)<{ $active: boolean }>`
  width: 30px;
  path {
    fill: ${props => (props.$active ? props.theme.colors.primaryPurple : props.theme.colors.backgroundGray)};
  }
`;

export const StyledTaxes = styled(Taxes)<{ $active: boolean }>`
  width: 30px;
  path {
    fill: ${props => (props.$active ? props.theme.colors.primaryPurple : props.theme.colors.backgroundGray)};
  }
`;

export const StyledSettings = styled(Settings)<{ $active: boolean }>`
  width: 30px;
  path {
    fill: ${props => (props.$active ? props.theme.colors.primaryPurple : props.theme.colors.backgroundGray)};
  }
`;
