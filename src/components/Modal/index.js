import React from 'react';

import { useModal } from '../../hooks/modal';

import { Container, ModalContent } from './styles';

const Modal = ({ children, modalStyles }) => {
  const { openModal, handleCloseModal } = useModal();

  return (
    <Container className={openModal && 'open'}>
      <ModalContent style={modalStyles}>
        <button type="button" onClick={handleCloseModal} className="button" />
        {children}
      </ModalContent>
    </Container>
  );
};

export default Modal;
