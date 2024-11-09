import { bgHome1, bgHome2, bgHome3, bgHome4, bgHome5, bgHome6 } from '../assets/Image/ImportImage'

export default function CarouselBGHome() {

    const bgHome =[
        bgHome1,
        bgHome2,
        bgHome3,
        bgHome4,
        bgHome5,
        bgHome6,
    ]
  return (
    <div id="carouselCaption" className="carousel slide shadow">
  <div className="carousel-indicators">
  {bgHome.map((item, index) => (
          <button key={index} type="button" data-bs-target="#carouselCaption" data-bs-slide-to={index} className={index === 0 ? 'active' : ''} aria-label={`Slide ${index + 1}`}></button>
        ))}
    </div>
    <div className="carousel-inner">

    {bgHome.map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={item} alt={`SERES DFSK ${index}`} className="d-block w-100" />
          </div>
        ))}
    {/* <div className="carousel-item active">
      <img src={BgModelsSeres} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={BgModelsGelora} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={BgModelsGlori} className="d-block w-100" alt="..."/>
    </div> */}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaption" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselCaption" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>
  </div>

  )
}
