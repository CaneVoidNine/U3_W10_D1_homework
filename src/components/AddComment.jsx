import React from "react";
import { Form, Col } from "react-bootstrap";

let uri = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmE4MWQ0YmUzZDAwMTU4NDYwMjYiLCJpYXQiOjE2NjkzMDkyMTksImV4cCI6MTY3MDUxODgxOX0._gOhMot086lwAa4kecmOIN6KcmIza4c7l-hJDka1xlg`;
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
            //OK!
            this.props.fetchComments(this.props.asin);
          } else {
            console.log("Error posting comment");
          }
        }}
      >
        <Form.Row>
          <Form.Group as={Col} controlId="formGridComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  text: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default AddComment;
