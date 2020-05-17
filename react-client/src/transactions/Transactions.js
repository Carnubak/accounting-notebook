import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function Transactions({ transactions }) {
  return (
    <Accordion>
      {transactions.map(transaction => (
        <Card key={transaction.id}>
          <Accordion.Toggle as={Card.Header} eventKey={transaction.id}>
            <strong>$</strong> {transaction.amount} {transaction.type}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={transaction.id}>
            <Card.Body>
              <p>
                <strong>Transaction ID:</strong> {transaction.id}
              </p>
              <p>
                <strong>Effective Date:</strong> {transaction.effectiveDate}
              </p>
              <p>
                <strong>Transaction type:</strong> {transaction.type}
              </p>
              <p>
                <strong>Transaction amount:</strong> {transaction.amount}
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

export default Transactions;
