import React, { Component } from "react";

class BookShelfChanger extends Component {
  state = {
    currentBookShelf: this.props.bookShelf
  };
  changeShelf = event => {
    const { value } = event.target;
    this.setState(() => ({ currentBookShelf: value }));
    this.props.moveShelf(this.props.book, value);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.currentBookShelf} onChange={this.changeShelf}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
