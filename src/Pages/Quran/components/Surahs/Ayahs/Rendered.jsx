import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  TelegramShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import { Howl, Howler } from "howler";
import "./Rendered.css";
import Dropdown from "./components/Dropdown";

function Rendered(props) {
  const [increment, setIncrement] = useState(20);
  const [open, setOpen] = useState(false);
  const [ayahs, setAyahs] = useState({
    surahName: "",
    englishName: "",
    texts: [],
    surahNumber: 0,
    firstResult: [],
  });
  const fetchingData = () => {
    const firstUrl = `https://api.alquran.cloud/v1/surah/${props.surahNumber}/ar.alafasy`;
    const secondUrl = `https://quranenc.com/api/translation/sura/uzbek_mansour/${props.surahNumber}`;

    const getNames = axios.get(firstUrl);
    const getAyahs = axios.get(secondUrl);
    axios.all([getNames, getAyahs]).then(
      axios.spread((...allData) => {
        const result = allData[0].data.data.ayahs;
        const name = allData[0].data.data.name;
        const english = allData[0].data.data.englishName;
        const number = allData[0].data.data.number;
        const ayahs = allData[0].data.data.ayahs;
        setAyahs({
          surahName: name,
          englishName: english,
          texts: ayahs,
          surahNumber: number,
          firstResult: result,
        });
      })
    );
  };
  useEffect(() => {
    fetchingData();
  }, []);

  const incrementFont = () => {
    setIncrement(increment + 1);
  };
  const decrementFont = () => {
    setIncrement(increment - 1);
  };

  const ayahPlay = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };
  Howler.volume(1.0);
  return (
    <div className="Ayahs-wrapper row">
      <div className="menu col-sm-12 col-12 col-md-12 col-lg-12">
        <div className="menu_select">
          <button className="btn" onClick={() => setOpen(!open)} type="button">
            Oyat{" "}
            <i class={`fas ${open ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
          </button>
          <div className={`ayahs-select ${open ? "open" : ""}`}>
            {ayahs.texts.map((ayah) => (
              <Dropdown ayahNumber={ayah.numberInSurah} />
            ))}
          </div>
        </div>
        <div className="menu_font-changer">
          <button
            style={{ fontWeight: "bold" }}
            className="btn"
            type="button"
            onClick={incrementFont}
          >
            A +
          </button>
          <button
            style={{ fontSize: "12px" }}
            type="button"
            onClick={decrementFont}
            className="btn"
          >
            A -
          </button>
        </div>
      </div>
      {ayahs.texts.map((ayah) => (
        <div
          id={`ayah${ayah.numberInSurah}`}
          className="ayah col-sm-12 col-md-12 col-lg-10 col-xl-10 col-12"
      >
          <div className="ayah_options">
            <CopyToClipboard text={ayah.text}>
              <button tooltip="Nusxalash" className="btn option-copy">
                <i className="fas fa-copy"></i>
              </button>
            </CopyToClipboard>
            <button tooltip="Eshitish"
              onClick={() => ayahPlay(ayah.audio)}
              className="btn option-play"
            >
              <i className="fas fa-play"></i>
            </button>
          </div>
          <div className="ayah_text-content">
            <span>{ayahs.surahNumber}:{ayah.numberInSurah}</span>
            <p style={{ fontSize: `${increment}px` }} className="ayah-text">
              {ayah.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rendered;
