import React from 'react';
import {
  Modal, Button,
} from 'react-bootstrap';
import { InfoCircleFill } from 'react-bootstrap-icons';
/**
 * ComfirmComponent Component
 * @param {*} message : message that display
 * @param {*} show : if modal shows or not
 * @param {*} onOk : onOk event handler
 * @param {*} onCancel : onCancel event handler
 */
function ComfirmComponent({
  message,
  show,
  onOk,
  onCancel,
}) {
  return (
    <Modal
      show={show}
      onHide={onCancel}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="d-flex">
            <InfoCircleFill className="mr-1" size={20} />
            <h6>
              Information
            </h6>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="m-0 p-0">
        <div className="mt-3 p-1">
          <div className="p-3 d-flex justify-content-center">
            {message}
          </div>
          <div className="my-2 p-2 d-flex justify-content-center">
            <Button size="sm" className="pl-3 pr-3" onClick={onOk}>OK</Button>
            <Button size="sm" className="ml-1" style={{ border: '0px', background: 'var(--zodiac-dim-gray)' }} onClick={onCancel}>Cancel</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ComfirmComponent;
