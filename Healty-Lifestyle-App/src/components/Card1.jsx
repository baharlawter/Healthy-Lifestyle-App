import Exercise from "../assets/Exercize.jpg";
import "./cards.css";
function Card1() {
  return (
    <div className="card">
      <h2 className="title">Exercise Daily</h2>
      <img
        className="images"
        ClassName="exercize"
        src={Exercise}
        alt="Exercize"
        width={200}
        height={200}
      ></img>
      <p className="paragraph">
        Exercise is essential for maintaining a healthy body and mind. It
        strengthens muscles, improves heart health, and boosts endurance, making
        daily activities easier. Regular movement helps control weight, reduce
        stress, and enhance mood by releasing feel-good hormones.
      </p>
    </div>
  );
}

export default Card1;
