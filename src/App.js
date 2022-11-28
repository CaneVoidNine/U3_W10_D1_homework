import WarningSign from "./components/WarningSign";
import "./App.css";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";
import books from "./components/fantasy.json";
import { Container, Row, Col } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import { Component } from "react";
export default class App extends Component {
  state = {
    isBooklist: true,
    asom: "",
  };

  setBookList = (BookList) => {
    this.setState({
      isBooklist: !this.state.isBooklist,
    });
  };
  render() {
    return (
      <Container>
        <WarningSign atext="Alert-san have mercy"></WarningSign>
        <MyBadge badgetext="9" badgecolor="danger"></MyBadge>
        <Row>
          <Col>
            <BookList class="books" books={books}></BookList>
          </Col>
          <Col>
            <CommentArea />
          </Col>
        </Row>
      </Container>
    );
  }
}
