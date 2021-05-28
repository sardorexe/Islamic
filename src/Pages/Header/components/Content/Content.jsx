import React, { useState, useEffect, useCallback } from "react";
// import Typical from "react-typical";
import contentImg from "./content-img.svg";
import "./Content.css";

function Content() {
  return (
    <div className="Header-content row">
      <div className="content col-sm-9 col-md-10">
        <div className="content-img">
          <img src={contentImg} alt="Islamic Life image" />
        </div>
        <div className="content-text">
          <h3 className="quote">
            'Kimki ilm yo'lidan yursa, Alloh uni Jannat yo'liga yo'llab qo'yadi'
          </h3>
          <span className="author">- Muhammad (s.a.v)</span>
        </div>
      </div>
    </div>
  );
}

{
  /*

  "",
  "",
  ",
  "",
  "", */
}

export default Content;
