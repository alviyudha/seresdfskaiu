/* eslint-disable no-unused-vars */
import { faGears } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function FeaturedServices() {
  return (
    <section id="featured-services" className="section-custom featured-services mt-5">
    <div className="container">

      <div className="row gy-4 justify-content-center">
        <Link to='/dealer' className="col-xl-4 col-md-6 d-flex text-center" data-aos="zoom-out">
          <div className="service-item position-relative">
          <div  className="icon"><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
            <h4 className="stretched-link">Find a Dealer</h4>
            <p>Kami selalu siap melayani Anda di berbagai tempat. Temukan kami di lokasi terdekat.</p>
          </div>
        </Link>
        {/* <!-- End Service Item --> */}

        <Link to='/booking/services' className="col-xl-4 col-md-6 d-flex text-center" data-aos="zoom-out" data-aos-delay="200">
          <div className="service-item position-relative">
            <div className="icon"><FontAwesomeIcon icon={faCalendarCheck} /></div>
            <h4 className="stretched-link">BOOK A SERVICE</h4>
            <p>Anda dapat booking service kendaraan melalui form yang kami sediakan.</p>
          </div>
        </Link>
        {/* <!-- End Service Item --> */}

        <Link to='/booking/test-drive' className="col-xl-4 col-md-6 d-flex text-center" data-aos="zoom-out" data-aos-delay="400">
          <div className="service-item position-relative">
            <div className="icon"><FontAwesomeIcon icon={faGears} /></div>
            <h4 className="stretched-link">Book a Test Drive</h4>
            <p>Anda dapat melakukan pemesanan test drive melalui form yang kami sediakan.</p>
          </div>
        </Link>
        
          {/* <!-- End Service Item --> */}


          </div>

</div>
</section>
  )
}
