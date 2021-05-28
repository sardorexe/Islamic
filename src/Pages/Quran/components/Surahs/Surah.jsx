import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "./surahs.json";
import "./Surah.css";
import DropdownSurahs from "./DropdownSurahs";

function Surah() {
  const [click, setClick] = useState(false)
  const toggleClick = () => {
    setClick(!click)
  }
  return (
    <>
      <div className="start col-sm-8 col-md-10 col-lg-10">
        <h1 style={{ textAlign: "center" }} className="title">
          <span>القرآن</span>
          <br />
          Qur'oni Karim
        </h1>
        <div className="dropdown">
          <button onClick={toggleClick} className="btn dropdown-btn">Suralar <i class={`fas ${click ? "fa-chevron-up" : "fa-chevron-down" }`}></i></button>
          <div className={`dropdown-surahs ${click ? "open" : ""}`}>
            {data.map((surah) => (
              <DropdownSurahs surahName={surah.englishName} />
            ))}
          </div>
        </div>
      </div>
      <div className="Surahs row">
        {data.map((surah, index) => (
          <div key={index} className="col-sm-12 col-12 col-md-6 col-lg-4">
            <div id={surah.englishName} className="surah">
              <h5 className="surah-number">{surah.number}</h5>
              <h2 className="surah-englishName">
                <Link to={`/quran/${surah.number}`}>{surah.englishName}</Link>
              </h2>
              <span className="surah-name">{surah.name}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Surah;
