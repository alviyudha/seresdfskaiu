// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { colorData } from '../assets/js/modelData';

// eslint-disable-next-line react/prop-types
export default function ColorModelsComp({ titleCars, modelName1 }) {
  const getColorsData = colorData[modelName1] || colorData['seres-e1'];
  const { initialImage, backgroundColor, colors } = getColorsData;

  const [currentImage, setCurrentImage] = useState(initialImage);
  const [currentBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [currentDescColor, setCurrentDescColor] = useState(colors[0].descColor);

  const changeImage = (newImage, newBackgroundColor, newDescColor) => {
    setCurrentImage(newImage);
    setBackgroundColor(newBackgroundColor);
    setCurrentDescColor(newDescColor);
  };

  return (
    
    <div id="pageColorCars" className="text-center">
     
      <h3 className="pageColorHeader">Color Selection</h3>
      <p className="title-cars fs-4">{titleCars}</p>
      <div className="row" style={{ height: '500px', background: `linear-gradient(0deg, ${currentBackgroundColor} 35%, rgba(255,255,255,1) 80%)` }}>
        <div className="col-sm-8 bg-car-view mt-3">
          <img src={currentImage} alt="Color-selection" className="img-fluid" style={{ width: '70%' }} />
        </div>
        <div className="col-sm-4">
          <div className='button-container pt-5'>
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => changeImage(color.image, color.background, color.descColor)}
              className="p-4 rounded-circle btn-colors m-1"
              style={{ background: color.background }}
            ></button>
          ))}
          <p className='mt-5 fs-3 descColor'>{currentDescColor}</p>
        </div>
        </div>
      </div>
     
        
      </div>
  );
}
