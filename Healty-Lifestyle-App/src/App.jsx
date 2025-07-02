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
          title="Youg Forever"
          purchase="Price $25"
          image="https://m.media-amazon.com/images/I/41jcolfcnEL._SY445_SX342_.jpg"
          onClick={() =>
            window.open("https://www.amazon.com/s?k=Young+forever")
          }
        />
        <ListOfMeals
          title="The Obesity Code"
          purchase="Price $30"
          image="https://m.media-amazon.com/images/I/61SArpks6RL._SL1500_.jpg"
        />
      </div>
      <Footer />
      <footer>© Copyright All rights reserved</footer>
    </div>
  );
}

export default App;
