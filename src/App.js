import "./App.css";
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import BookList from "./components/BookList";
import books from "./fantasy.json";

class App extends Component {
  state = {
    selected: null,
  };

  setSelected = (asin) => {
    this.setState({
      selected: asin,
    });
  };

  render() {
    return (
      <>
        <h1 className="ml-4">Library of Fantasy books</h1>
        <Row>
          <Col>
            <BookList
              selected={this.state.selected}
              books={books}
              setSelected={this.setSelected}
            />
          </Col>
          {this.state.selected && (
            <Col md={4} className="mx-3">
              <CommentArea book={this.state.selected} />
            </Col>
          )}
        </Row>
      </>
    );
  }
}

export default App;
