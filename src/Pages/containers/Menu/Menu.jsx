import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="Menu">
        <div className="menu-btn">
          <i class="fas fa-angle-double-right"></i>
        </div>
        <div className="menu-links">
          <span className="link">
            <NavLink to="/quran">QUR'ONI KARIM</NavLink>
          </span>
          <span className="link">
            <NavLink to="/hadis">HADIS</NavLink>
          </span>
          <span className="link">
            <NavLink to="/saval">SAVOL JAVOBLAR</NavLink>
          </span>
          <span className="link">
            <NavLink to="/gunah">GUNOHI KABIRALAR</NavLink>
          </span>
          <span className="link">
            <NavLink to="/rumiy">JALOLIDDIN RUMIY</NavLink>
          </span>
        </div>
        <div className="menu-footer">
          <i class="far fa-dot-circle"></i>
          <span>Dasturchi:  <NavLink to="/developer">Sardor</NavLink></span>
        </div>
      </nav>

      {/* Responsive Menu */}
      <nav className={`Responsive-menu ${click ? "show" : ""}`}>
        <div className="menu-btn">
          <i onClick={handleClick} class={`fas fa-angle-double-right ${click ? "clicked" : ""}`}></i>
        </div>
        <div className="menu-links">
          <span className="link">
            <NavLink to="/quran">QUR'ONI KARIM</NavLink>
          </span>
          <span className="link">
            <NavLink to="/hadis">HADIS</NavLink>
          </span>
          <span className="link">
            <NavLink to="/saval">SAVOL JAVOBLAR</NavLink>
          </span>
          <span className="link">
            <NavLink to="/gunah">GUNOHI KABIRALAR</NavLink>
          </span>
          <span className="link">
            <NavLink to="/rumiy">JALOLIDDIN RUMIY</NavLink>
          </span>
        </div>
        <div className="menu-footer">
          <p>
            Dasturchi:  <NavLink to="/developer">Sardor</NavLink>
          </p>
        </div>
      </nav>
    </>
  );
}

export default Menu;
