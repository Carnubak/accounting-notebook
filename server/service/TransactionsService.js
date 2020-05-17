"use strict";

const db = require("../data/database");

/**
 * Commit new transaction to the account
 *
 * body TransactionBody Transaction object
 * returns Transaction
 **/
exports.commitTransaction = function(body) {
  return db.addTransaction(body);
};

/**
 * Find transaction by ID
 * Returns a single transaction object
 *
 * transactionId UUID ID of transaction to return
 * returns Transaction
 **/
exports.getTransactionById = function(transactionId) {
  return db.getTransaction(transactionId);
};

/**
 * Fetches transactions history
 *
 * returns List
 **/
exports.transactionsHistory = function() {
  return db.getAllTransactions();
};
