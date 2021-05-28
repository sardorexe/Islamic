import React, { useState, useEffect } from "react";
import axios from "axios";
import Rendered from "./Rendered";
import "./Ayahs.css";
import Loading from "./Loading";
import Menu from "../../../../containers/Menu/Menu"

function Ayahs(props) {
  const [ayah, setAyah] = useState({
    surahName: "",
    englishName: "",
    surahNumber: 0,
    audios: [],
    texts: [],
  });
  const [loading, setLoading] = useState(true);
  const fetchingData = () => {
    fetch(`https://api.alquran.cloud/v1/surah/${props.surahNumber}/ar.alafasy`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAyah({
          surahNumber: data.data.number,
          surahName: data.data.name,
          englishName: data.data.englishName
        })
      })
      .finally(() => {
        setLoading(!loading)
      })
  };
  useEffect(() => {
    fetchingData()
     
  }, [])
  
  if (loading) return <Loading />
  return (
    <div className="Ayahs">
      <Menu />
      <div className="container">
        <div className="start">
          <h2 className="surah-name">{ayah.surahName}</h2>
          <h1 className="surah-english">{ayah.englishName}</h1>
          
        </div>
        <Rendered texts={ayah.texts} surahNumber={props.surahNumber} />
      </div>
    </div>
  );
}

export default Ayahs;
