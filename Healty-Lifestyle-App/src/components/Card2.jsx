import Fasting from "../assets/Fasting.jpg";
import "./cards.css";
import React, { useState } from "react";
function Card2() {
  let [cardState, setCardState] = useState(true);

  if (!cardState) {
    return (
      <div
        onClick={() => {
          setCardState(!cardState);
        }}
      >
        <img
          src="https://bing.com/th/id/BCO.4bfeeaaa-5e06-43af-9ae6-df638f6fea25.png"
          alt="Intermitten fasting"
          width={250}
          height={230}
        />
        <hr />
        <div>
          Intermittent fasting helps your body burn <br />
          fat and regulate blood sugar by <br />
          limiting when you eat, not <br />
          just what you eat. <br />
          It also supports weight <br />
          loss and more stable energy.
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="card"
        onClick={() => {
          setCardState(!cardState);
        }}
      >
        <h2 className="title">Intermittent Fasting</h2>
        <img
          className="images exercize"
          src={Fasting}
          alt="Exercize"
          width={200}
          height={200}
        ></img>

        <p className="paragraph">
          Intermittent fasting is a popular eating pattern that cycles between
          periods of eating and fasting. It can help with weight management,
          blood sugar control, and cellular repair by allowing the body to burn
          stored fat more efficiently.
          <hr />
          <br /> Click to learn more 😄👍
        </p>
      </div>
    );
  }
}

export default Card2;
