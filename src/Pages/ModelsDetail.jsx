import { useParams } from "react-router-dom";
import { carsData, exteriorImg, interiorImg } from "../assets/js/modelData";
// import GalleryComp from "../Components/GalleryComp";
import ExteriorModelsCom from "../Components/ExteriorModelsCom";
import ColorModelsComp from "../Components/ColorModelsComp";

import { imgTabColors } from '../assets/js/modelData';
import SlickSlyncingComp from "../Components/SlickSlyncingComp";

export default function ModelsDetail() {
  let { modelName } = useParams();
  let srcImg,titleCars11,modelName11 = "";
  // let getImgGlry = "";
  const selectedCarImages = imgTabColors[modelName] || imgTabColors['seres-e1'];
  const images = selectedCarImages.img;

  const getCatalog = carsData[modelName].catalog

  const selectedCarData = carsData[modelName]
  if (selectedCarData) {
    modelName11= modelName
    srcImg = selectedCarData.srcImg;
    titleCars11 = selectedCarData.titleCars;
    // getImgGlry = selectedCarData.GalleryImages;

  }
  const getUrlInterior = interiorImg[modelName];
  const getUrlExterior = exteriorImg[modelName]
  return (
    <>
    <img src={srcImg} id="imgModelDetail" className="img-fluid mb-5" alt="SERES DFSK AIU" />
    {images.map((image, index) => (
          
          <img
          key={index}
            src={image}
            alt={`Image ${index}`}
            className="img-fluid m-1"
          />
      ))}
    {/* tab */}
    <nav className="mt-5 shadow p-3" id="tabModelsDetail">
    <div className="nav nav-underline justify-content-center " id="nav-tab-cars" role="tablist">
      <button className="nav-link nav-link-sec px-4 px-4 active" id="color-tab" data-bs-toggle="tab" data-bs-target="#nav-color" type="button" role="tab" aria-controls="nav-color" aria-selected="true">Color
      </button>
      <button className="nav-link nav-link-sec px-4 px-4" id="Interior-tab" data-bs-toggle="tab" data-bs-target="#nav-interior" type="button" role="tab" aria-controls="nav-interior" aria-selected="false">Interior</button>
      <button className="nav-link nav-link-sec px-4 px-4" id="exterior-tab" data-bs-toggle="tab" data-bs-target="#nav-exterior" type="button" role="tab" aria-controls="nav-exterior" aria-selected="false">Exterior</button>
      {/* <button className="nav-link nav-link-sec px-4 px-4" id="galery-tab" data-bs-toggle="tab" data-bs-target="#nav-galery" type="button" role="tab" aria-controls="nav-galery" aria-selected="false">Galery</button> */}
      <a href={getCatalog} className="nav-link nav-link-sec px-4 px-4" target="_blank" id="catalog-tab" rel="noreferrer" >Catalog</a>
    
    </div>
</nav>
    <div className="tab-content mt-5" id="nav-tabContent">
      {/* content 1 */}
      <div className="tab-pane fade show active" id="nav-color" role="tabpanel" aria-labelledby="color-tab" >
        <ColorModelsComp
        modelName1={modelName11}
        titleCars={titleCars11}
        />
       
      </div>
      {/* content 2 */}
      <div className="tab-pane fade" id="nav-interior" role="tabpanel" aria-labelledby="Interior-tab" >
        
        <SlickSlyncingComp 
        interiorImgProps = {getUrlInterior}
        />
        
      </div>
      {/* content 3 */}
        <div className="tab-pane fade" id="nav-exterior" role="tabpanel" aria-labelledby="exterior-tab" >
        <ExteriorModelsCom
        exteriorImgProps = {getUrlExterior}
        />
      </div>
      {/* content 4 */}
      {/* <div className="tab-pane fade" id="nav-galery" role="tabpanel" aria-labelledby="galery-tab" >
        <GalleryComp
        imagesProf={getImgGlry}
        />
      </div> */}
      {/* end content */}

    </div>    
{/* end tab */}
    </>
  )
}
