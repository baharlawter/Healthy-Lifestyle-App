import Sugar from "../assets/Sugar.jpg";
import "./cards.css";
function Card3() {
  return (
    <div className="card">
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
        accelerate skin aging2.
      </p>
    </div>
  );
}

export default Card3;
