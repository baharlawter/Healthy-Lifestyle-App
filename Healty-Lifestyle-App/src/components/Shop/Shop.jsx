import "./Shop.css";
import Book from "./Book/Book";
import { BooksArray } from "../../data/mockData";
import { useState } from "react";
function Shop() {
  const [cart, setCart] = useState([]);
  function addToCart(book) {
    setCart([...cart, book]);
  }
  function deleteCart(book) {
    setCart(cart.filter((item) => item.title !== book.title));
  }

  return (
    <>
      <h2 className="h2-element">Purchase Online Books</h2>
      <div className="prop-container">
        {BooksArray.map((book, index) => (
          <div className="book-container">
            <Book
              key={index}
              title={book.title}
              link={book.link}
              purchase={book.purchase}
              image={book.image}
              onAdd={() => addToCart(book)}
              onDelete={() => deleteCart(book)}
              // onClick={book.onClick}
            />
          </div>
        ))}
        <br />
        <div>
          <h3 className="cart-element">🛒 Cart: {cart.length} </h3>
        </div>
      </div>
    </>
  );
}

export default Shop;
