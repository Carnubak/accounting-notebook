'use strict';


/**
 * Fetches current account balance
 *
 * returns Object
 **/
exports.accountBalanceGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
