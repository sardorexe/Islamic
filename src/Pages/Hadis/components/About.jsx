import React from "react";
import background from "./HadisBg.png";
import "./styles/About.css"

function About() {
  return (
    <>
      <div className="about-bg col-sm-12 col-12 col-md-6 col-lg-6">
        <div className="bg-box">
          <img
            src={background}
            width="100%"
            alt="IslamicLife Islamic life. Background. Hadis"
          />
        </div>
      </div>
      <div className="about-hadis col-sm-12 col-12 col-md-6 col-lg-6">
        <div className="content">
          <p>
            Islom paygʻambari Muhammad (s.a.v)ning yoʻl-yoʻriqlari va
            koʻrsatmalari, u Zotga mansub pandu-nasihatlar yigʻindisi <span style={{color: "#3d84b8"}}>hadislar</span>,
            deb atalib, ular islom dini uchun juda katta ahamiyatga egadir.
            Chunonchi, hadislar Qur'ondan keyin shariat ahkomlarining asosini
            tashkil qiladi. Hadis 2 qismdan iborat : matn va isnod. Hadis 2
            turga — Hadisi qudsiy (maʼnosi Alloh taoloniki, aytilishi Rasululloh
            tomonidan boʻlgan hadislar) va Hadisi nabaviyga boʻlinadi. Hadislar
            eʼtiborga olinishi jihatidan 3 qismga boʻlinadi:
            <ul>
              <li>Sahih (ishonchli);</li>
              <li>Hasan (yaxshi);</li>
              <li>Zaif.</li>
            </ul>
          </p>
          <p>
            Maʼlumki, tarixan gʻoyatda qisqa muddatda nozil boʻlgan Qur’oni
            karim oyatlari baʼzi hollarda umumlashtirilgan, murakkab holda
            keltirilgan boʻlganligidan Paygʻambarimiz hadislari ushbu oyati
            shariflarni kengroq talqin etadi, ularni oddiylashtirib bayon qilib,
            unda keltirilgan voqea va hodisalarni koʻpchilikka tushunarli qilib
            mufassal holatda sharhlaydi.
          </p>
          <span className="remember">
            Islom olamidagi ko'p hadis ilmi bilan shug'ullangan ulamolarning
            asarlaridan foydalangan holda turli xildagi mavzularda ba'zi
            hadislarni e'tiboringizga taqdim qilamiz.
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
