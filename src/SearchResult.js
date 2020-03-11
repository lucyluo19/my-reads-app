import React from "react";
import { Book } from "./Book";

const SearchResult = ({ books, searchResult, moveShelf }) => {
  console.log("my books", books);
  console.log("search result", searchResult);

  const updatedSearchResult = searchResult.map(bookInSearchResult => {
    books.map(book => {
      if (book.id === bookInSearchResult.id) {
        bookInSearchResult.shelf = book.shelf;
      }
      return book;
    });
    return bookInSearchResult;
  });

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedSearchResult.length > 0 &&
          updatedSearchResult.map(book => (
            <Book
              key={book.id}
              book={book}
              bookShelf={book.shelf ? book.shelf : "none"}
              moveShelf={moveShelf}
            />
          ))}
      </ol>
    </div>
  );
};

export default SearchResult;
