import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

const Modal = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          padding: '0',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          boxSizing: 'border-box',
          marginRight: '-50%',
          minWidth: '315px',
          transform: 'translate(-50%, -50%)',
          background: 'var(--white)',
          borderRadius: '8px',
          border: 'solid 2px var(--purple-bg)',
        },
        overlay: {
          backgroundColor: '#140526e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
