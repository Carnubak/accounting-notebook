'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.accountBalanceGET = function accountBalanceGET (req, res, next) {
  Default.accountBalanceGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
