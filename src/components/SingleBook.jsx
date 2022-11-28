import React from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col>
        <Card key={this.props.book.asin} style={{ width: "18rem" }}>
          <Card.Img
            onClick={() => {
              this.setState({
                selected: true,
              });
            }}
            variant="top"
            src={this.props.book.img}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            {this.state.selected && (
              <CommentArea asin={this.props.book.asin}></CommentArea>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
