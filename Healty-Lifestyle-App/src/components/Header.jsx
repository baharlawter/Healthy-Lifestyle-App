import React, { useEffect, useState } from "react";
import "./cards.css";

function Header() {
  const handleClick = () => {
    alert("Button Clicked 😊");
  };

  return (
    <div className="buttons header">
      <button onClick={handleClick}>Home</button>
      <br />
      <button onClick={handleClick}>Contact</button>
      <br />
      <button onClick={handleClick}>Reviews</button> <br />
    </div>
  );
}
export default Header;
