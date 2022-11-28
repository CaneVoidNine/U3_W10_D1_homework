import React from "react";
import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Form } from "react-bootstrap";

class BookList extends React.Component {
  state = {
    search: "",
  };

  render() {
    return (
      <>
        <Form.Control
          className="ml-4 mb-4"
          style={{ width: "27rem" }}
          placeholder="Search books here"
          aria-label="Search"
          name="search"
          onChange={(e) => {
            this.setState({
              search: e.target.value,
            });
          }}
        />

        <Row md={this.props.selected ? 3 : 4} className="g-4 mx-2">
          {this.props.books
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((book, i) => (
              <Col key={book.asin}>
                <SingleBook
                  book={book}
                  setSelected={this.props.setSelected}
                  selected={this.props.selected === book.asin}
                />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
