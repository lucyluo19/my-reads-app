import React, { Component } from "react";
import SearchResult from "./SearchResult";
import { search } from "./BooksAPI";
import { Link } from "react-router-dom";

class SearchBooks extends Component {
  state = {
    searchResults: [],
    query: ""
  };

  updateQuery = event => {
    const value = event.target.value;
    this.setState(() => ({ query: value.trim() }));
    this.searchBook(this.state.query);
  };

  searchBook = query => {
    if (query.length > 0) {
      search(query).then(result => {
        result.length > 0
          ? this.setState(() => ({ searchResults: result }))
          : this.setState(() => ({ searchResults: [] }));
      });
    }
  };

  resetSearch = () => {
    this.setState(() => ({ searchResults: [] }));
    this.setState(() => ({ query: "" }));
  };

  render() {
    const { searchResults, query } = this.state;
    const { books, moveShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={this.resetSearch}>
              Close
            </button>
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.updateQuery}
            />
          </div>
        </div>
        <SearchResult
          books={books}
          searchResult={searchResults}
          moveShelf={moveShelf}
        />
      </div>
    );
  }
}

export default SearchBooks;
