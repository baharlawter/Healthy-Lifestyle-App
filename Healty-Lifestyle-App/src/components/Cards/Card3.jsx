import Sugar from "../../assets/Sugar.jpg";
import "../cards.css";
import { useState } from "react";

function Card3() {
  let [cardState, setCardState] = useState(true);

  if (!cardState) {
    return (
      <div
        onClick={() => {
          setCardState(!cardState);
        }}
      >
        <img
          src="https://bing.com/th/id/BCO.a9d83cbc-2e80-42a4-8dbb-00ba42626bbb.png"
          alt="eating healthy"
          width={250}
          height={230}
        />
        <hr />
        <div>
          Too much sugar can cause weight gain, <br />
          increase your risk of diabetes,
          <br /> and lead to heart problems. It offers no real <br />
          nutrients—just empty calories that can <br /> mess with your body’s
          balance.
          <br />
        </div>
      </div>
    );
  } else {
    return (
      <div className="card" onClick={() => setCardState(!useState)}>
        <h2 className="title">Quitting Added Sugar</h2>
        <img
          className="images"
          src={Sugar}
          alt="Why added sugar is bad for you?"
          width={200}
          height={200}
        ></img>

        <p className="paragraph">
          Added sugar can have serious effects on health, contributing to weight
          gain, heart disease, and increased risk of diabetes. Excess sugar
          consumption can lead to inflammation, disrupt metabolism, and even
          accelerate skin aging2. <hr />
          <br /> Click to learn more 😄👍
        </p>
      </div>
    );
  }
}

export default Card3;
