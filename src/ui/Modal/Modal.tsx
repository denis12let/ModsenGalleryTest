import { FC } from 'react';

import { Icons } from '@assets';
import { GlobalStyle } from '@styles';

import {
  ModalProps,
  Overlay,
  ModalContainer,
  CloseButton,
  Content,
} from './Modal.style';

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <GlobalStyle isModalOpen={isOpen} />
      <Overlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>
            <Icons.Close />
          </CloseButton>
          <Content>{children}</Content>
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default Modal;
