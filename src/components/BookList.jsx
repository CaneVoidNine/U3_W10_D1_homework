import React from "react";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        {this.props.books.map((book) => (
          <SingleBook book={book}></SingleBook>
        ))}
      </>
    );
  }
}

export default BookList;
