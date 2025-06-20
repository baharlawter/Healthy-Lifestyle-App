import "./App.css";

import Card1 from "./components/Cards/Card1";
import Card2 from "./components/Cards/Card2";
import Card3 from "./components/Cards/Card3";
import Card4 from "./components/Cards/Card4";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <br />
      <br />
      <h1 className="title">Healthy Living Starts Here</h1>
      <hr />

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
      <Footer />
      <footer>© Copyright All rights reserved</footer>
    </div>
  );
}

export default App;
