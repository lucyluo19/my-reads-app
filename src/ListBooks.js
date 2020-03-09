import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const bookshelves = [
  { key: "currentlyReading", name: "Currently Reading" },
  { key: "wantToRead", name: "Want to Read" },
  { key: "read", name: "Read" }
];
class ListBooks extends Component {
  render() {
    const { books, moveShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelves.map(bookshelf => (
              <BookShelf
                key={bookshelf.key}
                bookshelf={bookshelf}
                books={books}
                moveShelf={moveShelf}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
