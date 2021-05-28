import React from "react";
import Menu from "../containers/Menu/Menu";
import About from "./components/About";
import Wrapper from "./components/Wrapper";
import "./Hadis.css";

function Title() {
  return (
    <svg width="100%" height="100%">
      <defs>
        <pattern
          id="polka-dots"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        ></pattern>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;700&display=swap');
        </style>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)">
        {" "}
      </rect>

      <text x="50%" y="60%" text-anchor="middle">
        Hadis
      </text>
    </svg>
  );
}

function Hadis() {
  return (
    <div className="Hadis">
      <Menu />
      <div className="container">
        <div className="start col-sm-12 col-md-12 col-lg-12">
          <h1 style={{ textAlign: "center" }} className="title">
            <Title />
          </h1>
        </div>
        <div className="About row">
          <About />
        </div>
        <div className="Content row">
          <Wrapper />
        </div>
      </div>
    </div>
  );
}

export default Hadis;
