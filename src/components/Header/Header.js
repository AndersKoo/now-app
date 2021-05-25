import React from "react";
import "./Header.css";

import image from "../../img/catalog_darken.jpg";

export default function Header() {
  return (
    <section className="header--background">
      <img
        alt="logo"
        className="img"
        src={image}
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          marginTop: "-18px",
          marginLeft: "8px",
          paddingLeft: "12px",
          position: "relative",
        }}
      />
      <h1 className="header--title">
        <strong>PLAY</strong> <hr className="divider"></hr>
      </h1>
      <p className="header--infotext">Movies and tv-shows</p>
    </section>
  );
}
