import React, { useState } from "react";
import { Link } from "react-scroll";

function Dropdown(props) {
  return (
      <Link activeClass="active" smooth={true} to={`ayah${props.ayahNumber}`}>
        {props.ayahNumber} - oyat
      </Link>
  );
}

export default Dropdown;
