import Card from "./components/cards";
import "./App.css";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <br />
      <br />
      <h1 className="title">Healthy Living Starts Here</h1>
      <div className="cards">
        <Card />
        <hr />
        <Card1 />
        <hr />
        <Card2 />
        <hr />
        <Card3 />
      </div>
      <Footer />
      <footer>© Copyright All rights reserved</footer>
    </div>
  );
}

export default App;
