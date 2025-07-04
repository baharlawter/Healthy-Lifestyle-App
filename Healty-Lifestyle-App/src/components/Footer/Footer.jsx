import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="contactDiv">
      <h3>Leave Your Comments Below</h3>
      <textarea id="comments" type="comments" placeholder="Comments"></textarea>
      <br />
      <button id="submit" type="submit" placeholder="submit">
        Submit
      </button>
      <div>
        <h3>Please Contact Us</h3>
        <p>123 Sloan lane, Las Vegas, NV, 66677</p>
        <p>Phone Number: 123-123-123</p>
        <p>Email: example@gmail.com</p>
      </div>
    </div>
  );
}
export default Footer;
