import React from "react";
import { Link } from "react-router-dom";

function DropdownSurahs(props) {
  return (
    <Link activeClass="active" to={`/quran/${props.surahNumber}`}>
      {props.surahName} surasi
    </Link>
  );
}

export default DropdownSurahs;
