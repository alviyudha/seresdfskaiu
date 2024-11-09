import React from 'react'
import CarouselBootstrap from './CarouselBootstrap'

export default function NewsSlide() {
  return (
    <section className="PRODUCT section-custom" id="productVehicles">
  <div className="container">
    <h3 className="header-text">What Happening</h3>
    <p className="caption-text">Latest Technology, News and Vehicle</p>
    <nav>
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <div className="box-tab-carousel d-flex">
        <a className="nav-link-custom active" id="nav-slide1-tab" data-bs-toggle="tab" data-bs-target="#nav-slide1" type="button" role="tab" aria-controls="nav-slide1" aria-selected="true">SERES E1</a>

        <a className="nav-link-custom" id="nav-slide2-tab" data-bs-toggle="tab" data-bs-target="#nav-slide2" type="button" role="tab" aria-controls="nav-slide2" aria-selected="false">DFSK</a>

        {/* <a className="nav-link-custom" id="nav-slide3-tab" data-bs-toggle="tab" data-bs-target="#nav-slide3" type="button" role="tab" aria-controls="nav-slide3" aria-selected="false">FORD EVEREST</a> */}

      </div>
    </div>
    </nav>
    <div className="tab-content" id="nav-tabContent">

      <div className="tab-pane fade show active p-3" id="nav-slide1" role="tabpanel" aria-labelledby="nav-slide1-tab">
        {/* <!-- CARD CAROUSEL PRODUCT --> */}
       <div id="slide-product1" className="carousel slide" data-bs-ride="carousel">
      <CarouselBootstrap />
        <button className="carousel-control-prev" type="button" data-bs-target="#slide-product1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#slide-product1" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- <button className="BROCHURE" id="brochure" download="BROCHURE.pdf">DOWNLOAD BROCHURE</button> --> */}
      <div className="box-brochure">
      <button className="nav-item dropdown BROCHURE"  >
        <a className="dropdown-item text-color-primary" id="brochure">Download Brochure</a>
        
      </button>
      <button className=" btn-explore"  type="button" >
        <a className="nav-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Explore Vehicles
        </a>
       
      </button>
    </div>
      {/* <!-- END CAROUSEL PRODUCT --> */}
      </div>

      <div className="tab-pane fade p-3" id="nav-slide2" role="tabpanel" aria-labelledby="nav-slide2-tab" >
       {/* <!-- CARD CAROUSEL PRODUCT --> */}
       <div id="slide-product2" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{height: 'auto'}}>
          <div className="carousel-item active c-item" data-bs-interval="10000">
            <img src= {supercabSlide1} className="d-block w-100 " style={{height: '100%'}} alt="..."/>
          </div>
          <div className="carousel-item c-item " data-bs-interval="1000" >
            <img src= {iautoSlide1}className="d-block w-100 "style={{height: '100%'}} alt="..."/>
          </div>
          <div className="carousel-item c-item" >
            <img src= {BgModelsGelora} className="d-block w-100" style={{height: '100%'}} alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#slide-product2" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#slide-product2" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- END CAROUSEL PRODUCT --> */}
      </div>

      <div className="tab-pane fade p-3" id="nav-slide3" role="tabpanel" aria-labelledby="nav-slide3-tab">
        {/* <!-- CARD CAROUSEL PRODUCT --> */}
        <div id="slide-product3" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" style={{height: 'auto'}}>
            <div className="carousel-item active c-item" data-bs-interval="10000">
              <img src={Slide1} className="d-block w-100 " style={{height: '100%'}} alt="..."/>
            </div>
            <div className="carousel-item c-item " data-bs-interval="1000" >
              <img src={Slide1}className="d-block w-100 "style={{height: '100%'}} alt="..."/>
            </div>
            <div className="carousel-item c-item" >
              <img src={Slide1} className="d-block w-100" style={{height: '100%'}} alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#slide-product3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#slide-product3" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <!-- END CAROUSEL PRODUCT --> */}
      </div>
      
      </div>
      </div>
  
      </section>
  )
}
