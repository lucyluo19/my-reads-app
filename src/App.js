import React from "react";
import { getAll, update } from "./BooksAPI";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";
import { NotFound } from "./NotFound";

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
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ListBooks books={myBooks} moveShelf={this.moveShelf} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <SearchBooks books={myBooks} moveShelf={this.moveShelf} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
