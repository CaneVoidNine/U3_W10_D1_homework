import React from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends React.Component {
  render() {
    return (
      <Card
        style={
          this.props.selected
            ? {
                boxShadow: "0 0 50px 15px white",
              }
            : {}
        }
        bg="dark"
        className="mb-3 book"
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
