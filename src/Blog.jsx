import React  from "react";
import slidimg1 from "../src/images/Layer 26.png"
import slidimg2 from "../src/images/Layer 27.png"
import slidimg3 from "../src/images/Layer 28.png"
import image4 from "../src/images/Layer 1.png";
import image6 from "../src/images/Layer 3.png";
const Blog =()=>{
    return(

        <>
        <div className="container-fluid pt-5">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-12 pt-5">
                    <hr className="blog_hr"/>
                </div>
                <div className="col-lg-2 col-md-2 col-12 text-center pt-3">
                <div className="blog_contents">
                   <p>Latest News</p>
                   <h4>From our Blog</h4>
                   </div>
                </div>
                <div className="col-lg5 col-md-5 col-12 pt-5">
                    <hr className="blog_hr"/>
                </div>
            </div>
            <div className="container pt-4">
            <div class="row no-gutters justify-content-center">
				<div class="col-md-12">
					<div id="demo" class="carousel slide" data-ride="carousel">
					  <ul class="carousel-indicators">
						<li data-target="#demo" data-slide-to="0" class="active"></li>
						<li data-target="#demo" data-slide-to="1"></li>
						<li data-target="#demo" data-slide-to="2"></li>
					  </ul>
					  <div class="carousel-inner">
						<div class="carousel-item active">
                        <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <img src={slidimg1} className="img-fluid" alt="..."/>
                            <div className="carosual_content pt-3">
                            <p>Living room Furniture</p>
                            <h6><span className="home">Home</span> / 6 comments</h6>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            do eiusmod tempor incididunt ut labore et dolore mag 
                            quis nostrud exercitation ullamco aliqua.</p>
						       </div>
                               </div>
                               <div className="col-lg-4 col-md-4 col-12">
                            <img src={slidimg2} className="img-fluid" alt="..."/>
                            <div className="carosual_content pt-3">
                            <p>Bedroom decoration</p>
                            <h6><span className="home">Home</span> / 0 comments</h6>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            do eiusmod tempor incididunt ut labore et dolore mag 
                            quis nostrud exercitation ullamco aliqua.</p>
						       </div>
						       </div>
                               <div className="col-lg-4 col-md-4 col-12">
                            <img src={slidimg3} className="img-fluid" alt="..."/>
                            <div className="carosual_content pt-3">
                            <p>Kitchen decoration</p>
                            <h6><span className="home">Home</span> / 12 comments</h6>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            do eiusmod tempor incididunt ut labore et dolore mag 
                            quis nostrud exercitation ullamco aliqua.</p>
						       </div>
						       </div>
                               </div>
                               
						</div>
						<div class="carousel-item">
                        <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <img src={slidimg1} className="img-fluid" alt="..."/>
                            <div className="carosual_content pt-3">
                            <p>Living room Furniture</p>
                            <h6><span className="home">Home</span> / 4 comments</h6>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            do eiusmod tempor incididunt ut labore et dolore mag 
                            quis nostrud exercitation ullamco aliqua.</p>
						       </div>
						       </div>
                               <div className="col-lg-4 col-md-4 col-12">
                            <img src={slidimg1} className="img-fluid" alt="..."/>
                            <div className="carosual_content pt-3">
                            <p>Living room Furniture</p>
                            <h6><span className="home">Home</span> / 7 comments</h6>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            do eiusmod tempor incididunt ut labore et dolore mag 
                            quis nostrud exercitation ullamco aliqua.</p>
						       </div>
						       </div>
                               <div className="col-lg-4 col-md-4 col-12">
                            <img src={slidimg1} className="img-fluid" alt="..."/>
                            <div className="carosual_content pt-3">
                            <p>Living room Furniture</p>
                            <h6><span className="home">Home</span> / 8 comments</h6>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            do eiusmod tempor incididunt ut labore et dolore mag 
                            quis nostrud exercitation ullamco aliqua.</p>
						       </div>
                            
						       </div>
                               </div>
						</div>
						<div class="carousel-item">
                        <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <img src={slidimg1} className="img-fluid" alt="..."/>
                            <div className="carosual_content pt-3">
                            <p>Living room Furniture</p>
                            <h6><span className="home">Home</span> / 8 comments</h6>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            do eiusmod tempor incididunt ut labore et dolore mag 
                            quis nostrud exercitation ullamco aliqua.</p>
						       </div>
						       </div>
                               <div className="col-lg-4 col-md-4 col-12">
                            <img src={slidimg1} className="img-fluid" alt="..."/>
                            <div className="carosual_content pt-3">
                            <p>Living room Furniture</p>
                            <h6><span className="home">Home</span> / 6 comments</h6>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            do eiusmod tempor incididunt ut labore et dolore mag 
                            quis nostrud exercitation ullamco aliqua.</p>
						       </div>
						       </div>
                               <div className="col-lg-4 col-md-4 col-12">
                            <img src={slidimg1} className="img-fluid" alt="..."/>
                            <div className="carosual_content pt-3">
                            <p>Living room Furniture</p>
                            <h6><span className="home">Home</span> / 4 comments</h6>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            do eiusmod tempor incididunt ut labore et dolore mag 
                            quis nostrud exercitation ullamco aliqua.</p>
						       </div>
						       </div>
                               </div>
						</div>
					  </div>
					</div>
				</div>
			</div>
            </div>
        </div>
        <div className="container-fluid pt-5 p-0">
        <div className="row gx-0">
            <div className="col-lg-4 col-md-4 col-12 mb-2 ">
            <div className="overlay_container">
            <p className="img_text">LivingRoom</p>
           <div className="overlayy"></div>
             <img src={image4} className="img-fluid imag_overtext" alt="..."/>
            </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mb-2">
            <div className="overlay_container">
            <p className="img_text">WorkingRoom</p>
            <div className="overlayy"></div>
            <img src={image6} className="img-fluid imag_overtext" alt="..."/>
            </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mb-2">
            <div className="overlay_container">
            <p className="img_text">BedRoom</p>
            <div className="overlayy"></div>
            <img src={image4} className="img-fluid imag_overtext" alt="..."/>
            </div>
            </div>
            </div>
        </div>
        </>
    );
};
export default Blog;