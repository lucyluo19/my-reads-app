import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchInput extends Component {
  state = {
    query: ""
  };
  updateQuery = event => {
    const { value } = event.target;
    this.setState(() => ({ query: value.trim() }));
    this.props.searchBook(value);
  };
  render() {
    const { query } = this.state;
    return (
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
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
    );
  }
}

export default SearchInput;
