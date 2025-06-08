import Fasting from "../assets/Fasting.jpg";
import "./cards.css";
function Card2() {
  return (
    <div className="card">
      <h2 className="title">Intermittent Fasting</h2>
      <img
        className="images"
        src={Fasting}
        alt="Intermitten Fasting"
        width={200}
        height={200}
      ></img>
      <p className="paragraph">
        Intermittent fasting is a popular eating pattern that cycles between
        periods of eating and fasting. It can help with weight management, blood
        sugar control, and cellular repair by allowing the body to burn stored
        fat more efficiently.
      </p>
    </div>
  );
}

export default Card2;
