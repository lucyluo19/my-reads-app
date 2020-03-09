import React from "react";
import { getAll, update } from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {
  state = {
    myBooks: []
  };

  componentDidMount() {
    getAll().then(books => {
      this.setState(() => ({ myBooks: books }));
    });
  }

  moveShelf = (book, bookshelf) => {
    update(book, bookshelf);
    if (bookshelf === "none") {
      this.setState(currentState => ({
        myBooks: currentState.myBooks.filter(b => book.id !== b.id)
      }));
    }
    book.shelf = bookshelf;
    this.setState(currentState => ({
      myBooks: [...currentState.myBooks.filter(b => book.id !== b.id), book]
    }));
  };

  render() {
    console.log(this.state.myBooks);
    const { myBooks } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks books={myBooks} moveShelf={this.moveShelf} />
          )}
        />
        <Route path="/search" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
