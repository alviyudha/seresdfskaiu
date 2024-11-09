import React from 'react'
import { seresSlide1, seresSlide2, seresSlide3 } from '../assets/Image/ImportImage'

export default function CarouselBootstrap() {

    const newsHome = [
        seresSlide1,
        seresSlide2,
        seresSlide3
    ]
  return (
    <div className="carousel-inner" style={{height: 'auto'}}>
         {newsHome.map((item,index) =>{
            <div className={`carousel-item c-item ${index === 0 ? 'active':''} data-bs-interval="10000"`}>
                <img src={item} className='d-block w-100' style={{height:'100%'}} alt={`Seres ${index+1}`}/>
            </div>
        })}
         <button className="carousel-control-prev" type="button" data-bs-target="#slide-product1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#slide-product1" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
  </div>
  )
}
