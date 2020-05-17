import React, { useState, useEffect } from "react";
import Transactions from "./Transactions";

function TransactionsContainer() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/transactions")
      .then(response => response.json())
      .then(transactions => setTransactions(transactions));
  }, []);

  return <Transactions transactions={transactions}></Transactions>;
}

export default TransactionsContainer;
