import React from 'react';
import { withRouter } from "react-router-dom";
import TravelerNavbar from '../components/base/TravelerNavbar'; 
import Home from '../components/Home';
import Footer from "../components/base/Footer";

const homeTraveler = () => {
 return(
    <div>
      <TravelerNavbar />
      <Home />
      <Footer />
    </div>
 );
}

export default withRouter(homeTraveler); 