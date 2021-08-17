import React from 'react';
import { withRouter } from "react-router-dom";
import EditorNavbar from '../components/base/EditorNavbar'; 
import Home from '../components/Home';
import Footer from "../components/base/Footer";

const homeEditor = () => {
 return(
    <div>
      <EditorNavbar />
      <Home />
      <Footer />
    </div>
 );
}

export default withRouter(homeEditor); 