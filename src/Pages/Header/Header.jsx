import React from "react";
import Menu from "../containers/Menu/Menu";
import Content from "./components/Content/Content";
import contentImg from "./components/Content/content-img.svg";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <Menu />
      <div className="Content container">
        <Content />
      </div>
    </div>
  );
}

export default Header;
