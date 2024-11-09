/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import CustomToast from './CustomToast'; // Import komponen CustomToast
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

export default function CardDealer({
  nameDealer,
  addressDealer,
  whatsappLink,
  mapsLink,
  DetailDealer2,
  imgDealer,
  }) {

  const [showToast, setShowToast] = useState(false); 
  const handleShowToast = () => {
    setShowToast(true);
  };

  return (
    <>
      <Card id='cardCustom'>
      <Card.Img variant="top" src={imgDealer} />
        <Card.Body>
          <Card.Title><h5>{nameDealer}</h5></Card.Title>
          <Card.Text><p className='text-color-gray'> {addressDealer}</p></Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={whatsappLink} target='_blank' className='me-3'>
            <FontAwesomeIcon icon={faWhatsapp} size="xl" />
          </Link>
        <Link className='iconInfo' >
          <FontAwesomeIcon onClick={handleShowToast} className=' me-3' icon={faCircleInfo} size="xl" />
        </Link>
        <Link to={mapsLink} target='_blank'>
            <FontAwesomeIcon icon={faLocationArrow} size="xl" />
          </Link>
        </Card.Footer>
      </Card>
      
      {showToast && (
        <CustomToast 
         show={showToast} setShow={setShowToast}
         DetailDealer={DetailDealer2 ? DetailDealer2 : "Default Text"}
         />
      )}
    </>
  );
}
