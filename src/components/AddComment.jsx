import React from "react";
import { Form, Col } from "react-bootstrap";

let uri = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmE4MWQ0YmUzZDAwMTU4NDYwMjYiLCJpYXQiOjE2Njk3MjcyMTIsImV4cCI6MTY3MDkzNjgxMn0.T7mbp-neLd29rJxU-ZLkbkwQbiKw1OzL14pL6NfGx4k`;
const opts = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

class AddComment extends React.Component {
  state = {
    rating: "1",
    text: "",
  };

  async addComment() {}

  render() {
    return (
      <Form
        onSubmit={async (e) => {
          e.preventDefault();

          let response = await fetch(uri, {
            headers: {
              ...opts.headers,
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              comment: this.state.text,
              rate: this.state.rating,
              elementId: this.props.asin,
            }),
          });

          if (response.ok) {
            this.props.fetchComments(this.props.asin);
            this.setState({
              ...this.state,
              text: "",
            });
          } else {
            console.log("Error posting comment");
          }
        }}
      >
        <Form.Row>
          <Form.Group as={Col} xs={12} controlId="formGridComment">
            <Form.Label>Comments: </Form.Label>
            <Form.Control
              value={this.state.text}
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  text: e.target.value,
                });
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRating">
            <Form.Label>Ratings: </Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  rating: e.target.value,
                });
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <button type="submit">Submit</button>
        <hr />
      </Form>
    );
  }
}

export default AddComment;
