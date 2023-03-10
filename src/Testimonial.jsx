import React  from "react";
import img1 from "../src/images/cock.png";
import img2 from "../src/images/dropbox.png";
import img3 from "../src/images/intel.png";
import img4 from "../src/images/Zendesk.png";
import img5 from "../src/images/nokia.png";
import img6 from "../src/images/client.png";
import img7 from "../src/images/previous.png";
import img8 from "../src/images/next.png";

const Testimonial = ()=>{
    return (

        <>

<div className="container-fluid testimonial_container pt-4">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-12 pt-5">
                    <hr className="blog_hr"/>
                </div>
                <div className="col-lg-2 col-md-2 col-12 text-center pt-4">
                <div className="Testimonial_contents">
                   <p>Testimonial</p>
                   <h4>Awesome Clients</h4>
                   </div>
                </div>
                <div className="col-lg5 col-md-5 col-12 pt-5">
                    <hr className="blog_hr"/>
                </div>
            </div>
            </div>

            <div className="container-fluid testimonial_container pt-4">
            <div class="row no-gutters justify-content-center">
				<div class="col-md-12">
					<div id="testimonial" class="carousel slide" data-ride="carousel">
					  <div class="carousel-inner">
						<div class="carousel-item active">
                        <div className="row text-center">
                        <div className="col-lg-4 col-md-12 col-12">
                            <img src={img6} className="img-fluid  testimonial_img" alt="..."/>
                               </div>
                               <div className="col-lg-8 col-md-12 col-12">
                                <div className="carusal_contants">
                                    <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                     sed do eiusmod tempor incididunt ut labore ”</p>
                                     <h4>- EMILA CLARK, CEO of NEWTWCH</h4>
                                </div>
						       </div>
                               </div>
						</div>
						<div class="carousel-item">
                        <div className="row text-center">
                        <div className="col-lg-4 col-md-12 col-12">
                            <img src={img6} className="img-fluid testimonial_img" alt="..."/>
						       </div>
                               <div className="col-lg-8 col-md-12 col-12">
                             <div className="carusal_contants">
                                    <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                     sed do eiusmod tempor incididunt ut labore ”</p>
                                     <h4>- EMILA CLARK, CEO of NEWTWCH</h4>
                                </div>
						       </div>
                               </div>
						</div>
						<div class="carousel-item">
                        <div className="row text-center">
                        <div className="col-lg-4 col-md-12 col-12">
                        
                            <img src={img6} className="img-fluid  testimonial_img" alt="..."/>
						       </div>
                               <div className="col-lg-8 col-md-12 col-12">
                               <div className="carusal_contants">
                                    <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                     sed do eiusmod tempor incididunt ut labore ”</p>
                                     <h4>- EMILA CLARK, CEO of NEWTWCH</h4>
                                </div>
						       </div>
                               </div>
						</div>
					  </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#testimonial" data-bs-slide="prev">
                      <img src={img7} className="img-fluid carousal_button"/>
             <span class="visually-hidden">previous</span></button>
  <button class="carousel-control-next" type="button" data-bs-target="#testimonial" data-bs-slide="next">
  <img src={img8} className="img-fluid carousal_button"/>
    <span class="visually-hidden">next</span>
  </button>
					</div>
				</div>
			</div>
            </div>
            <div className="container-fluid pt-5">
                <div className="row testmonial text-center justify-content-center">
                    <div className="col-lg-2 col-md-2 col-12 mb-2">
                      <img src={img1} className="img-fluid" alt="cock"/>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12 mb-2">
                    <img src={img2} className="img-fluid" alt="dropbox"/>
                        </div>
                        <div className="col-lg-2 col-md-2 col-12 mb-2">
                        <img src={img3} className="img-fluid" alt="intel"/>
                        </div>
                        <div className="col-lg-2 col-md-2 col-12 mb-2">
                        <img src={img4} className="img-fluid" alt="zendesk"/>
                        </div>
                        <div className="col-lg-2 col-md-2 col-12 mb-2">
                        <img src={img5} className="img-fluid" alt="nokia"/>
                        </div>
                </div>
            </div>
        </>
    );
};
export default Testimonial;