import React  from "react";
import web from "../src/images/vector-art-2.png";
import Common from "./Common";
import Services from "./Services";
import Slider from "./Slider";
import About from "./About";
import Blog from "./Blog";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

const Home =()  =>{
    return  (
        <> 
       <Common
         name="Grow your Business with" 
        imgsrc={web} visit="/Services"
         btname="Get Started"/>
         <Slider/>
         <Services/>
        <About/>
        <Blog/>
        <Testimonial/>
        <Contact/>
        </>
    );
};
export default Home;