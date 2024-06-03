import { Variants, motion } from 'framer-motion';
import styled from 'styled-components';

export const ModalHeaderContainer = styled.div`
  height: 24px;
  width: 32px;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  top: 18px;
  z-index: 100500000;
  justify-content: space-between;
`;

const FirstLineVariants: Variants = {
  modalNotOpen: {
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
    rotate: '0deg',
  },
  modalOpen: {
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
    rotate: '45deg',
    translateY: '11px',
  },
};

export const FirstModalLine = styled(motion.div).attrs(() => ({
  variants: FirstLineVariants,
}))`
  width: 32px;
  border-radius: 3px;
  height: 3px;
  background-color: ${props => props.theme.colors.white};
`;

const SecondLineVariants: Variants = {
  modalNotOpen: {
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
    rotate: '0deg',
    opacity: 1,
  },
  modalOpen: {
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
    opacity: 0,
    rotate: '-45deg',
  },
};

export const SecondModalLine = styled(motion.div).attrs(() => ({
  variants: SecondLineVariants,
}))`
  width: 32px;
  border-radius: 3px;
  height: 3px;
  background-color: ${props => props.theme.colors.white};
`;

const ThirdLineVariants: Variants = {
  modalNotOpen: {
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
    rotate: '0deg',
  },
  modalOpen: {
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
    rotate: '-45deg',
    translateY: '-10px',
  },
};

export const ThirdModalLine = styled(motion.div).attrs(() => ({
  variants: ThirdLineVariants,
}))`
  width: 32px;
  border-radius: 3px;
  height: 3px;
  background-color: ${props => props.theme.colors.white};
`;

const OpenModalContainerVariants: Variants = {
  modalNotOpen: {
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
    translateY: '-100%',
  },
  modalOpen: {
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
    opacity: 1,
    translateY: '0',
  },
  exit: {
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
    height: 0,
  },
};

export const OpenModalContainer = styled(motion.section).attrs(() => ({
  variants: OpenModalContainerVariants,
}))`
  background-color: ${props => props.theme.colors.primaryPurple};
  position: fixed;
  top: 0;
  left: 0;
  height: calc(100vh + 1px);
  width: 100vw;
  z-index: 1000000;
  border-bottom: 1px solid ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OpenModalGifContainer = styled.img`
  opacity: 0.15;

  height: 100%;
  width: 100%;
  position: absolute;
`;

export const NavOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const ModalOptionsWrapperVariants: Variants = {
  initial: {
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
    opacity: 0,
  },
  animate: {
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
      opacity: {
        delay: 0.8,
      },
    },
    opacity: 1,
  },
  exit: {
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
    opacity: 0,
  },
};

export const ModalOptionsWrapper = styled(motion.div).attrs({
  variants: ModalOptionsWrapperVariants,
  animate: 'animate',
  initial: 'initial',
  exit: 'exit',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MMOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 12px;
  padding: 12px;
  width: 100%;
  max-width: 400px;
`;

export const MMOptionWrapper = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 4px;
  height: 32px;
  width: 100%;

  ${props => props.isSelected && `background-color: ${props.theme.colors.white}; color: ${props.theme.colors.textPrimary};`};
`;
