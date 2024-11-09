/* eslint-disable react/prop-types */

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
export default function GalleryComp({imagesProf}) {
  // const images = [imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5, imgSrc6, imgSrc7, imgSrc8, imgSrc9, imgSrc10];
  const [showModal, setShowModal] = useState(false); // State untuk mengontrol modal
  const [selectedImage, setSelectedImage] = useState(''); // State untuk menyimpan gambar yang dipilih

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="row">
        {imagesProf.map((image, index) => (
          <div key={index} className="col-md-3">
            <img
              src={image}
              alt={`Image ${index}`}
              className=" img-thumbnail m-1"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={closeModal} centered>
        <div className="d-flex align-items-center justify-content-center">
        <img src={selectedImage} alt="Selected Image" className="img-fluid rounded" style={{ maxHeight: '90vh' }} /> 
        </div>
       
      <button className="btn btn-link position-absolute buttom-0 end-0" onClick={closeModal}>
      <FontAwesomeIcon icon={faCircleXmark} size="2xl" style={{color: "#f50000",}} /> 
        </button>
      </Modal>
    </div>
  );
}
