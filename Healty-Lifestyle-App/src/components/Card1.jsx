import Exercise from "../assets/Exercize.jpg";
import "./cards.css";
import { useState } from "react";
function Card1() {
  let [cardState, setCardState] = useState(true);
  if (!cardState) {
    return (
      <div
        onClick={() => {
          setCardState(!cardState);
        }}
      >
        <img
          src="https://bing.com/th/id/BCO.fffac785-3176-4a4d-b6be-71f05aeae974.png"
          alt="eating healthy"
          width={250}
          height={230}
        />
        <hr />
        <div>
          Exercise strengthens your heart, muscles,
          <br /> and bones while boosting energy and
          <br /> endurance. It helps manage weight,
          <br /> improves blood circulation, and supports
          <br /> better sleep—making daily life easier <br />
          and more enjoyable.
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
        <h2 className="title">Exercise Daily</h2>
        <img
          className="images exercize"
          src={Exercise}
          alt="Exercize"
          width={200}
          height={200}
        ></img>
        <p className="paragraph">
          Exercise is essential for maintaining a healthy body and mind. It
          strengthens muscles, improves heart health, and boosts endurance,
          making daily activities easier. Regular movement helps control weight,
          reduce stress, and enhance mood by releasing feel-good hormones.
          <hr />
          <br /> Click to learn more 😄👍
        </p>
      </div>
    );
  }
}

export default Card1;
