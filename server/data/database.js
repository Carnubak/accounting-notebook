"use strict";

const { v4: uuid4 } = require("uuid");

var transactions = {};
var transactionIds = [];
var balance = 0;
let locked = false;

exports.addTransaction = function addTransaction({ type, amount }) {
  if (locked) {
    return Promise.reject({ code: 409, payload: "Locked resource" });
  }
  if (type === "debit" && amount > balance) {
    return Promise.reject({ code: 403, payload: "Insufficient balance" });
  }
  locked = true;
  const id = uuid4();
  const effectiveDate = new Date().toISOString();
  const record = {
    type,
    amount,
    effectiveDate
  };
  transactions[id] = record;
  transactionIds.push(id);
  if (type === "credit") {
    balance = balance + amount;
  } else {
    balance = balance - amount;
  }
  locked = false;
  return Promise.resolve({
    id,
    ...record
  });
};

exports.getTransaction = function getTransaction(id) {
  if (locked) {
    return Promise.reject({ code: 409, payload: "Locked resource" });
  }
  return Promise.resolve(transactions[id]);
};

exports.getAllTransactions = function getAllTransactions() {
  if (locked) {
    return Promise.reject({ code: 409, payload: "Locked resource" });
  }
  return Promise.resolve(
    transactionIds.map(id => {
      return {
        id,
        ...transactions[id]
      };
    })
  );
};

exports.getBalance = function getBalance() {
  if (locked) {
    return Promise.reject({ code: 409, payload: "Locked resource" });
  }
  return Promise.resolve({ balance });
};
