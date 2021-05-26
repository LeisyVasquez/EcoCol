import React from "react";
import Ruleta from "../images/ruleta.png";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="ruleta">
        <button className="btn-ruleta">
          <img className="img-ruleta" src={Ruleta} alt="ruleta" />
        </button>
      </div>
    </div>
  );
};

export default Home;
