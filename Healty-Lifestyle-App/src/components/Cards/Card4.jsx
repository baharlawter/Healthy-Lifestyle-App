import Plate from "../../assets/Plate.jpg";
import "../cards.css";
import React, { useState } from "react";

function Card4() {
  let [cardState, setCardState] = useState(true);

  if (!cardState) {
    return (
      <div
        onClick={() => {
          setCardState(!cardState);
        }}
      >
        <img
          src="https://bing.com/th/id/BCO.87a5fdbb-b99d-4b63-93a5-2e54c0da97eb.png"
          alt="Healthy plate"
          width={250}
          height={230}
        />
        <hr />
        <div>
          Healthy eating gives your body <br />
          the fuel it needs to stay strong,
          <br /> focused, and energized. Foods <br />
          like veggies, lean proteins, and <br />
          whole grains keep your systems running <br />
          smoothly.
          <hr />
          Please Click here to go back 😁👍
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
        <h2 className="title">Eating Healthy</h2>
        <img
          className="images exercize"
          src={Plate}
          alt="Exercize"
          width={200}
          height={200}
        ></img>
        <p className="paragraph">
          Eating healthy fuels your body with the nutrients it needs to function
          at its best. A balanced diet supports strong immunity, steady energy,
          and better digestion—while helping to maintain a healthy weight and
          reduce the risk of chronic diseases like heart disease and diabetes.
          <hr />
          <br /> Click to learn more 😄👍
        </p>
      </div>
    );
  }
}

export default Card4;
