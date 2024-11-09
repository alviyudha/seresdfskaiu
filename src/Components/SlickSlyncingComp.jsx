/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function SlickSlyncingComp({interiorImgProps}) {
 
  class AsNavFor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
      };
    }
  
    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }
  
    render() {
  
      
      return (
        <div id="slickSlyncing">
          
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
          >

          {interiorImgProps.img.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index}`} className="img-fluid" />
              </div>
            ))}
           
           
          </Slider>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
               {interiorImgProps.img.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index}`} className="img-thumbnail" />
              </div>
            ))}
           
          </Slider>
        </div>
      );
    }
  }
  return (
    <div className="container">
      <AsNavFor />
    </div>
  );
}
