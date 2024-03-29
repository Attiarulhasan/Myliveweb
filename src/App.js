import React from  "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home  from "./Home";
import About from "./About";
import Services from "./Services";
import Navbar  from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import "./index.css";
const App =()=>{
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component ={Home}/>
    <Route exact path="/about" component ={About}/>
    <Route exact path="/Services" component ={Services}/>
    <Route exact path="/Contact" component ={Contact}/>
    <Redirect to ="/" />
    </Switch>
    <Footer/>
    </>
  );
};
export default App;
