import { Component } from "react";
import { Container, Row, Col, ListGroup, List } from "react-bootstrap";
import BookData from "./BookData";

class BookList extends Component {
  render() {
    return (
      <Container className="my-5">
        <Row>
          {this.props.books.map((singleBook) => (
            <Col md={4} key={singleBook.asin}>
              <ul>
                <BookData
                  book={singleBook}
                  selectedBooks={this.props.selectedBooks}
                />
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
