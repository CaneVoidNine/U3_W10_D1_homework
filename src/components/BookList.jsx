import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookData from "./BookData";

class BookList extends Component {
  render() {
    return (
      <Container className="my-5">
        <h3>Books</h3>
        <Row>
          {this.props.books.map((singleBook) => (
            <Col key={singleBook.asin}>
              <BookData
                book={singleBook}
                selectedBooks={this.props.selectedBooks}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
