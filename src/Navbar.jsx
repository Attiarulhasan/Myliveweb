import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from '../node_modules/@material-ui/icons/Facebook';
import TwitterIcon from '../node_modules/@material-ui/icons/Twitter';
import YouTubeIcon from '../node_modules/@material-ui/icons/YouTube';
import LinkedInIcon from '../node_modules/@material-ui/icons/LinkedIn';
import logo from "../src/images/logo.png";

const Navbar = () =>{
    return(
   <>
   <div className="container-fluid fixed-top top_header">
   <div className="row">
   <div className="col-6">
   <div className="contents">
       <p className="pt-2">Welcome to HOMEDECORE ! 13 years of Experience
       </p>
       </div>
       </div>
       <div className="col-6 text-right">
       <div className=" social_links text-white pt-2">
       <FacebookIcon/>
       <TwitterIcon/>
       <LinkedInIcon/>
       <YouTubeIcon/>
       </div>
       </div>
       </div>
          </div>
   <div className="container-fluid">
   <div className="row">
        <div className="col-10 mx-auto">
  <nav className="navbar navbar-light fixed-top mt-4 pt-4">
  <div className="container brand-container">
    <NavLink className="navbar-brand" to="/"> <img src={logo} alt="..."/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink 
          activeClassName="menu_active"
          exact
          className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          activeClassName="menu_active"
          exact
           className="nav-link" to="/Services" id="service_page">Services </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          activeClassName="menu_active"
          exact
          className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          activeClassName="menu_active"
          exact
           className="nav-link" to="/Contact">Contact </NavLink>
           
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
   </div>
   </div>
   </>
    );
};
export default Navbar;