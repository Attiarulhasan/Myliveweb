
import "./index.css";
import img1 from "../src/images/Layer 30.png";
import img2 from "../src/images/Layer 31.png";

const Contact =()  =>{

    return  (
        <>
       <div className="container-fluid outer-container pt-4 p-0">
            <div className="container-fluid inner-container pt-4">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-4 col-md-4 col-12">
                       <div className="contactinfo_left">
                       <img src={img1} className="img-fluid" alt="address"/>
                       <p>1246 Jasmine Line<br/>
                           Near Park Street<br/>
                           California 12562, USA</p>
                       </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                        <div className="contact_form">
                         <h4>Contact US</h4>
                            <form className="contactform">
                             <input type="text" placeholder="Name"/><br/>
                             <input type="email" placeholder="Email"/><br/>
                             <textarea name="message" placeholder="Message" id="" cols="30" rows="6"></textarea><br/>
                             <button>SEND</button>
                            </form>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-12">
                        <div className="contactinfo_left text-center">
                       <img src={img2} className="img-fluid" alt="phone"/>
                       <p>Info@domain.com <br/>
                          Contact@domain.com<br/>
                         <span className="number">+1 (810) 2352 1235</span></p>
                       </div>
                        </div>
                    </div>
                </div>
             
            </div>
       </div>
        </>
    );
};
export default Contact;