import React from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends React.Component {
  render() {
    return (
      <Card
        style={
          this.props.selected
            ? {
                border: "solid red",
              }
            : {}
        }
        bg="dark"
        className="mb-4 book"
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={(e) => {
            this.props.setSelected(this.props.book.asin);
          }}
        />
      </Card>
    );
  }
}

export default SingleBook;
