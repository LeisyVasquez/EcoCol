import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../../components/NavbarLogIn";
import SingUp from "../../components/traveler/SingUp";
import Footer from "../../components/Footer";

const signUp = () => {
  return (
    <>
      <Navbar />
      <SingUp />
      <Footer />
    </>
  );
};

export default withRouter(signUp);
