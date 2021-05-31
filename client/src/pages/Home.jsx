import React from 'react';
import { withRouter } from "react-router-dom";
import LogInNavbar from '../components/base/LogInNavbar';
import TravelerNavbar from '../components/base/TravelerNavbar'; 
import EditorNavbar from '../components/base/EditorNavbar'; 
import Home from '../components/Home';
import Footer from "../components/base/Footer";

const home = () => {
 return(
    <div>
      <LogInNavbar />
      <Home />
      <Footer />
    </div>
 );
}

export default withRouter(home); 