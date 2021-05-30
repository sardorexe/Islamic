import React from "react";

function WrapperWithDua({ title, content, dua, section, meaning }) {
  return (
    <div className="content-wrapper col-sm-10 col-12 col-md-12 col-lg-12">
      <div className="wrapper-title">
        <h3 className="title">{title}</h3>
        <span className="hadis-section">{section}</span>
      </div>
      <div className="wrapper-content">
      <p className="text">{content}</p>
      <span className="dua">{dua}</span>
      <p className="dua-meaning">{meaning}</p>
      </div>
    </div>
  );
}

export default WrapperWithDua;
