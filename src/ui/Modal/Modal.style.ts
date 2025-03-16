import { ButtonStyled } from '@ui/Button/Button.style';
import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(3px);
  background: rgba(168, 168, 168, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  max-width: 700px;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  position: fixed;
  animation: ${fadeIn} 0.3s ease-out;
  z-index: 2000;
`;

export const CloseButton = styled(ButtonStyled)`
  position: absolute;
  right: 13px;
  top: 31px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;
