import React from "react";
import BookShelfChanger from "./BookShelfChanger";

export const Book = ({ book, bookShelf, moveShelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${
                book.imageLinks
                  ? book.imageLinks.thumbnail
                  : "images/book-placeholder.jpg"
              })`
            }}
          ></div>
          <BookShelfChanger
            book={book}
            bookShelf={bookShelf}
            moveShelf={moveShelf}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};
