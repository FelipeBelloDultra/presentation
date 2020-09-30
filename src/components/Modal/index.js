import React from 'react';

import { useModal } from '../../hooks/modal';

import { Container, ModalContent } from './styles';

const Modal = ({ children }) => {
  const { openModal, handleCloseModal } = useModal();

  return (
    <Container className={openModal && 'open'}>
      <ModalContent>
        <button type="button" onClick={handleCloseModal} />
        {children}
      </ModalContent>
    </Container>
  );
};

export default Modal;
