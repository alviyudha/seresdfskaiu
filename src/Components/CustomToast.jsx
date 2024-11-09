/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// CustomToast.jsx
import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function CustomToast({ show, setShow,DetailDealer }) {
  const handleToastClose = () => {
    setShow(false);
  };

  return (
    <Row>
      <Col xs={12} className="d-flex justify-content-center align-items-center">
        <Toast
          onClose={handleToastClose}
          show={show}
          delay={4000}
          autohide
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
          }}
        >
          {/* Isi konten Toast sesuai kebutuhan Anda */}
          <Toast.Header>
          <FontAwesomeIcon className='me-1 text-color-orange' icon={faCircleInfo} size="xl" />
            <strong className="me-auto">Information</strong>
            <small>seresdfsk-aiu.co.id</small>
          </Toast.Header>
          <Toast.Body>{DetailDealer}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
