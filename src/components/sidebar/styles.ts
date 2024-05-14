import { styled } from 'styled-components';
import fiiLogo from './assets/fii-logo.png';

export const SidebarContainer = styled.div<{ $isExtended: boolean }>`
  position: sticky;
  top: 0;
  width: 250px;
  background-color: ${props => props.theme.colors.primaryPurple};
  color: ${props => props.theme.colors.white};

  @media (min-width: 992px) {
    max-height: 100vh;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 992px) {
    position: ${props => (props.$isExtended ? 'fixed' : 'sticky')};
    width: ${props => (props.$isExtended ? '100vw' : '80px')};
    min-height: 100vh;
    z-index: 10;
  }
`;

export const SidebarInnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const SidebarHeaderContainer = styled.img.attrs({
  src: fiiLogo,
})`
  width: 100%;

  font-size: ${props => props.theme.fontSize.xxl};
  font-weight: ${props => props.theme.fontWeights.bold};

  padding: 30px 0px 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 992px) {
    display: none;
    visibility: hidden;
  }
`;

export const SidebarBurgerButton = styled.button<{ $isExtended: boolean }>`
  position: absolute;
  top: 0px;
  right: 0px;

  width: ${props => (props.$isExtended ? '80px' : '100%')};
  height: 80px;

  background: none;
  border: none;

  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.gig};
  -webkit-tap-highlight-color: transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  cursor: pointer;

  z-index: 10;

  @media (min-width: 992px) {
    display: none;
    visibility: hidden;
  }
`;

export const SidebarMenuContainer = styled.div`
  width: 100%;
  padding: 30px 0px 20px 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 992px) {
    display: none;
    visibility: hidden;
  }
`;

export const SidebarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 70px;
  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 20px 0;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 992px) {
    display: none;
    visibility: hidden;
  }
`;
