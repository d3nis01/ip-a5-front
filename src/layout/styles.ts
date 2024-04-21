import { styled } from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const LayoutCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: calc(100vw - 250px);

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const LayoutContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;
