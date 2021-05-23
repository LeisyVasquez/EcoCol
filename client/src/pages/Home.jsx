import React from 'react';
//import LogInNavbar from '../components/base/LogInNavbar';
//import TravelerNavbar from '../components/base/TravelerNavbar'; 
import EditorNavbar from '../components/base/EditorNavbar'; 

import Home from '../components/Home';
const home = () => {
 return(
    <div>
      <EditorNavbar />
      <Home />
    </div>
 );
}

export default home; 