import "./Shop.css";
import Books from "./ListOfBooks";
import { BooksArray } from "../../data/mockData";
import "./Shop.css";

function Shop() {
  return (
    <>
      <h2 className="h2-element">Purchase Online Books</h2>
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
  );
}

export default Shop;
