import React from "react";
import { Book } from "./Book";

const SearchResult = ({ books, searchResult, moveShelf }) => {
  console.log("my books", books);
  console.log("search result", searchResult);

  // const updateShelfInfo = searchResult.map(
  //   bookInSearchResult => (bookInSearchResult.shelf = "none")
  // );

  // const updatedSearchResult = updateShelfInfo.map(bookInSearchResult => {
  //   books.map(book => {
  //     if (book.id === bookInSearchResult.id) {
  //       bookInSearchResult.shelf = book.shelf;
  //     }
  //     return book;
  //   });
  //   return bookInSearchResult;
  // });

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchResult.length > 0 &&
          searchResult.map(book => (
            <Book
              key={book.id}
              book={book}
              books={books}
              moveShelf={moveShelf}
            />
          ))}
      </ol>
    </div>
  );
};

export default SearchResult;
