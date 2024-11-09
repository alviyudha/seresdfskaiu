

// eslint-disable-next-line react/prop-types
export default function InteriorModelsComp({imgSrcInterior1,imgSrcInterior2,imgSrcInterior3,imgSrcInterior4}) {
  return (
    <div className="interiorModels container">
        <img src={imgSrcInterior1} className="img-fluid " style={{width:'100%'}} alt="" />
        <img src={imgSrcInterior2} className="img-fluid " style={{width:'100%'}} alt="" />
        <img src={imgSrcInterior3} className="img-fluid " style={{width:'100%'}} alt="" />
        <img src={imgSrcInterior4} className="img-fluid " style={{width:'100%'}} alt="" />
    {/* <div className="img-interior img-fluid"  style={{backgroundImage:`url(${imgSrcInterior1})`,width:'auto'}}>
        
        </div>
        <div className="img-interior" style={{backgroundImage:`url(${imgSrcInterior2})`}}>
        </div>
        <div className="img-interior" style={{backgroundImage:`url(${imgSrcInterior3})`}}>
        </div>
        <div className="img-interior" style={{backgroundImage:`url(${imgSrcInterior4})`}}>
        </div>
         */}
        </div>
  )
}
