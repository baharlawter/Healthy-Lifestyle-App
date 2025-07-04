import React from "react";
import './Shop.css';
import Books from "./ListOfBooks";
import { BooksArray } from "../../data/mockData";

function Shop() {


    return (
      <>
        <h2>Purchase Online Books</h2>
        <div className="prop-container">
          {BooksArray.map((book, index) => (
            <div className="book-container">
              <Books
                key={index}
                title={book.title}
                link={book.link}
                purchase={book.purchase}
                image={book.image}
                onClick={book.onClick}
              />

            </div>
          ))}
        </div>
      </>
    )
}

export default Shop;