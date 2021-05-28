import React from "react";
import Menu from "../containers/Menu/Menu";
// import Menu from "./components/Menu/Menu";
import Surah from "./components/Surahs/Surah";
import "./Quran.css";

function Quran() {
  return (
    <div className="Quran">
      <Menu />
      <div className="container">
        
        <Surah />
      </div>
    </div>
  );
}

export default Quran;
