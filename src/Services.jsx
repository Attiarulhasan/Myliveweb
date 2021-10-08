import React  from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import Eam from "../src/images/Eam.png";
import tellus from "../src/images/Tellus.png"
import homedeco from "../src/images/Homedeco.png";
const Services =() =>{
    return  (
        <>
       
        <div className="container mt-5 gy-4">
            <div className="row gx-3 gy-4 text-center">
                <div className="col-lg-6 col-md-6 col-12">
                 <img src={Eam} className="img-fluid" alt="..."/><br/><br/>
                 <img src={tellus} className="img-fluid" alt=".."/>
                </div>
            <div className="col-lg-4 col-md-6 col-12">
            <img src={homedeco} className="img-fluid home_deco_img" alt=".."/>
                </div>
                </div>
                </div>
        </>
    )
}
export default Services;