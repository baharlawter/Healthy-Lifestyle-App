import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListOfMeals from "./components/Shop/ListOfBooks";
import About from "./components/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <br />
          <h1 className="title">Healthy Living Starts Here</h1>
          <h2 className="made-by">Made by: Bahar Lawter</h2>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
          <footer>© Copyright All rights reserved</footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
