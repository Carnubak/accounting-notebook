"use strict";

const db = require("../data/database");

/**
 * Fetches current account balance
 *
 * returns Object
 **/
exports.accountBalanceGET = function() {
  return Promise.resolve({ balance: db.getBalance() });
};
