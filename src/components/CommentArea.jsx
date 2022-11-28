import { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmE4MWQ0YmUzZDAwMTU4NDYwMjYiLCJpYXQiOjE2NjkzMDkyMTksImV4cCI6MTY3MDUxODgxOX0._gOhMot086lwAa4kecmOIN6KcmIza4c7l-hJDka1xlg",
  },
};

class CommentArea extends Component {
  state = {
    comment: [],
  };

  componentDidMount = () => {
    if (this.props.asin) this.fetchCommentList(this.props.asin);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.asin && prevProps.asin !== this.props.asin) {
      this.fetchCommentList(this.props.asin);
    }
  };

  fetchCommentList = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        options
      );
      if (response.ok) {
        let data = await response.json();

        this.setState({ comment: data });
      } else {
        console.log("Network Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Container className="my-5">
        <h3>Book Comments</h3>
        <Row>
          {this.state.comment.map((bookComment) => (
            <Col>
              <Card key={bookComment.asin}>
                <Card.Body>
                  <Card.Subtitle className="text-muted">
                    {bookComment.rate}
                  </Card.Subtitle>
                  <Card.Text>{bookComment.comment}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default CommentArea;
