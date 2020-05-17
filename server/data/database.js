"use strict";

const { v4: uuid4 } = require("uuid");

var transactions = {};
var transactionIds = [];

exports.addTransaction = function addTransaction({ type, amount }) {
  const id = uuid4();
  const effectiveDate = new Date().toISOString();
  const record = {
    type,
    amount,
    effectiveDate
  };
  transactions[id] = record;
  transactionIds.push(id);
  return {
    id,
    ...record
  };
};

exports.getTransaction = function getTransaction(id) {
  return transactions[id];
};

exports.getAllTransactions = function getAllTransactions() {
  return transactionIds.map(id => {
    return {
      id,
      ...transactions[id]
    };
  });
};

exports.getBalance = function getBalance() {
  return transactionIds.reduce((total, nextId) => {
    if (transactions[nextId].type === "credit") {
      return total + transactions[nextId].amount;
    } else {
      return total - transactions[nextId].amount;
    }
  }, 0);
};
