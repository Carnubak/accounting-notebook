import React from "react";
import TransactionsContainer from "./transactions/TransactionsContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Accounting Notebook</h1>
        </Col>
      </Row>
      <TransactionsContainer></TransactionsContainer>
    </Container>
  );
}

export default App;
