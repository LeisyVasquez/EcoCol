import React from 'react';
import { withRouter } from "react-router-dom";
import LogInNavbar from '../components/base/LogInNavbar';
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