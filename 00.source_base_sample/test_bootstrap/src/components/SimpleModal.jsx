import React from 'react';

import {
  Modal, Button,
} from 'react-bootstrap';

import AppConfig from '../configs/app-config';

const SimpleModal = ({
  message,
  title = AppConfig.brandName,
  okName = 'OK', cancelName = 'Cancel',
  show = false,
  onOk, onCancel, onHide,
  size,
  centered, dialogClassName, keyboard = false,
}) => {
  console.log(message);
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={keyboard}
      size={size}
      centered={centered}
      dialogClassName={dialogClassName}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          {cancelName}
        </Button>
        <Button variant="primary" onClick={onOk}>
          {okName}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SimpleModal;
