import "./App.css";

import Card1 from "./components/Cards/Card1";
import Card2 from "./components/Cards/Card2";
import Card3 from "./components/Cards/Card3";
import Card4 from "./components/Cards/Card4";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListOfMeals from "./ListOfBooks";

function App() {
  return (
    <div className="app-container">
      <Header />
      <br />
      <h1 className="title">Healthy Living Starts Here</h1>

      <h2 className="madeBy">Made by: Bahar Lawter</h2>

      <div className="cards">
        <hr />
        <Card1 />
        <hr />
        <Card2 />
        <hr />
        <Card3 />
        <hr />
        <Card4 />
      </div>
      <h2>Purchase Online Books</h2>
      <div className="prop-container">
        <ListOfMeals
          title="Healthy Recipes"
          author="Bahar Lawter"
          image="https://www.allrecipes.com/thmb/8NccFzsaq0_OZPDKmf7Yee-aG78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AvocadoToastwithEggFranceC4x3-bb87e3bbf1944657b7db35f1383fabdb.jpg"
        />
        <ListOfMeals
          title="Intermitten Fasting"
          author="Bahar Lawter"
          image="https://media.istockphoto.com/id/1129355124/photo/twelve-hour-intermittent-fasting-time-concept-with-clock-on-plate.jpg?s=612x612&w=0&k=20&c=3SbGM1j_ea9Kob_l6zCJdsWcyYWXK2fUkiGiw0rYefw="
        />
      </div>
      <Footer />
      <footer>© Copyright All rights reserved</footer>
    </div>
  );
}

export default App;
