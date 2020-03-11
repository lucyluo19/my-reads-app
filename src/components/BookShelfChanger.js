import React, { Component } from "react";

class BookShelfChanger extends Component {
  changeShelf = event => {
    const { value } = event.target;
    this.props.moveShelf(this.props.book, value);
  };
  render() {
    const { book, books } = this.props;
    console.log(book);
    console.log(books);

    let currentBookShelf = "none";

    for (let mybook of books) {
      if (mybook.id === book.id) {
        currentBookShelf = mybook.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select defaultValue={currentBookShelf} onChange={this.changeShelf}>
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
