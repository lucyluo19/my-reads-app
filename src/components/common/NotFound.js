import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="page-not-found-content">
        <h2>Page Not Found!</h2>
        <h3>
          We cannot find the page you would love to view. Please go back to the
          Home page.
        </h3>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};
