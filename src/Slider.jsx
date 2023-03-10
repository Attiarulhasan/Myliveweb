import React from 'react';
import digital from "../src/images/slider1.png";
import sliderimg2 from "../src/images/Layer 24.png";
const Slider =() =>{
    return (
        <>
<div className="container-fluid slider_container">
<div className="slider_overlay">
          <div className="contents">
            <p>Design that</p>
            <h1>Make Statement</h1>
          </div>
        </div>
<div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
       <img src={digital} className="d-block w-100" alt="..."/> 
    </div>
    <div className="carousel-item">
      <img src={sliderimg2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={digital} className="d-block w-100" alt="..."/>
    </div>
  </div>
  </div>
</div>
        </>
    );
};
export default Slider;