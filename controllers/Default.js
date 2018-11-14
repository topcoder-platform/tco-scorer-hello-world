'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.getGreeting = function getGreeting (req, res, next) {
  Default.getGreeting()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendGreeting = function sendGreeting (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.sendGreeting(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
