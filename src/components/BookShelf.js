import React from "react";
import { Book } from "./Book";

const BookShelf = ({ bookshelf, books, moveShelf }) => {
  const booksOnSelf = books.filter(book => book.shelf === bookshelf.key);
  //console.log("booksOnSelf", booksOnSelf);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnSelf.map(book => (
            <Book
              key={book.id}
              book={book}
              books={books}
              moveShelf={moveShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
