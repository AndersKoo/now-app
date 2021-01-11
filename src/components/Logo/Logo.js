import React from "react";

function Logo() {
  return (
    <div className="navbar">
      <img
        alt="cinema"
        className="logo"
        src="../play.png"
        style={{
          position: "absolute",
          top: "13px",
          left: "10px",
          width: "5em",
          marginTop: "-5px",
          zIndex: "1",
          color: "#46BCDE !important",
        }}
      />
    </div>
  );
}

export default Logo;
