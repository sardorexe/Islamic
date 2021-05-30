import React from "react";
import "../styles/Wrapper.css"

function WrapperSimple({content, title, section}) {
  return (
    <div className="content-wrapper col-sm-10 col-12 col-md-12 col-lg-12">
      <div className="wrapper-title">
        <h3 className="title">{title}</h3>
        <span className="hadis-section">{section}</span>  
      </div>
      <p className="wrapper-content">{content}</p>
    </div>
  );
}

export default WrapperSimple;
