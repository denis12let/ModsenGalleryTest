import { FC } from 'react';
import {
  ModalProps,
  Overlay,
  ModalContainer,
  CloseButton,
  Content,
} from './Modal.style';
import { Icons } from '@assets/icons';
import { GlobalStyle } from '@styles/global';

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
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
