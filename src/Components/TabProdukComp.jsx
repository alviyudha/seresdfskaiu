/* eslint-disable no-unused-vars */
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SlickCarouselComp from './SlickCarouselComp';
import { slideDataCarsDFSK, slideDataCarsSeres } from '../assets/js/modelData';

export default function TabProdukComp() {
  return (
    <div id="tabProduct" >
    <Tabs
    defaultActiveKey="Seres"
    id="fill-tab-example"
    className="mb-3 mt-5"
    fill
  >
    {/* <Tab eventKey="Ford Ranger Raptor" title="Ford Ranger Raptor" >
    <SlickCarouselComp
      getDatatypeProf={slideDataCarsRaptor}
      />
    </Tab> */}
    <Tab eventKey="Seres" title="Seres">
      <SlickCarouselComp
      getDatatypeProf= {slideDataCarsSeres} />
    </Tab>
    <Tab eventKey="DFSK" title="DFSK">
      <SlickCarouselComp
      getDatatypeProf={slideDataCarsDFSK}
      />
    </Tab>
  </Tabs>
  </div>
  )
}
