import React from "react";
import "./Header.css";
import "../../fonts/Kiona-Regular.ttf";

export default function Header() {
  return (
    <section className="header--background">
      <img
        alt="cinema"
        className="img"
        src="../catalog_darken.jpg"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          marginTop: "-18px",
          marginLeft: "-10px",
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
