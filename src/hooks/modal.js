import React, { createContext, useCallback, useContext, useState } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <ModalContext.Provider
      value={{ handleCloseModal, openModal: open, handleOpenModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useToast must be used within a ModalProvider');
  }

  return context;
}

export { ModalProvider, useModal };
