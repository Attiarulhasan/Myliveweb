import React  from "react";
import web from "../src/images/vector-art-4.png";
import Common from "./Common";
import aboutimg from "../src/images/Layer 4.png";
import aboutimg1 from "../src/images/Layer 6.png";
import aboutimg2 from "../src/images/Layer 7.png";
import aboutimg3 from "../src/images/Layer 8.png";
import aboutimg4 from "../src/images/Layer 9.png";
import aboutimg5 from "../src/images/Layer 10.png";
import aboutimg6 from "../src/images/Layer 11.png";
import aboutimg7 from "../src/images/7.png";
import aboutimg8 from "../src/images/6.png";
import aboutimg9 from "../src/images/5.png";
import aboutimg10 from "../src/images/4.png";
import aboutimg11 from "../src/images/3.png";
import aboutimg12 from "../src/images/2.png";
import aboutimg13 from "../src/images/9.png";
import aboutimg14 from "../src/images/8.png";
import aboutimg15 from "../src/images/Layer 24.png";
const About =()  =>{
    return  (
        <>
       <Common
        name="Welcome to About page" 
        imgsrc={web} visit="/contact"
         btname="Contact Now"/>
         <div className="container-fluid about_container">
             <div className="row p-0">
                 <div className="col-lg-6 col-md-6 col-12">
                 <img src={aboutimg} className="img-fluid about_image" alt="..."/>
                 </div>
                 <div className="col-lg-6 col-md-6 col-12">
                 <div className="about_contents">
                     <h4>About Us</h4>
                     <h3>Brief History</h3>
                       <p className="inner_para">Accusantium doloremque laudanti totam rem aperia <br/>
                       eaque ipsa quae ab illo inventore veritatis et quasi<br/>architecto beatae vitae dictam</p>
                      <br/>
                      <p className="bottom_para">sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore ett voluptatem..</p><br/>
                      <h6 className="read_more">read more...</h6>
                 </div>
                     </div>
             </div>
             <div className="container text-center overlay_container">
                <div className="row gx-0 pt-0 text-center ">
                    <div className="col-lg-2 col-md-6 col-12 outer">
                        <img src={aboutimg1} className="img-fluid" alt="..."/>
                        <div class="overlay">
                        <div class="text"><i class="fas fa-arrows-alt"></i></div>
                    </div>
                    <div className="overlay_title">
                        <p>Living Room</p>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12 outer">
                        <img src={aboutimg2} className="img-fluid" alt="..."/>
                        <div class="overlay">
                        <div class="text"><i class="fas fa-arrows-alt"></i></div>
                    </div>
                    <div className="overlay_title">
                        <p>Bed Room</p>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12 outer">
                        <img src={aboutimg3} className="img-fluid" alt="..."/>
                        <div class="overlay">
                        <div class="text"><i class="fas fa-arrows-alt"></i></div>
                    </div>
                    <div className="overlay_title">
                        <p>Dining Room</p>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12 outer">
                        <img src={aboutimg4} className="img-fluid" alt="..."/>
                        <div class="overlay">
                        <div class="text"><i class="fas fa-arrows-alt"></i></div>
                    </div>
                    <div className="overlay_title">
                        <p>Lighting</p>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12 outer">
                        <img src={aboutimg5} className="img-fluid" alt="..."/>
                        <div class="overlay">
                        <div class="text"><i class="fas fa-arrows-alt"></i></div>
                    </div>
                    <div className="overlay_title">
                        <p>Bathroom</p>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12 outer">
                        <img src={aboutimg6} className="img-fluid" alt="..."/>
                        <div class="overlay">
                        <div class="text"><i class="fas fa-arrows-alt"></i></div>
                    </div>
                    <div className="overlay_title">
                        <p>Dining Room</p>
                        </div>
                    </div>
                </div>
             </div>
         </div>
         <div className="container mt-4">
             <div className="row">
                 <div className="col-lg-4 col-md-4 col-12 mb-2">
                     <div className="text-center">
                         <img src={aboutimg7 } className="img-fluid" alt="..."/>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-4 col-12 mb-2">
                     <div className="text-center">
                         <img src={aboutimg8 } className="img-fluid" alt="..."/>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-4 col-12 mb-2">
                     <div className="text-center">
                         <img src={aboutimg9} className="img-fluid" alt="..."/>
                     </div>
                 </div>
             </div>
             <div className="row pt-4">
             <div className="col-lg-4 col-md-4 col-12 mb-2">
                     <div className="text-center">
                         <img src={aboutimg10 } className="img-fluid" alt="..."/>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-4 col-12 mb-2">
                     <div className="text-center">
                         <img src={aboutimg11 } className="img-fluid" alt="..."/>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-4 col-12 mb-2">
                     <div className="text-center">
                         <img src={aboutimg12 } className="img-fluid" alt="..."/>
                     </div>
                 </div>
             </div>
             <div className="row pt-4">
             <div className="col-lg-4 col-md-4 col-12 mb-2">
                     <div className="text-center">
                         <img src={aboutimg13 } className="img-fluid" alt="..."/>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-4 col-12 mb-2">
                     <div className="text-center">
                         <img src={aboutimg14} className="img-fluid" alt="..."/>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-4 col-12 mb-2">
                     <div className="text-center">
                         <img src={aboutimg7 } className="img-fluid" alt="..."/>
                     </div>
                 </div>
             </div>
         </div>
         <div className="container pt-5 text-center">
                 <button className="btn btn_loadmore">Load more</button>
         </div>
         <div className="container-fluid pt-4 p-0">
             <div className="background_overimg">
             <div className="background_overlay text-white">
                 <p className="heading1">50 % Off</p>
                 <p className="heading2">Special Sale</p>
                 <p className="justify-content-center paragraph pt-2">Lorem ipsum dolor sit amet, consectetur adip
               iscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolortee magna aliqua.</p>
                <div className="text-center pt-2">
                <button className=" btn btn_visit">Visit Now</button>
             </div>
             </div>
                 <img src={aboutimg15} className="img-fluid sale_background" alt="..."/>
             </div>
         </div>
        </>
    )
}
export default About;