/* eslint-disable no-unused-vars */
import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { dealerData } from '../assets/js/modelData';

export default function TabDealerComp() {

  
  return (
    <>
    <Tab.Container  defaultActiveKey="all-tab">
      <nav id="nav-tab-dealer">
        <Nav variant="tabs" className="tabs-type-cars justify-content-center sticky-top z-3">
          <Nav.Item>
            <Nav.Link eventKey="all-tab" className='mb-1'>All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="jakarta-tab" className='mb-1'>DKI Jakarta</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="jawaTimur-tab" className='mb-1'>Jawa Timur</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="ntt-tab" className='mb-1'>NTT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="sulawesi-tab" className='mb-1'>Sulawesi</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="gorontalo-tab" className='mb-1'>Gorontalo</Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>
      <div id="nav-dealer-content">
        <Tab.Content>
          <Tab.Pane eventKey="all-tab" className='p-5'>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                          {Object.keys(dealerData).map((province) => (
                Object.keys(dealerData[province]).map((city) => (
                  dealerData[province][city].map((dealer, index) => (
                    <div className="col" key={index}>
                      <div className="card h-100">
                        <img src={dealer.imgSrc} className="card-img-top" alt="test" />
                        <div className="card-body">
                          <h5 className="card-title">{dealer.title}</h5>
                          <p className="card-text">{dealer.address}</p>
                        </div>
                        <div className="card-footer" id='card-dealer-footer'>
                          <a href={`https://wa.me/${dealer.whatsApp}`} target='_blank' rel="noreferrer"><span><FontAwesomeIcon icon={faWhatsapp} size="xl" /></span></a>
                          <a href={dealer.instagram}><span><FontAwesomeIcon icon={faInstagram} size="xl" /></span></a>
                          <a href={dealer.maps}><FontAwesomeIcon icon={faLocationArrow} size="xl" /></a>
                        </div>
                      </div>
                    </div>
                  ))
                ))
              ))}
            
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="jakarta-tab" className='p-5'>
          <div className="row row-cols-1 row-cols-md-3 g-4">
          {Object.keys(dealerData["Jakarta"]).map((city) => (
            dealerData["Jakarta"][city].map((dealer, index) => (
            <div className="col" key={index}>
            <div className="card h-100">
            <img src={dealer.imgSrc} className="card-img-top" alt="test" />
            <div className="card-body">
            <h5 className="card-title">{dealer.title}</h5>
            <p className="card-text">{dealer.address}</p>
            </div>
            <div className="card-footer" id='card-dealer-footer'>
            <a href={`https://wa.me/${dealer.whatsApp}`}><span><FontAwesomeIcon icon={faWhatsapp} size="xl" /></span></a>
            <a href={dealer.instagram}><span><FontAwesomeIcon icon={faInstagram} size="xl" /></span></a>
            <a href={dealer.maps}><FontAwesomeIcon icon={faLocationArrow} size="xl" /></a>
            </div>
            </div>
            </div>
            ))
            ))}

          </div>
          </Tab.Pane>
          <Tab.Pane eventKey="jawaTimur-tab" className='p-5'>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {Object.keys(dealerData["jawa-timur"]).map((city) => (
            dealerData["jawa-timur"][city].map((dealer, index) => (
            <div className="col" key={index}>
            <div className="card h-100">
            <img src={dealer.imgSrc} className="card-img-top" alt="test" />
            <div className="card-body">
            <h5 className="card-title">{dealer.title}</h5>
            <p className="card-text">{dealer.address}</p>
            </div>
            <div className="card-footer" id='card-dealer-footer'>
            <a href={`https://wa.me/${dealer.whatsApp}`}><span><FontAwesomeIcon icon={faWhatsapp} size="xl" /></span></a>
            <a href={dealer.instagram}><span><FontAwesomeIcon icon={faInstagram} size="xl" /></span></a>
            <a href={dealer.maps}><FontAwesomeIcon icon={faLocationArrow} size="xl" /></a>
            </div>
            </div>
            </div>
            ))
            ))}
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="ntt-tab" className='p-5'>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                      {Object.keys(dealerData["ntt"]).map((city) => (
            dealerData["ntt"][city].map((dealer, index) => (
              <div className="col" key={index}>
                <div className="card h-100">
                  <img src={dealer.imgSrc} className="card-img-top" alt="test" />
                  <div className="card-body">
                    <h5 className="card-title">{dealer.title}</h5>
                    <p className="card-text">{dealer.address}</p>
                  </div>
                  <div className="card-footer" id='card-dealer-footer'>
                    <a href={`https://wa.me/${dealer.whatsApp}`}><span><FontAwesomeIcon icon={faWhatsapp} size="xl" /></span></a>
                    <a href={dealer.instagram}><span><FontAwesomeIcon icon={faInstagram} size="xl" /></span></a>
                    <a href={dealer.maps}><FontAwesomeIcon icon={faLocationArrow} size="xl" /></a>
                  </div>
                </div>
              </div>
            ))
          ))}
          </div>
          </Tab.Pane>
          <Tab.Pane eventKey="sulawesi-tab" className='p-5'>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                      {Object.keys(dealerData["sulawesi"]).map((city) => (
            dealerData["sulawesi"][city].map((dealer, index) => (
              <div className="col" key={index}>
                <div className="card h-100">
                  <img src={dealer.imgSrc} className="card-img-top" alt="test" />
                  <div className="card-body">
                    <h5 className="card-title">{dealer.title}</h5>
                    <p className="card-text">{dealer.address}</p>
                  </div>
                  <div className="card-footer" id='card-dealer-footer'>
                    <a href={`https://wa.me/${dealer.whatsApp}`}><span><FontAwesomeIcon icon={faWhatsapp} size="xl" /></span></a>
                    <a href={dealer.instagram}><span><FontAwesomeIcon icon={faInstagram} size="xl" /></span></a>
                    <a href={dealer.maps}><FontAwesomeIcon icon={faLocationArrow} size="xl" /></a>
                  </div>
                </div>
              </div>
            ))
          ))}
          </div>
          </Tab.Pane>
          <Tab.Pane eventKey="gorontalo-tab" className='p-5'>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                      {Object.keys(dealerData["gorontalo"]).map((city) => (
            dealerData["gorontalo"][city].map((dealer, index) => (
              <div className="col" key={index}>
                <div className="card h-100">
                  <img src={dealer.imgSrc} className="card-img-top" alt="test" />
                  <div className="card-body">
                    <h5 className="card-title">{dealer.title}</h5>
                    <p className="card-text">{dealer.address}</p>
                  </div>
                  <div className="card-footer" id='card-dealer-footer'>
                    <a href={`https://wa.me/${dealer.whatsApp}`}><span><FontAwesomeIcon icon={faWhatsapp} size="xl" /></span></a>
                    <a href={dealer.instagram}><span><FontAwesomeIcon icon={faInstagram} size="xl" /></span></a>
                    <a href={dealer.maps}><FontAwesomeIcon icon={faLocationArrow} size="xl" /></a>
                  </div>
                </div>
              </div>
            ))
          ))}
          </div>
          </Tab.Pane>
        </Tab.Content>
      </div>
    </Tab.Container>
  

        </>
  );
}
