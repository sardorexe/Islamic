import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Link({ text, link, className }) {
  return (
    <NavLink className={className} to={link}>
      {text}
    </NavLink>
  );
}

function Navigation() {
  return (
    <div className="content-navigation col-sm-10 col-12 col-md-12 col-lg-12">
      <Link className="navigation-link" link="/hadis/buxoriy" text="Buxoriy" />
      <Link
        className="navigation-link"
        link="/hadis/termiziy"
        text="Termiziy"
      />
      <Link className="navigation-link" link="/hadis/other" text="Aralash" />
    </div>
  );
}

export default Navigation;
