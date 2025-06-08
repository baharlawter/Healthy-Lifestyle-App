import Plate from "../assets/Plate.jpg";
import "./cards.css";
function Card() {
  return (
    <div className="card">
      <h2 className="title">Healthy Recipes</h2>
      <img
        className="images"
        src={Plate}
        alt="Heatlhy recipe plate"
        width={200}
        height={200}
      ></img>
      <p className="paragraph">
        A healthy burrito bowl is a delicious and nutritious meal packed with
        fresh ingredients! Enjoy this vibrant dish as a balanced meal that’s
        both satisfying and nourishing!
      </p>
    </div>
  );
}

export default Card;
